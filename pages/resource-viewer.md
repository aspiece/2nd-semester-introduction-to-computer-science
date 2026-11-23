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
<div id="resource-preview" style="min-height:450px"></div>
<p id="resource-note" style="font-size:.9rem"></p>

<script>
(function () {
  const status = document.getElementById('resource-status');
  const actions = document.getElementById('resource-actions');
  const download = document.getElementById('resource-download');
  const open = document.getElementById('resource-open');
  const preview = document.getElementById('resource-preview');
  const note = document.getElementById('resource-note');
  const base = {{ site.baseurl | jsonify }};
  const requested = new URLSearchParams(location.search).get('file') || '';
  let path;
  try {
    path = decodeURIComponent(requested);
    if (!/^\/(docs\/lesson_plans\/|docs\/units\/)[^?#]+\.(pdf|docx|pptx)$/i.test(path) ||
        path.includes('..') || path.includes('\\')) throw Error('Invalid file');
  } catch (e) {
    status.textContent = 'Invalid resource link. Return to the teacher resource library.';
    return;
  }
  const url = new URL(base + path, location.origin).href;
  const ext = path.split('.').pop().toLowerCase();
  const name = path.split('/').pop().replace(/%20/g, ' ');
  status.textContent = name;
  download.href = url;
  download.setAttribute('download', name);
  open.href = url;
  actions.style.display = 'flex';
  const frame = document.createElement('iframe');
  frame.title = 'Preview of ' + name;
  frame.style.cssText = 'width:100%;height:min(75vh,900px);min-height:450px;border:1px solid #cbd5e1;border-radius:8px;background:#fff';
  frame.loading = 'eager';
  frame.referrerPolicy = 'no-referrer';
  if (ext === 'pdf') {
    frame.src = url;
    note.textContent = 'If the PDF does not display on your device, use Open file directly or Download original file.';
  } else {
    frame.src = 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(url);
    note.textContent = 'Word and PowerPoint previews use Microsoft Office online viewing. If the preview is unavailable, open or download the original file. Preview requires an internet connection and sends the public file URL to Microsoft.';
  }
  preview.appendChild(frame);
})();
</script>
