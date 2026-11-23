/* Open curriculum documents in the local preview/download viewer.
   Leaves .py starter files, normal navigation, and explicit downloads untouched. */
(function () {
  'use strict';
  var base = '/2nd-semester-introduction-to-computer-science';
  var viewerPath = base + '/resource-viewer/';
  if (location.pathname.replace(/\/$/, '') === viewerPath.replace(/\/$/, '')) return;
  document.addEventListener('click', function (event) {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey ||
        event.metaKey || event.shiftKey || event.altKey) return;
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    var target;
    try { target = new URL(link.href, location.href); } catch (e) { return; }
    var path = target.pathname;
    if (target.origin === location.origin && path.indexOf(base + '/') === 0) {
      path = path.slice(base.length);
    } else if (target.hostname === 'github.com') {
      var prefix = '/aspiece/2nd-semester-introduction-to-computer-science/blob/master/_docs/lesson_plans/';
      if (path.indexOf(prefix) !== 0) return;
      path = '/docs/lesson_plans/' + path.slice(prefix.length);
    } else return;
    if (!/^\/(docs\/lesson_plans\/|docs\/units\/)[^?#]+\.(pdf|docx|pptx)$/i.test(path) ||
        path.includes('..')) return;
    event.preventDefault();
    location.assign(viewerPath + '?file=' + encodeURIComponent(path));
  });
})();
