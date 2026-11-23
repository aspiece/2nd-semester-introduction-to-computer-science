---
title: Curriculum Resource Viewer
permalink: /resource-viewer/
layout: minimal-home
---

# Curriculum Resource Viewer

<p id="resource-status" role="status">Preparing document preview…</p>
<div id="resource-actions" style="display:none;gap:12px;flex-wrap:wrap;margin:16px 0">
  <a id="resource-download" class="btn" download>Download original file</a>
  <a id="resource-open" class="btn btn-ghost" target="_blank" rel="noopener">Open file directly</a>
</div>
<div id="resource-preview" style="min-height:300px"></div>
<p id="resource-note" style="font-size:.9rem"></p>

<script>
(function () {
  'use strict';
  var status = document.getElementById('resource-status');
  var actions = document.getElementById('resource-actions');
  var download = document.getElementById('resource-download');
  var open = document.getElementById('resource-open');
  var preview = document.getElementById('resource-preview');
  var note = document.getElementById('resource-note');
  var base = {{ site.baseurl | jsonify }};
  var requested = new URLSearchParams(location.search).get('file') || '';
  var path;
  try {
    path = decodeURIComponent(requested);
    if (!/^\/(docs\/lesson_plans\/|docs\/units\/)[^?#]+\.(pdf|docx|pptx)$/i.test(path) ||
        path.includes('..') || path.includes('\\')) throw Error('Invalid file');
  } catch (e) {
    status.textContent = 'Invalid resource link. Return to the teacher resource library.';
    return;
  }
  var url = new URL(base + path, location.origin).href;
  var ext = path.split('.').pop().toLowerCase();
  var name = path.split('/').pop();
  status.textContent = name;
  download.href = url;
  download.setAttribute('download', name);
  open.href = url;
  actions.style.display = 'flex';

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = function () { reject(new Error('Preview library unavailable')); };
      document.head.appendChild(script);
    });
  }
  function fallback(message) {
    status.textContent = name + ' — preview unavailable';
    note.textContent = message + ' You can still use Open file directly or Download original file.';
  }
  function addFrame(src, title) {
    var frame = document.createElement('iframe');
    frame.title = title;
    frame.style.cssText = 'width:100%;height:min(75vh,900px);min-height:450px;border:1px solid #cbd5e1;border-radius:8px;background:#fff';
    frame.src = src;
    preview.appendChild(frame);
  }
  if (ext === 'pptx') {
    addFrame('https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(url), 'PowerPoint preview');
    note.textContent = 'PowerPoint preview uses Microsoft Office online viewing.';
  } else if (ext === 'pdf') {
    status.textContent = 'Loading PDF preview: ' + name;
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js')
      .then(function () {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        return pdfjsLib.getDocument(url).promise;
      }).then(async function (pdf) {
        status.textContent = name + ' — ' + pdf.numPages + ' pages';
        note.textContent = 'PDF pages are rendered directly in the browser. Download Original File saves the complete PDF.';
        for (var i = 1; i <= pdf.numPages; i++) {
          var page = await pdf.getPage(i);
          var width = Math.max(300, Math.min(preview.clientWidth || 800, 900));
          var viewport = page.getViewport({scale: 1});
          var scale = Math.min(2, width / viewport.width);
          viewport = page.getViewport({scale: scale});
          var canvas = document.createElement('canvas');
          canvas.width = Math.ceil(viewport.width);
          canvas.height = Math.ceil(viewport.height);
          canvas.style.cssText = 'display:block;max-width:100%;height:auto;margin:12px auto;border:1px solid #cbd5e1;background:white';
          canvas.setAttribute('aria-label', 'PDF page ' + i);
          preview.appendChild(canvas);
          await page.render({canvasContext: canvas.getContext('2d'), viewport: viewport}).promise;
        }
      }).catch(function () {
        fallback('The built-in PDF preview could not load on this device.');
      });
  } else if (ext === 'docx') {
    status.textContent = 'Loading Word preview: ' + name;
    Promise.all([
      loadScript('https://cdn.jsdelivr.net/npm/docx-preview@0.3.6/dist/docx-preview.min.js'),
      fetch(url).then(function (r) { if (!r.ok) throw Error('File unavailable'); return r.arrayBuffer(); })
    ]).then(function (results) {
      if (!window.docx || !window.docx.renderAsync) throw Error('Word preview library unavailable');
      return window.docx.renderAsync(results[1], preview, null, {inWrapper: true, breakPages: true});
    }).then(function () {
      status.textContent = name;
      note.textContent = 'Word document preview rendered in your browser. Download Original File saves the editable document.';
    }).catch(function () {
      preview.innerHTML = '';
      addFrame('https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(url), 'Word preview (online fallback)');
      fallback('Local Word preview could not load. An online preview has been attempted.');
    });
  }
})();
</script>
