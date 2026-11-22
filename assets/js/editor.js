// Embedded Python editor: Monaco (the VS Code editor) + Pyodide (Python in the browser).
// Both are loaded from a CDN the first time a student opens the panel.
(function () {
  var MONACO = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs';
  var PYODIDE = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/';
  var LIB_FILES = ['TEALS_utils.py', 'criteria.py', 'dictionaries.py', 'items.py', 'pages.py', 'inventory.txt'];
  var DEFAULT_CODE = '# Try out the idea from this lesson here.\n' +
    'import random\n\n' +
    'name = input("What is your name? ")\n' +
    'print("Hello,", name)\n' +
    'print("Your lucky number is", random.randint(1, 10))\n';

  var root = document.getElementById('py-editor');
  if (!root) return;
  var base = root.getAttribute('data-base');
  var storeKey = 'py-code:' + location.pathname;
  var toggle = document.getElementById('py-toggle');
  var panel = document.getElementById('py-panel');
  var out = document.getElementById('py-output');
  var runBtn = document.getElementById('py-run');
  var status = document.getElementById('py-status');
  var editor = null, pyodide = null;

  function load(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = function () { rej(new Error('Could not load ' + src)); };
      document.head.appendChild(s);
    });
  }

  function isDark() {
    var t = document.documentElement.getAttribute('data-theme');
    return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  }

  var current = null; // output element that receives stdout/stderr for the running snippet

  function write(text, cls) {
    var span = document.createElement('span');
    if (cls) span.className = cls;
    span.textContent = text;
    current.appendChild(span);
    current.scrollTop = current.scrollHeight;
  }

  var monacoReady = null;
  function loadMonaco() {
    if (!monacoReady) monacoReady = load(MONACO + '/loader.js').then(function () {
      return new Promise(function (res) {
        window.require.config({ paths: { vs: MONACO } });
        window.require(['vs/editor/editor.main'], function () {
          new MutationObserver(function () {
            window.monaco.editor.setTheme(isDark() ? 'vs-dark' : 'vs');
          }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
          res();
        });
      });
    }).catch(function (e) { monacoReady = null; throw e; });
    return monacoReady;
  }

  function makeEditor(el, code, opts) {
    return loadMonaco().then(function () {
      var ed = window.monaco.editor.create(el, Object.assign({
        value: code,
        language: 'python',
        theme: isDark() ? 'vs-dark' : 'vs',
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 14,
        tabSize: 4,
        insertSpaces: true,
        scrollBeyondLastLine: false
      }, opts || {}));
      return ed;
    });
  }

  var pyReady = null;
  function loadPython() {
    if (!pyReady) pyReady = load(PYODIDE + 'pyodide.js').then(function () {
      return window.loadPyodide({ indexURL: PYODIDE });
    }).then(function (py) {
      pyodide = py;
      py.setStdout({ batched: function (s) { write(s + '\n'); } });
      py.setStderr({ batched: function (s) { write(s + '\n', 'err'); } });
      window.__pyInput = function (prompt) {
        var v = window.prompt(prompt || 'Input:');
        write((prompt || '') + (v === null ? '' : v) + '\n', 'in');
        return v === null ? '' : v;
      };
      py.runPython('import builtins, js\nbuiltins.input = lambda prompt="": js.__pyInput(str(prompt))');
      return Promise.all(LIB_FILES.map(function (f) {
        return fetch(base + '/assets/python/' + f).then(function (r) { return r.text(); })
          .then(function (t) { py.FS.writeFile('/home/pyodide/' + f, t); });
      }));
    }).catch(function (e) { pyReady = null; throw e; });
    return pyReady;
  }

  // Runs code, sending output to outEl and state text to statusEl.
  function runCode(code, outEl, statusEl, btn) {
    current = outEl;
    outEl.textContent = '';
    btn.disabled = true;
    statusEl.textContent = 'Loading Python…';
    return loadPython().then(function () {
      current = outEl;
      statusEl.textContent = 'Running…';
      return pyodide.runPythonAsync(code);
    }).then(function () {
      statusEl.textContent = 'Finished';
    }).catch(function (e) {
      write(String(e.message || e).replace(/^[\s\S]*?(Traceback)/, '$1') + '\n', 'err');
      statusEl.textContent = 'Error';
    }).then(function () { btn.disabled = false; });
  }

  function initPanel() {
    if (editor || panelLoading) return;
    panelLoading = true;
    status.textContent = 'Loading editor…';
    makeEditor(document.getElementById('py-monaco'), localStorage.getItem(storeKey) || DEFAULT_CODE).then(function (ed) {
      editor = ed;
      ed.onDidChangeModelContent(function () { localStorage.setItem(storeKey, ed.getValue()); });
      ed.addCommand(window.monaco.KeyMod.CtrlCmd | window.monaco.KeyCode.Enter, run);
      status.textContent = 'Ready';
    }).catch(function (e) {
      panelLoading = false;
      status.textContent = 'Failed to load';
      out.textContent = e.message;
    });
  }
  var panelLoading = false;

  function run() {
    if (!editor) return;
    runCode(editor.getValue(), out, status, runBtn);
  }

  // Turn each Python code block in the lesson into a runnable, editable example.
  function makeBlockRunnable(block) {
    var pre = block.querySelector('pre');
    var original = pre.innerText.replace(/\n$/, '');
    var run = document.createElement('button');
    run.type = 'button'; run.className = 'run-btn'; run.textContent = '▶ Try it';
    block.appendChild(run);
    run.addEventListener('click', function () {
      run.remove();
      var copy = block.querySelector('.copy-btn');
      if (copy) copy.remove();
      pre.hidden = true;
      var wrap = document.createElement('div');
      wrap.className = 'inline-py';
      wrap.innerHTML = '<div class="py-bar"><span class="py-status" role="status"></span>' +
        '<button type="button" class="py-btn py-run">Run ▶</button>' +
        '<button type="button" class="py-btn">Reset</button></div>' +
        '<div class="py-monaco inline-monaco"></div><pre class="py-output" aria-live="polite"></pre>';
      block.appendChild(wrap);
      var st = wrap.querySelector('.py-status'), btns = wrap.querySelectorAll('.py-btn');
      var o = wrap.querySelector('.py-output'), host = wrap.querySelector('.inline-monaco');
      var lines = original.split('\n').length;
      host.style.height = Math.min(Math.max(lines, 3), 20) * 19 + 14 + 'px';
      st.textContent = 'Loading editor…';
      makeEditor(host, original, { scrollbar: { alwaysConsumeMouseWheel: false } }).then(function (ed) {
        var go = function () { runCode(ed.getValue(), o, st, btns[0]); };
        btns[0].addEventListener('click', go);
        btns[1].addEventListener('click', function () { ed.setValue(original); });
        ed.addCommand(window.monaco.KeyMod.CtrlCmd | window.monaco.KeyCode.Enter, go);
        st.textContent = 'Edit the code, then press Run (Ctrl/Cmd+Enter)';
      }).catch(function (e) { st.textContent = 'Failed to load: ' + e.message; });
    });
  }

  document.querySelectorAll('#article div.language-python > div.highlight').forEach(makeBlockRunnable);

  toggle.addEventListener('click', function () {
    var open = panel.hidden;
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', open);
    if (open) initPanel();
  });
  runBtn.addEventListener('click', run);
  document.getElementById('py-clear').addEventListener('click', function () { out.textContent = ''; });
  document.getElementById('py-reset').addEventListener('click', function () {
    if (editor && confirm('Reset the editor to the starter code?')) editor.setValue(DEFAULT_CODE);
  });
})();
