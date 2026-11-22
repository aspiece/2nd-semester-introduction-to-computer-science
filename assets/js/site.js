---
layout: null
---
(function () {
  var root = document.documentElement;
  var $ = function (s) { return document.querySelector(s); };

  var themeBtn = $('#theme-btn');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  var sidebar = $('#sidebar'), scrim = $('#scrim'), menuBtn = $('#menu-btn');
  function setMenu(open) {
    if (!sidebar) return;
    sidebar.classList.toggle('open', open);
    scrim.hidden = !open;
    menuBtn.setAttribute('aria-expanded', open);
  }
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', function () { setMenu(!sidebar.classList.contains('open')); });
    scrim.addEventListener('click', function () { setMenu(false); });
  }

  // Highlight current page and open its parent sections
  if (sidebar) {
    var here = decodeURIComponent(location.pathname).replace(/\/index\.html$/, '/');
    sidebar.querySelectorAll('a').forEach(function (a) {
      if (decodeURIComponent(a.pathname) === here) {
        a.classList.add('active');
        for (var d = a.closest('details'); d; d = d.parentElement.closest('details')) d.open = true;
        a.scrollIntoView({ block: 'center' });
      }
    });
  }

  // Previous/next links follow the sidebar order
  var pager = $('#pager');
  if (pager && sidebar && location.pathname.replace(/\/$/, '') !== '' ) {
    var links = Array.prototype.slice.call(sidebar.querySelectorAll('a'));
    var i = links.findIndex(function (a) { return a.classList.contains('active'); });
    var mk = function (a, cls, label) {
      return '<a class="' + cls + '" href="' + a.href + '"><small>' + label + '</small>' + a.textContent + '</a>';
    };
    if (i >= 0) pager.innerHTML = (i > 0 ? mk(links[i - 1], 'prev', '← Previous') : '') + (i < links.length - 1 ? mk(links[i + 1], 'next', 'Next →') : '');
  }
  if (pager && !pager.children.length) pager.remove();

  var article0 = $('#article');
  if (article0) {
    article0.querySelectorAll('a[href]').forEach(function (a) {
      var m = a.pathname.match(/\.(docx?|pdf|pptx?|xlsx|zip)$/i);
      if (m) { var b = document.createElement('span'); b.className = 'file-badge ' + m[1].toLowerCase(); b.textContent = m[1]; a.after(b); }
    });
    article0.querySelectorAll('div.highlight').forEach(function (h) {
      var btn = document.createElement('button');
      btn.className = 'copy-btn'; btn.type = 'button'; btn.textContent = 'Copy';
      btn.addEventListener('click', function () {
        var text = h.querySelector('pre').innerText;
        (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(function () {
          btn.textContent = 'Copied!'; setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
        }, function () { btn.textContent = 'Press Ctrl+C'; });
      });
      h.appendChild(btn);
    });
  }

  // Breadcrumbs from the active sidebar branch
  var crumbs = $('#crumbs'), cur = sidebar && sidebar.querySelector('a.active');
  if (crumbs && cur) {
    var trail = [];
    for (var d = cur.closest('details'); d; d = d.parentElement.closest('details')) {
      var sa = d.querySelector(':scope > summary > a');
      if (sa && sa !== cur) trail.unshift(sa);
    }
    var esc2 = function (t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
    crumbs.innerHTML = [{ href: '{{ site.baseurl }}/', text: 'Home' }].concat(trail.map(function (a) { return { href: a.href, text: a.textContent }; }))
      .map(function (c) { return '<a href="' + c.href + '">' + esc2(c.text) + '</a>'; }).join(' › ') + ' › <span>' + esc2(cur.textContent) + '</span>';
  }
  if (crumbs && !crumbs.children.length) crumbs.remove();

  // Callouts: wrap Do Now / Lab / Project / Instructor sections
  if (article0) {
    var kinds = [[/^do now/i, 'donow', '⏱'], [/\blab\b/i, 'lab', '🧪'], [/project/i, 'project', '🚀'], [/(instructor|teacher)/i, 'notes', '📝']];
    article0.querySelectorAll('h2').forEach(function (h) {
      var k = kinds.find(function (k) { return k[0].test(h.textContent); });
      if (!k) return;
      var box = document.createElement('section');
      box.className = 'callout callout-' + k[1];
      h.before(box);
      box.appendChild(h);
      h.insertAdjacentText('afterbegin', k[2] + ' ');
      while (box.nextSibling && !(box.nextSibling.tagName === 'H2' || box.nextSibling.tagName === 'H1')) box.appendChild(box.nextSibling);
    });
  }

  var list = $('#toc-list'), article = $('#article');
  if (list && article) {
    var heads = article.querySelectorAll('h2, h3');
    heads.forEach(function (h) {
      if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/[^\w]+/g, '-');
      var li = document.createElement('li'), a = document.createElement('a');
      li.className = h.tagName.toLowerCase();
      a.href = '#' + h.id; a.textContent = h.textContent;
      li.appendChild(a); list.appendChild(li);
    });
    if (!heads.length) $('.toc').style.display = 'none';
  }

  var top = $('#to-top');
  if (top) {
    addEventListener('scroll', function () { top.hidden = scrollY < 400; });
    top.addEventListener('click', function () { scrollTo({ top: 0 }); });
  }

  var box = $('#search-box');
  addEventListener('keydown', function (e) {
    if (e.key === '/' && box && !/input|textarea/i.test(document.activeElement.tagName)) {
      e.preventDefault(); box.focus();
    }
  });

  var sug = $('#search-suggest'), sIdx = null, sDocs = null;
  if (box && sug && window.lunr) {
    var loadIdx = function () {
      if (sIdx || sDocs === false) return;
      sDocs = false;
      fetch(box.form.action.replace(/search\/?$/, 'assets/search.json')).then(function (r) { return r.json(); }).then(function (docs) {
        sDocs = docs;
        sIdx = lunr(function () { this.ref('id'); this.field('title', { boost: 10 }); this.field('content'); docs.forEach(function (d, i) { d.id = String(i); this.add(d); }, this); });
      }).catch(function () {});
    };
    box.addEventListener('focus', loadIdx);
    box.addEventListener('input', function () {
      var q = box.value.trim();
      if (!sIdx || q.length < 2) { sug.hidden = true; return; }
      var hits;
      try { hits = sIdx.search(q.replace(/\S+$/, function (w) { return w + '*'; })); } catch (e) { hits = []; }
      sug.innerHTML = hits.slice(0, 6).map(function (h) {
        var d = sDocs[+h.ref];
        return '<li><a href="' + d.url + '">' + d.title.replace(/</g, '&lt;') + '</a></li>';
      }).join('');
      sug.hidden = !hits.length;
    });
    document.addEventListener('click', function (e) { if (!box.form.contains(e.target)) sug.hidden = true; });
    box.addEventListener('keydown', function (e) { if (e.key === 'Escape') sug.hidden = true; });
  }

  var out = $('#search-results');
  if (out && window.lunr && window.SEARCH_DATA) {
    var q = (new URLSearchParams(location.search).get('q') || '').trim();
    if (box) box.value = q;
    var docs = window.SEARCH_DATA;
    var idx = lunr(function () {
      this.ref('id'); this.field('title', { boost: 10 }); this.field('content');
      docs.forEach(function (d, i) { d.id = String(i); this.add(d); }, this);
    });
    var hits = [];
    if (q) {
      try { hits = idx.search(q); } catch (e) { hits = idx.search(q.replace(/[:~^*+\-]/g, ' ')); }
    }
    var esc = function (s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    out.innerHTML = hits.slice(0, 50).map(function (h) {
      var d = docs[+h.ref];
      return '<li><h4><a href="' + esc(d.url) + '">' + esc(d.title) + '</a></h4><small>' + esc(d.content.slice(0, 180)) + '…</small></li>';
    }).join('') || (q ? '<li>No results for “' + esc(q) + '”.</li>' : '');
  }
})();
