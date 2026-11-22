# 2nd Semester - Introduction To Computer Science

A 2nd semester follow-up to the [TEALS Intro CS course](https://tealsk12.gitbook.io/intro-cs/)

* GitHub: https://github.com/TEALSK12/2nd-semester-introduction-to-computer-science
* GitBook: https://tealsk12.gitbooks.io/2nd-semester-introduction-to-computer-science/content/

## Changes from the original curriculum

This repository is a fork of the TEALS curriculum. Lesson content is unchanged except where noted below.

**Website**
* New Jekyll theme with a sidebar, search with suggestions, dark mode, breadcrumbs, previous/next links, syntax highlighting with copy buttons, and colored callouts for Do Now, Lab, Project and Instructor's Notes.
* Student view: one page and unique URL per lesson (`/student/7.01/`), without instructor notes, with a teacher/student toggle.
* Landing page with unit cards, a glossary, a printable syllabus, and a per-browser lesson progress tracker.
* Automatic deployment to GitHub Pages.

**Added materials** (generated to match the existing course style; review before classroom use)
* Slide decks for Units 5, 7 and 8, which were missing upstream.
* Unit 6 Project B starter code (`starter_code/`, including a 162-item `inventory.txt`) with printable PDF and DOCX copies.
* Solutions remain protected on the TEALS Dashboard and are not included.

**Content and link fixes**
* Links to upstream GitHub and GitBook files now point to the files in this repository, and readings link to the local readings page.
* About 40 spelling errors fixed, broken Unit 3 and Unit 8 links corrected, and stale duplicate pages removed.
* Old Docsy theme files, demo pages and the CircleCI configuration removed.

**Tooling**
* `scripts/check_links.py` and a `Checks` workflow for links and spelling.

## Viewing and developing the site

The curriculum is published with Jekyll at https://aspiece.github.io/2nd-semester-introduction-to-computer-science/.

To preview locally:

```bash
bundle install
bundle exec jekyll serve --baseurl ""
```

Then open http://localhost:4000. Lesson pages live in `_docs/lesson_plans/units/`; the sidebar comes from `_data/toc.yml`, which mirrors `_docs/lesson_plans/SUMMARY.md`. Pushes to `master` deploy through `.github/workflows/pages.yml`.

### Maintenance scripts

* `python3 scripts/check_links.py _site` checks internal links and anchors in a built site.
* The `Checks` workflow runs the link checker and a spell check, on every pull request.

Every lesson also has a student view at `/student/<unit>.<lesson>/` (for example `/student/7.01/`) that shows only student material, with a button in each header to switch between teacher and student views. The student pages in `student/` and the glossary and syllabus in `pages/` are ordinary files; edit them directly.

Student pages include a Python editor (Monaco, the VS Code editor, running Python in the browser via Pyodide, loaded from jsDelivr). Every Python code block has a **Try it** button that makes it editable and runnable in place, and a floating **Python editor** panel is available on every student page. Modules in `assets/python/` (copied from the Unit 6 starter code) are importable; add files there and to `LIB_FILES` in `assets/js/editor.js` to make more libraries available. EarSketch is not supported.

The site also has a glossary (`/glossary/`), a printable syllabus (`/syllabus/`) and a per-browser lesson progress tracker.

## About this curriculum

Welcome to the TEALS Intro to Computer Science Second Semester Curriculum. This curriculum is intended for use by TEALS classrooms teaching Introduction to Computer Science in a yearlong format. We expect that students have completed the content from the [1st semester course](https://www.gitbook.com/book/teals-introcs/introduction-to-computer-science-principles/details) prior to this curriculum.

## Associated Readings

We have included with this curriculum Associated Readings to dive deeper into topics specific to the instruction of this course. These readings have been adapted from "Think Python: How to Think Like a Computer Scientist" by. Allen B. Downey. ([HTML Version](http://greenteapress.com/thinkpython/html/index.html))([PDF Version](http://www.greenteapress.com/thinkpython/thinkpython.pdf)).They are specifically referenced in the lesson plans and the [full document](readings.md) is included.

## Curriculum Orientation

Check out this 1-hour [Orientation to the Curriculum video](https://www.youtube.com/watch?v=UHgA_7x6-Qo)

## Python Versions (2 vs 3)

Python is an evolving language. Python 3 is a major upgrade to the language, released in 2010. There is a lot of existing software written under Python 2 and there is resistance to upgrading to Python 3 due to code breakage and cost. Just as a car part from a 10 year old model car will probably not fit a new model of the same car, Python 2 code probably would not run in a Python 3 environment. In Python 3 there are new features, significant upgrades "underneath" which makes the code run better and/or faster as well as no longer supporting (deprecating) some Python 2 capabilities. When looking at Python code, be careful to note whether it is Python 2 or Python 3.

### This class will use Python 3

For those knowledgeable with Python 2, the following is a list of differences from Python 3 relevant to the 2nd semester intro course.

| | Python 2 | Python 3 |
| ------ | ---------- | --- |
| Printing to console | print 3.14 | print (3.14) |
| User input | raw_input()/input() | input () |
| Integer arithmetic | 3/2 evaluates to 1 | 3/2 evaluates to 1.5 |
| Not equal to | <> | != |

## Curriculum Issues

Please open an issue in GitHub if you encounter factual, spelling, or grammatical errors, sequencing problems (topics needed before they are taught), or incomplete/missing materials.

## Giving feedback on the curriculum

TEALS intends for this curriculum to be a starting point for teachers. We'll continue to evolve, adapt the curriculum and associated materials. To participate in this process, we invite TEALS volunteers and classroom teachers using this curriculum to submit edits and suggestions via the [TEALS discussion forum](http://forums.tealsk12.org/) or in this [GitHub repository](https://github.com/TEALSK12/2nd-semester-introduction-to-computer-science). If you'd like to suggest changes or additions to the curriculum, please submit a GitHub Pull Request containing your changes. As a best practice, each pull request should contain a singular atomic change.

## Printing GitBook

The 2nd Semester Introduction to Computer Science GitBook can be printed by navigating to [PDF Version](https://pdf.gitbook.cloud/preview?url=https://tealsk12.gitbook.io/intro-cs-2/#).

## Creative Commons Attribution Non-Commercial Share-alike License

[This curriculum is licensed under the Creative Commons Attribution Non-Commercial Share-alike License](http://creativecommons.org/licenses/by-nc-sa/4.0/), which means you may share and adapt this material for non-commercial uses as long as you attribute its original source, and retain these same licensing terms.
