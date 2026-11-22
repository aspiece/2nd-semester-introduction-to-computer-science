#!/usr/bin/env python3
"""Regenerate pages/glossary.md and pages/syllabus.md from the lesson plans.

Run from the repository root:  python3 scripts/build_pages.py
"""
import glob
import re

UNITS = "_docs/lesson_plans/units"


def front_title(text):
    m = re.search(r'^title:\s*"?(.*?)"?\s*$', text, re.M)
    return m.group(1) if m else ""


def url_for(path):
    rel = path[len("_docs/"):-3]
    return "{{ '/docs/%s.html' | relative_url }}" % rel


def lesson_number(path):
    m = re.search(r"(\d+)_unit/0?(\d+)_lesson", path)
    return "%s.%02d" % (m.group(1), int(m.group(2)))


def clean(term):
    return term.strip().strip("*").strip("`").strip()


def glossary():
    terms = {}
    for path in sorted(glob.glob(UNITS + "/[0-9]_unit/*/lesson.md")):
        text = open(path, encoding="utf-8").read()
        m = re.search(r"## Learning Objectives(.*?)\n## ", text, re.S)
        if not m:
            continue
        for line in m.group(1).splitlines():
            m2 = re.match(r"\*\s*Define and identify:\s*(.*)", line)
            if not m2:
                continue
            for raw in re.findall(r"\*\*(.+?)\*\*|(`[^`]+`)", m2.group(1)):
                for term in (clean(t) for t in (raw[0] or raw[1]).split(",")):
                    term = term.strip("`* ")
                    if len(term) > 1:
                        terms.setdefault(term, set()).add(path)
    out = ["---", "title: Glossary", "permalink: /glossary/", "layout: page", "---",
           "# Glossary", "",
           "Key terms from the lessons, with the lesson where each one is introduced.", "",
           '<input type="search" class="filter-box" data-filter="#glossary" placeholder="Filter terms" aria-label="Filter terms">',
           "", '<dl id="glossary" class="glossary">']
    for term in sorted(terms, key=lambda t: t.lower().lstrip("_")):
        links = ", ".join('<a href="%s">Lesson %s</a>' % (url_for(p), lesson_number(p)) for p in sorted(terms[term]))
        out.append("<dt>%s</dt><dd>%s</dd>" % (term.replace("<", "&lt;"), links))
    out.append("</dl>")
    open("pages/glossary.md", "w", encoding="utf-8").write("\n".join(out) + "\n")
    return len(terms)


def syllabus():
    out = ["---", "title: Course Syllabus", "permalink: /syllabus/", "layout: page", "---",
           "# Course Syllabus", "",
           "An overview of all eight units, with essential questions and pacing. Use your browser's print command to save or print this page.", ""]
    total = optional = 0
    for unit in range(1, 9):
        pages = sorted(glob.glob("%s/%d_unit/unit*.md" % (UNITS, unit)))
        if not pages:
            continue
        text = open(pages[0], encoding="utf-8").read()
        title = re.sub(r"^Unit\s*\d+\s*[-:]?\s*", "", front_title(text)) or "Unit %d" % unit
        out += ["## Unit %d: %s" % (unit, title), ""]
        m = re.search(r"## Essential Questions\s*(.*?)\n##", text, re.S)
        if m:
            out += ["**Essential questions**", ""] + [l for l in m.group(1).splitlines() if l.startswith("*")] + [""]
        days, names = {}, {}
        for dm in re.finditer(r"^\|\s*\d+\.(\d+):?\s*([^|]*?)\s*\|\s*(\d+)\s*\|", text, re.M):
            days[int(dm.group(1))] = int(dm.group(3))
            names[int(dm.group(1))] = dm.group(2)
        out += ["| Lesson | Days |", "| ------ | ---- |"]
        for lp in sorted(glob.glob("%s/%d_unit/0*_lesson/lesson.md" % (UNITS, unit))):
            n = int(re.search(r"/0?(\d+)_lesson/", lp).group(1))
            lt = names.get(n) or re.sub(r"^Lesson( Plan)?\s*[\d.]+\s*[:\-]?\s*", "", front_title(open(lp, encoding="utf-8").read()))
            out.append("| [%s](%s) | %s |" % (lt or "Lesson %d" % n, url_for(lp), days.get(n, "")))
        unit_days = sum(days.values())
        total += unit_days
        if "optional" in title.lower():
            optional += unit_days
        out += ["", "Unit length: **%d days**" % unit_days if unit_days else "", ""]
    out += ["## Total", "", "About **%d class days** of 50 minutes (**%d** without the optional unit)." % (total, total - optional), ""]
    open("pages/syllabus.md", "w", encoding="utf-8").write("\n".join(out))


if __name__ == "__main__":
    print("glossary terms:", glossary())
    syllabus()
