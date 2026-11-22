#!/usr/bin/env python3
"""Generate the student-facing view of the curriculum into student/.

Each lesson becomes one page at /student/<unit>.<lesson>/ (for example
/student/7.01/) containing only student material: learning objectives, the
Do Now, example, lab or project, rubric, and downloads. Instructor notes,
pacing, preparation and accommodations are left out.

Run from the repository root:  python3 scripts/build_student.py
"""
import glob
import os
import posixpath
import re
import shutil

DOCS = "_docs"
UNITS = DOCS + "/lesson_plans/units"
OUT = "student"

# (file, heading) in the order they appear on a student page
PARTS = [
    ("do_now.md", "Do Now"),
    ("example.md", "Example"),
    ("lab.md", "Lab"),
    ("project.md", "Project"),
    ("projectb.md", "Project B"),
    ("alternate_project.md", "Alternate Project"),
    ("project_ideas.md", "Project Ideas"),
    ("rubric.md", "Rubric"),
]
RAW_OPEN, RAW_CLOSE = "{% raw %}", "{% endraw %}"


def read(path):
    return open(path, encoding="utf-8").read()


def strip_front(text):
    m = re.match(r"---\n.*?\n---\n", text, re.S)
    return text[m.end():] if m else text


def title_of(text):
    m = re.search(r'^title:\s*"?(.*?)"?\s*$', text, re.M)
    return m.group(1) if m else ""


def link(target):
    return "%s{{ '%s' | relative_url }}%s" % (RAW_CLOSE, target, RAW_OPEN)


def site_path(src_dir, target):
    """Turn a link relative to a lesson file into a site-absolute URL."""
    target = target.strip()
    if re.match(r"^([a-z][a-z0-9+.-]*:|#|//|\{)", target, re.I):
        return None
    path, _, frag = target.partition("#")
    if not path:
        return None
    full = posixpath.normpath(posixpath.join(src_dir, path))
    if not full.startswith(DOCS + "/"):
        return None
    url = "/" + full[len(DOCS) + 1:]
    url = "/docs" + url
    if url.endswith(".md"):
        url = url[:-3] + ".html"
    url = url.replace(" ", "%20")
    return url + ("#" + frag if frag else "")


def rewrite_links(text, src_dir):
    def ref(m):
        new = site_path(src_dir, m.group(2))
        return m.group(0) if new is None else "%s%s" % (m.group(1), link(new))

    text = re.sub(r"(\]|!\[[^\]]*\])\(([^)\s]+)(?=[)\s])", lambda m: m.group(0) if site_path(src_dir, m.group(2)) is None else m.group(1) + "(" + link(site_path(src_dir, m.group(2))), text)
    text = re.sub(r"^(\[[^\]]+\]:\s*)(\S+)", ref, text, flags=re.M)
    return text


def demote(text):
    """Strip the page title and push remaining headings down one level."""
    text = re.sub(r"\A\s*# .*\n", "", text)
    out, fenced = [], False
    for line in text.split("\n"):
        if line.lstrip().startswith("```"):
            fenced = not fenced
        elif not fenced and re.match(r"^#{1,4} ", line):
            line = "#" + line
        out.append(line)
    return "\n".join(out).strip()


def section(src_dir, name, heading):
    path = posixpath.join(src_dir, name)
    body = demote(rewrite_links(strip_front(read(path)), src_dir))
    # each part keeps its own reference-style link definitions
    return "## %s\n\n%s\n" % (heading, body)


def objectives(lesson_md):
    m = re.search(r"## Learning Objectives\s*(.*?)\n## ", lesson_md, re.S)
    if not m:
        return ""
    lines = [l for l in m.group(1).splitlines() if l.startswith("*")]
    return "\n".join(lines)


def reading(lesson_md, src_dir):
    out = []
    for line in lesson_md.splitlines():
        if "Associated Reading" in line and line.lstrip().startswith("*"):
            out.append(rewrite_links(line, src_dir))
    return "\n".join(out)


