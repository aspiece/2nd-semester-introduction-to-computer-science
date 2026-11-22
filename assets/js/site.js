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
