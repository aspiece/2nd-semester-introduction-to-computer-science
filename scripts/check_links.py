#!/usr/bin/env python3
"""Check internal links and anchors in a built Jekyll site.

Usage: python3 scripts/check_links.py _site [baseurl]
"""
import os
import re
import sys
from html.parser import HTMLParser
from urllib.parse import unquote, urldefrag, urlparse

root = sys.argv[1]
base = sys.argv[2].rstrip("/") if len(sys.argv) > 2 else ""


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links, self.ids = [], set()

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a:
            self.ids.add(a["id"])
        for key in ("href", "src"):
            if a.get(key):
                self.links.append(a[key])


pages = {}
for d, _, files in os.walk(root):
    for f in files:
        if f.endswith(".html"):
            p = Page()
            p.feed(open(os.path.join(d, f), encoding="utf-8", errors="ignore").read())
            pages[os.path.join(d, f)] = p

broken = []
for path, page in pages.items():
    for link in page.links:
        u = urlparse(link)
        if u.scheme or u.netloc or link.startswith(("mailto:", "#", "data:")) and not link.startswith("#"):
            continue
        target, frag = urldefrag(link)
        if link.startswith("#"):
            dest = path
        else:
            t = unquote(urlparse(target).path)
            if base and t.startswith(base + "/"):
                t = t[len(base):]
            dest = os.path.join(root, t.lstrip("/")) if t.startswith("/") else os.path.normpath(os.path.join(os.path.dirname(path), t))
        if os.path.isdir(dest):
            dest = os.path.join(dest, "index.html")
        if not os.path.exists(dest):
            broken.append((path, link))
        elif frag and dest in pages and frag not in pages[dest].ids:
            broken.append((path, link))

for path, link in sorted(set(broken)):
    print("%s -> %s" % (os.path.relpath(path, root), link))
print("%d broken link(s)" % len(set(broken)))
sys.exit(1 if broken else 0)