def downloads(src_dir):
    items = []
    for name, heading in PARTS:
        stem = name[:-3]
        for ext, label in ((".pdf", "PDF"), (".docx", "editable Word")):
            f = posixpath.join(src_dir, stem + ext)
            if os.path.exists(f):
                items.append("* [%s (%s)](%s)" % (heading, label, link(site_path(src_dir, stem + ext))))
    for f in sorted(glob.glob(src_dir + "/*.py")):
        items.append("* [Starter code: %s](%s)" % (os.path.basename(f), link(site_path(src_dir, os.path.basename(f)))))
    sc = src_dir + "/starter_code"
    if os.path.isdir(sc):
        for f in sorted(glob.glob(sc + "/*")):
            items.append("* [Starter code: %s](%s)" % (os.path.basename(f), link(site_path(src_dir, "starter_code/" + os.path.basename(f)))))
    return "\n".join(items)


def unit_info(unit):
    pages = sorted(glob.glob("%s/%d_unit/unit*.md" % (UNITS, unit)))
    text = read(pages[0]) if pages else ""
    title = re.sub(r"^Unit\s*\d+\s*[-:]?\s*", "", title_of(text)) or "Unit %d" % unit
    return title, pages[0] if pages else None


def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    os.makedirs(OUT)

    lessons = []
    for unit in range(1, 9):
        for lp in sorted(glob.glob("%s/%d_unit/0*_lesson/lesson.md" % (UNITS, unit))):
            n = int(re.search(r"/0?(\d+)_lesson/", lp).group(1))
            text = read(lp)
            title = re.sub(r"^Lesson( Plan)?\s*[\d.]+\s*[:\-]?\s*", "", title_of(text))
            lessons.append(dict(unit=unit, n=n, num="%d.%02d" % (unit, n), title=title.strip(),
                                dir=posixpath.dirname(lp), md=text,
                                teacher="/" + "docs/" + lp[len(DOCS) + 1:-3] + ".html"))

    for i, ls in enumerate(lessons):
        src_dir = ls["dir"]
        body = []
        obj = objectives(ls["md"])
        if obj:
            body.append("## What you will learn\n\n" + obj + "\n")
        rd = reading(ls["md"], src_dir)
        if rd:
            body.append("## Reading\n\n" + rd + "\n")
        for name, heading in PARTS:
            if os.path.exists(posixpath.join(src_dir, name)):
                body.append(section(src_dir, name, heading))
        if ls["unit"] == 8 and ls["n"] == 4:
            for name, heading in (("project.md", "Final Project"), ("rubric.md", "Final Project Rubric")):
                body.append(section(posixpath.dirname(src_dir), name, heading))
        dl = downloads(src_dir)
        if dl:
            body.append("## Downloads\n\n" + dl + "\n")

        fm = ["---", "layout: student", 'title: "Lesson %s: %s"' % (ls["num"], ls["title"].replace('"', "'")),
              "permalink: /student/%s/" % ls["num"], "teacher_url: %s" % ls["teacher"],
              "unit: %d" % ls["unit"]]
        if i > 0:
            fm += ["prev_url: /student/%s/" % lessons[i - 1]["num"], 'prev_title: "%s"' % lessons[i - 1]["num"]]
        if i < len(lessons) - 1:
            fm += ["next_url: /student/%s/" % lessons[i + 1]["num"], 'next_title: "%s"' % lessons[i + 1]["num"]]
        fm.append("---")
        content = RAW_OPEN + "\n".join(body) + RAW_CLOSE
        open("%s/%s.md" % (OUT, ls["num"]), "w", encoding="utf-8").write("\n".join(fm) + "\n" + content + "\n")

    idx = ["---", "layout: student", "title: Student Home", "permalink: /student/",
           "teacher_url: /docs/lesson_plans/", "---",
           "# Student Home", "",
           "Pick your lesson. Every lesson has its own page and link you can bookmark or share.", ""]
    for unit in range(1, 9):
        title, _ = unit_info(unit)
        idx += ["## Unit %d: %s" % (unit, title), "", '<div class="cards">']
        for ls in (l for l in lessons if l["unit"] == unit):
            idx.append('  <a class="card" href="{{ \'/student/%s/\' | relative_url }}"><span class="card-num">Lesson %s</span><strong>%s</strong></a>'
                       % (ls["num"], ls["num"], ls["title"].replace("<", "&lt;")))
        idx += ["</div>", ""]
    open(OUT + "/index.md", "w", encoding="utf-8").write("\n".join(idx))
    print("student pages:", len(lessons))


if __name__ == "__main__":
    main()
