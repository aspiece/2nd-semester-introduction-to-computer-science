# TEALS downloadable resources: file-by-file comparison

Compared archived TEALSK12 master to aspiece master on 2026-11-22 using Git tree object hashes and path mapping. **Metadata comparison only**: different hashes do not establish which file has newer or better content. No live documents have been replaced.

## Summary

- No mapped match: 32
- Relocated identical: 96
- Relocated modified: 93
- Identical: 70
- Modified: 73

Source: 364 DOCX/PDF/PPTX files. The 32 unmapped records may include duplicates, Office lock files, or intentionally excluded resources. Do not copy them without content review.

## Recommended decision rules

- Identical: no action.
- Relocated identical: no action; verify links if used.
- Modified / relocated modified: preserve local file and inspect both documents before deciding.
- No mapped match: investigate purpose, relevance, licensing, and whether an equivalent exists under a different name; restore only when necessary.

## Full inventory

| Upstream path | Status | Current candidate path(s) | Upstream bytes | Current bytes |
|---|---|---|---:|---:|
| IntrotoCSSyllabusExample.docx | No mapped match | — | 42781 | — |
| docs/2ndSemPython.pdf | No mapped match | — | 10857618 | — |
| docs/IntrotoCSSyllabusExample.docx | No mapped match | — | 42781 | — |
| docs/projects/adventure/spec.docx | Relocated identical | projects/adventure/spec.docx | 35232 | 35232 |
| docs/units/1_unit/01_lesson/lesson.docx | Relocated identical | _docs/lesson_plans/units/1_unit/01_lesson/lesson.docx; units/1_unit/01_lesson/lesson.docx | 24324 | 24324 |
| docs/units/1_unit/02_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/1_unit/02_lesson/lab.docx; units/1_unit/02_lesson/lab.docx | 25596 | 25596 |
| docs/units/1_unit/02_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/02_lesson/lab.pdf; units/1_unit/02_lesson/lab.pdf | 84554 | 84554 |
| docs/units/1_unit/03_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/1_unit/03_lesson/lab.docx; units/1_unit/03_lesson/lab.docx | 194937 | 194937 |
| docs/units/1_unit/03_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/03_lesson/lab.pdf; units/1_unit/03_lesson/lab.pdf | 259783 | 259783 |
| docs/units/1_unit/04_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/1_unit/04_lesson/lab.docx; units/1_unit/04_lesson/lab.docx | 127273 | 127273 |
| docs/units/1_unit/04_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/04_lesson/lab.pdf; units/1_unit/04_lesson/lab.pdf | 153113 | 153113 |
| docs/units/1_unit/05_lesson/alt1/TEALS2018-Lab105.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/05_lesson/alt1/TEALS2018-Lab105.pdf; units/1_unit/05_lesson/alt1/TEALS2018-Lab105.pdf | 275852 | 275852 |
| docs/units/1_unit/06_lesson/alternate_project.docx | Relocated identical | _docs/lesson_plans/units/1_unit/06_lesson/alternate_project.docx; units/1_unit/06_lesson/alternate_project.docx | 58846 | 58846 |
| docs/units/1_unit/06_lesson/alternate_project.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/06_lesson/alternate_project.pdf; units/1_unit/06_lesson/alternate_project.pdf | 149856 | 149856 |
| docs/units/1_unit/06_lesson/project.docx | Relocated modified | units/1_unit/06_lesson/project.docx; _docs/lesson_plans/units/1_unit/06_lesson/project.docx | 29437 | 157645 |
| docs/units/1_unit/06_lesson/project.pdf | Relocated modified | units/1_unit/06_lesson/project.pdf; _docs/lesson_plans/units/1_unit/06_lesson/project.pdf | 127144 | 206007 |
| docs/units/1_unit/06_lesson/project_canada.docx | No mapped match | — | 27784 | — |
| docs/units/1_unit/06_lesson/project_canada.pdf | No mapped match | — | 130774 | — |
| docs/units/1_unit/06_lesson/projecta.docx | Relocated identical | _docs/lesson_plans/units/1_unit/06_lesson/alternate_project.docx; units/1_unit/06_lesson/alternate_project.docx | 58846 | 58846 |
| docs/units/1_unit/06_lesson/projecta.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/06_lesson/alternate_project.pdf; units/1_unit/06_lesson/alternate_project.pdf | 149856 | 149856 |
| docs/units/1_unit/06_lesson/rubric.docx | Relocated modified | units/1_unit/06_lesson/rubric.docx; _docs/lesson_plans/units/1_unit/06_lesson/rubric.docx | 29127 | 28994 |
| docs/units/1_unit/06_lesson/rubric.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/06_lesson/rubric.pdf; units/1_unit/06_lesson/rubric.pdf | 83391 | 83391 |
| docs/units/1_unit/Cloud9_Student.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/Cloud9_Student.pdf; units/1_unit/Cloud9_Student.pdf | 2151694 | 2151694 |
| docs/units/1_unit/Cloud9_Teacher.docx | Relocated identical | _docs/lesson_plans/units/1_unit/Cloud9_Teacher.docx; units/1_unit/Cloud9_Teacher.docx | 831661 | 831661 |
| docs/units/1_unit/Trinket_Student.docx | Relocated identical | _docs/lesson_plans/units/1_unit/Trinket_Student.docx; units/1_unit/Trinket_Student.docx | 638371 | 638371 |
| docs/units/1_unit/Trinket_Student.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/Trinket_Student.pdf; units/1_unit/Trinket_Student.pdf | 805638 | 805638 |
| docs/units/1_unit/Trinket_Teacher.docx | Relocated identical | _docs/lesson_plans/units/1_unit/Trinket_Teacher.docx; units/1_unit/Trinket_Teacher.docx | 446591 | 446591 |
| docs/units/1_unit/Trinket_Teacher.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/Trinket_Teacher.pdf; units/1_unit/Trinket_Teacher.pdf | 550885 | 550885 |
| docs/units/1_unit/Trinket_Teacher_Connect.docx | Relocated identical | _docs/lesson_plans/units/1_unit/Trinket_Teacher_Connect.docx; units/1_unit/Trinket_Teacher_Connect.docx | 632779 | 632779 |
| docs/units/1_unit/replit_student.docx | Relocated identical | _docs/lesson_plans/units/1_unit/replit_student.docx; units/1_unit/replit_student.docx | 286155 | 286155 |
| docs/units/1_unit/replit_student.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/replit_student.pdf; units/1_unit/replit_student.pdf | 248256 | 248256 |
| docs/units/1_unit/replit_teacher.docx | Relocated identical | _docs/lesson_plans/units/1_unit/replit_teacher.docx; units/1_unit/replit_teacher.docx | 316747 | 316747 |
| docs/units/1_unit/replit_teacher.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/replit_teacher.pdf; units/1_unit/replit_teacher.pdf | 520890 | 520890 |
| docs/units/1_unit/slidedecks/Intro Python 1.01 TEALS.pptx | Relocated modified | units/1_unit/slidedecks/Intro Python 1.01 TEALS.pptx; _docs/lesson_plans/units/1_unit/slidedecks/Intro Python 1.01 TEALS.pptx | 2099798 | 2508831 |
| docs/units/1_unit/slidedecks/Intro Python 1.02 TEALS.pptx | Relocated modified | units/1_unit/slidedecks/Intro Python 1.02 TEALS.pptx; _docs/lesson_plans/units/1_unit/slidedecks/Intro Python 1.02 TEALS.pptx | 1594822 | 1590033 |
| docs/units/1_unit/slidedecks/Intro Python 1.03 TEALS.pptx | Relocated modified | units/1_unit/slidedecks/Intro Python 1.03 TEALS.pptx; _docs/lesson_plans/units/1_unit/slidedecks/Intro Python 1.03 TEALS.pptx | 1497254 | 1491808 |
| docs/units/1_unit/slidedecks/Intro Python 1.04 TEALS.pptx | Relocated modified | units/1_unit/slidedecks/Intro Python 1.04 TEALS.pptx; _docs/lesson_plans/units/1_unit/slidedecks/Intro Python 1.04 TEALS.pptx | 1647911 | 1654473 |
| docs/units/1_unit/slidedecks/Intro Python 1.05 TEALS.pptx | Relocated modified | units/1_unit/slidedecks/Intro Python 1.05 TEALS.pptx; _docs/lesson_plans/units/1_unit/slidedecks/Intro Python 1.05 TEALS.pptx | 1471838 | 1468392 |
| docs/units/1_unit/slidedecks/Intro Python 1.06 TEALS.pptx | Relocated modified | units/1_unit/slidedecks/Intro Python 1.06 TEALS.pptx; _docs/lesson_plans/units/1_unit/slidedecks/Intro Python 1.06 TEALS.pptx | 1484460 | 1474478 |
| docs/units/2_unit/01_lesson/lab.docx | Relocated modified | units/2_unit/01_lesson/lab.docx; _docs/lesson_plans/units/2_unit/01_lesson/lab.docx | 29993 | 25175 |
| docs/units/2_unit/01_lesson/lab.pdf | Relocated modified | units/2_unit/01_lesson/lab.pdf; _docs/lesson_plans/units/2_unit/01_lesson/lab.pdf | 80959 | 80064 |
| docs/units/2_unit/01_lesson/lesson.docx | Relocated identical | _docs/lesson_plans/units/2_unit/01_lesson/lesson.docx; units/2_unit/01_lesson/lesson.docx | 65681 | 65681 |
| docs/units/2_unit/02_lesson/lab.docx | Relocated modified | units/2_unit/02_lesson/lab.docx; _docs/lesson_plans/units/2_unit/02_lesson/lab.docx | 28612 | 26118 |
| docs/units/2_unit/02_lesson/lab.pdf | Relocated modified | units/2_unit/02_lesson/lab.pdf; _docs/lesson_plans/units/2_unit/02_lesson/lab.pdf | 115354 | 91617 |
| docs/units/2_unit/03_lesson/lab.docx | Relocated modified | units/2_unit/03_lesson/lab.docx; _docs/lesson_plans/units/2_unit/03_lesson/lab.docx | 414660 | 403195 |
| docs/units/2_unit/03_lesson/lab.pdf | Relocated modified | units/2_unit/03_lesson/lab.pdf; _docs/lesson_plans/units/2_unit/03_lesson/lab.pdf | 236842 | 429100 |
| docs/units/2_unit/04_lesson/lab.docx | Relocated modified | units/2_unit/04_lesson/lab.docx; _docs/lesson_plans/units/2_unit/04_lesson/lab.docx | 28574 | 23339 |
| docs/units/2_unit/04_lesson/lab.pdf | Relocated modified | units/2_unit/04_lesson/lab.pdf; _docs/lesson_plans/units/2_unit/04_lesson/lab.pdf | 87636 | 67004 |
| docs/units/2_unit/04_lesson/~$lab.docx | No mapped match | — | 162 | — |
| docs/units/2_unit/05_lesson/lab.docx | Relocated modified | units/2_unit/05_lesson/lab.docx; _docs/lesson_plans/units/2_unit/05_lesson/lab.docx | 28538 | 29046 |
| docs/units/2_unit/05_lesson/lab.pdf | Relocated modified | units/2_unit/05_lesson/lab.pdf; _docs/lesson_plans/units/2_unit/05_lesson/lab.pdf | 78814 | 91658 |
| docs/units/2_unit/05_lesson/~$lab.docx | No mapped match | — | 162 | — |
| docs/units/2_unit/06_lesson/lab.docx | Relocated modified | units/2_unit/06_lesson/lab.docx; _docs/lesson_plans/units/2_unit/06_lesson/lab.docx | 25940 | 29261 |
| docs/units/2_unit/06_lesson/lab.pdf | Relocated modified | units/2_unit/06_lesson/lab.pdf; _docs/lesson_plans/units/2_unit/06_lesson/lab.pdf | 66237 | 92047 |
| docs/units/2_unit/07_lesson/alternate_project.docx | Relocated identical | _docs/lesson_plans/units/2_unit/07_lesson/alternate_project.docx; units/2_unit/07_lesson/alternate_project.docx | 23851 | 23851 |
| docs/units/2_unit/07_lesson/alternate_project.pdf | Relocated identical | _docs/lesson_plans/units/2_unit/07_lesson/alternate_project.pdf; units/2_unit/07_lesson/alternate_project.pdf | 116979 | 116979 |
| docs/units/2_unit/07_lesson/lesson.docx | No mapped match | — | 13339 | — |
| docs/units/2_unit/07_lesson/project.docx | Relocated modified | units/2_unit/07_lesson/project.docx; _docs/lesson_plans/units/2_unit/07_lesson/project.docx | 30423 | 27461 |
| docs/units/2_unit/07_lesson/project.pdf | Relocated modified | units/2_unit/07_lesson/project.pdf; _docs/lesson_plans/units/2_unit/07_lesson/project.pdf | 116019 | 104369 |
| docs/units/2_unit/07_lesson/project_canada.docx | No mapped match | — | 32269 | — |
| docs/units/2_unit/07_lesson/project_canada.pdf | No mapped match | — | 115242 | — |
| docs/units/2_unit/07_lesson/projecta.docx | Relocated identical | _docs/lesson_plans/units/2_unit/07_lesson/alternate_project.docx; units/2_unit/07_lesson/alternate_project.docx | 23851 | 23851 |
| docs/units/2_unit/07_lesson/projecta.pdf | Relocated identical | _docs/lesson_plans/units/2_unit/07_lesson/alternate_project.pdf; units/2_unit/07_lesson/alternate_project.pdf | 116979 | 116979 |
| docs/units/2_unit/07_lesson/rubric.docx | Relocated modified | units/2_unit/07_lesson/rubric.docx; _docs/lesson_plans/units/2_unit/07_lesson/rubric.docx | 29086 | 28828 |
| docs/units/2_unit/07_lesson/rubric.pdf | Relocated identical | _docs/lesson_plans/units/2_unit/07_lesson/rubric.pdf; units/2_unit/07_lesson/rubric.pdf | 103125 | 103125 |
| docs/units/2_unit/slidedecks/Intro Python 2.01 TEALS.pptx | Relocated modified | units/2_unit/slidedecks/Intro Python 2.01 TEALS.pptx; _docs/lesson_plans/units/2_unit/slidedecks/Intro Python 2.01 TEALS.pptx | 1487563 | 1472761 |
| docs/units/2_unit/slidedecks/Intro Python 2.02 TEALS.pptx | Relocated modified | units/2_unit/slidedecks/Intro Python 2.02 TEALS.pptx; _docs/lesson_plans/units/2_unit/slidedecks/Intro Python 2.02 TEALS.pptx | 3737087 | 1482225 |
| docs/units/2_unit/slidedecks/Intro Python 2.03 TEALS.pptx | Relocated modified | units/2_unit/slidedecks/Intro Python 2.03 TEALS.pptx; _docs/lesson_plans/units/2_unit/slidedecks/Intro Python 2.03 TEALS.pptx | 2482886 | 1471982 |
| docs/units/2_unit/slidedecks/Intro Python 2.04 TEALS.pptx | Relocated modified | units/2_unit/slidedecks/Intro Python 2.04 TEALS.pptx; _docs/lesson_plans/units/2_unit/slidedecks/Intro Python 2.04 TEALS.pptx | 2483115 | 1472768 |
| docs/units/2_unit/slidedecks/Intro Python 2.05 TEALS.pptx | Relocated modified | units/2_unit/slidedecks/Intro Python 2.05 TEALS.pptx; _docs/lesson_plans/units/2_unit/slidedecks/Intro Python 2.05 TEALS.pptx | 2468340 | 1478516 |
| docs/units/2_unit/slidedecks/Intro Python 2.06 TEALS.pptx | Relocated modified | units/2_unit/slidedecks/Intro Python 2.06 TEALS.pptx; _docs/lesson_plans/units/2_unit/slidedecks/Intro Python 2.06 TEALS.pptx | 2475687 | 1473929 |
| docs/units/2_unit/slidedecks/Intro Python 2.07 TEALS.pptx | Relocated modified | units/2_unit/slidedecks/Intro Python 2.07 TEALS.pptx; _docs/lesson_plans/units/2_unit/slidedecks/Intro Python 2.07 TEALS.pptx | 2452593 | 1471629 |
| docs/units/3_unit/01_lesson/lab.docx | Relocated modified | units/3_unit/01_lesson/lab.docx; _docs/lesson_plans/units/3_unit/01_lesson/lab.docx | 66912 | 49718 |
| docs/units/3_unit/01_lesson/lab.pdf | Relocated modified | units/3_unit/01_lesson/lab.pdf; _docs/lesson_plans/units/3_unit/01_lesson/lab.pdf | 96612 | 86518 |
| docs/units/3_unit/02_lesson/lab.docx | Relocated modified | units/3_unit/02_lesson/lab.docx; _docs/lesson_plans/units/3_unit/02_lesson/lab.docx | 28542 | 25030 |
| docs/units/3_unit/02_lesson/lab.pdf | Relocated modified | units/3_unit/02_lesson/lab.pdf; _docs/lesson_plans/units/3_unit/02_lesson/lab.pdf | 99475 | 65180 |
| docs/units/3_unit/03_lesson/lab.docx | Relocated modified | units/3_unit/03_lesson/lab.docx; _docs/lesson_plans/units/3_unit/03_lesson/lab.docx | 29659 | 47724 |
| docs/units/3_unit/03_lesson/lab.pdf | Relocated modified | units/3_unit/03_lesson/lab.pdf; _docs/lesson_plans/units/3_unit/03_lesson/lab.pdf | 126261 | 116925 |
| docs/units/3_unit/03_lesson/~$lab.docx | No mapped match | — | 162 | — |
| docs/units/3_unit/04_lesson/lab.docx | Relocated modified | units/3_unit/04_lesson/lab.docx; _docs/lesson_plans/units/3_unit/04_lesson/lab.docx | 30390 | 26224 |
| docs/units/3_unit/04_lesson/lab.pdf | Relocated modified | units/3_unit/04_lesson/lab.pdf; _docs/lesson_plans/units/3_unit/04_lesson/lab.pdf | 132402 | 71227 |
| docs/units/3_unit/05_lesson/alternate_project.docx | Relocated identical | _docs/lesson_plans/units/3_unit/05_lesson/alternate_project.docx; units/3_unit/05_lesson/alternate_project.docx | 25231 | 25231 |
| docs/units/3_unit/05_lesson/alternate_project.pdf | Relocated identical | _docs/lesson_plans/units/3_unit/05_lesson/alternate_project.pdf; units/3_unit/05_lesson/alternate_project.pdf | 123984 | 123984 |
| docs/units/3_unit/05_lesson/project.docx | Relocated modified | units/3_unit/05_lesson/project.docx; _docs/lesson_plans/units/3_unit/05_lesson/project.docx | 29247 | 26189 |
| docs/units/3_unit/05_lesson/project.pdf | Relocated modified | units/3_unit/05_lesson/project.pdf; _docs/lesson_plans/units/3_unit/05_lesson/project.pdf | 73204 | 89292 |
| docs/units/3_unit/05_lesson/project_canada.docx | No mapped match | — | 32253 | — |
| docs/units/3_unit/05_lesson/project_canada.pdf | No mapped match | — | 116459 | — |
| docs/units/3_unit/05_lesson/projecta.docx | No mapped match | — | 30798 | — |
| docs/units/3_unit/05_lesson/projecta.pdf | No mapped match | — | 120706 | — |
| docs/units/3_unit/05_lesson/rubric.docx | Relocated identical | _docs/lesson_plans/units/3_unit/05_lesson/rubric.docx; units/3_unit/05_lesson/rubric.docx | 29225 | 29225 |
| docs/units/3_unit/05_lesson/rubric.pdf | Relocated identical | _docs/lesson_plans/units/3_unit/05_lesson/rubric.pdf; units/3_unit/05_lesson/rubric.pdf | 80184 | 80184 |
| docs/units/3_unit/slidedecks/Intro Python 3.01 TEALS.pptx | Relocated modified | units/3_unit/slidedecks/Intro Python 3.01 TEALS.pptx; _docs/lesson_plans/units/3_unit/slidedecks/Intro Python 3.01 TEALS.pptx | 1593270 | 1589451 |
| docs/units/3_unit/slidedecks/Intro Python 3.02 TEALS.pptx | Relocated modified | units/3_unit/slidedecks/Intro Python 3.02 TEALS.pptx; _docs/lesson_plans/units/3_unit/slidedecks/Intro Python 3.02 TEALS.pptx | 2325220 | 2316084 |
| docs/units/3_unit/slidedecks/Intro Python 3.03 TEALS.pptx | Relocated modified | units/3_unit/slidedecks/Intro Python 3.03 TEALS.pptx; _docs/lesson_plans/units/3_unit/slidedecks/Intro Python 3.03 TEALS.pptx | 1548473 | 1540962 |
| docs/units/3_unit/slidedecks/Intro Python 3.04 TEALS.pptx | Relocated modified | units/3_unit/slidedecks/Intro Python 3.04 TEALS.pptx; _docs/lesson_plans/units/3_unit/slidedecks/Intro Python 3.04 TEALS.pptx | 1624478 | 1564986 |
| docs/units/3_unit/slidedecks/Intro Python 3.05 TEALS.pptx | Relocated modified | units/3_unit/slidedecks/Intro Python 3.05 TEALS.pptx; _docs/lesson_plans/units/3_unit/slidedecks/Intro Python 3.05 TEALS.pptx | 1470953 | 1467169 |
| docs/units/4 Steps to Solve Any CS Problem.pdf | Relocated identical | _docs/lesson_plans/units/4 Steps to Solve Any CS Problem.pdf; units/4 Steps to Solve Any CS Problem.pdf | 534942 | 534942 |
| docs/units/4_unit/01_lesson/lab.docx | Relocated modified | units/4_unit/01_lesson/lab.docx; _docs/lesson_plans/units/4_unit/01_lesson/lab.docx | 129977 | 130484 |
| docs/units/4_unit/01_lesson/lab.pdf | Relocated modified | units/4_unit/01_lesson/lab.pdf; _docs/lesson_plans/units/4_unit/01_lesson/lab.pdf | 209077 | 168900 |
| docs/units/4_unit/02_lesson/lab.docx | Relocated modified | units/4_unit/02_lesson/lab.docx; _docs/lesson_plans/units/4_unit/02_lesson/lab.docx | 29510 | 26031 |
| docs/units/4_unit/02_lesson/lab.pdf | Relocated modified | units/4_unit/02_lesson/lab.pdf; _docs/lesson_plans/units/4_unit/02_lesson/lab.pdf | 96090 | 92090 |
| docs/units/4_unit/03_lesson/lab.docx | Relocated modified | units/4_unit/03_lesson/lab.docx; _docs/lesson_plans/units/4_unit/03_lesson/lab.docx | 24753 | 25501 |
| docs/units/4_unit/03_lesson/lab.pdf | Relocated modified | units/4_unit/03_lesson/lab.pdf; _docs/lesson_plans/units/4_unit/03_lesson/lab.pdf | 71210 | 64926 |
| docs/units/4_unit/04_lesson/lab.docx | Relocated modified | units/4_unit/04_lesson/lab.docx; _docs/lesson_plans/units/4_unit/04_lesson/lab.docx | 25650 | 26159 |
| docs/units/4_unit/04_lesson/lab.pdf | Relocated modified | units/4_unit/04_lesson/lab.pdf; _docs/lesson_plans/units/4_unit/04_lesson/lab.pdf | 81317 | 67716 |
| docs/units/4_unit/05_lesson/lab.docx | Relocated modified | units/4_unit/05_lesson/lab.docx; _docs/lesson_plans/units/4_unit/05_lesson/lab.docx | 24294 | 24941 |
| docs/units/4_unit/05_lesson/lab.pdf | Relocated modified | units/4_unit/05_lesson/lab.pdf; _docs/lesson_plans/units/4_unit/05_lesson/lab.pdf | 68153 | 61230 |
| docs/units/4_unit/06_lesson/alternate_project.docx | Relocated identical | _docs/lesson_plans/units/4_unit/06_lesson/alternate_project.docx; units/4_unit/06_lesson/alternate_project.docx | 24772 | 24772 |
| docs/units/4_unit/06_lesson/alternate_project.pdf | Relocated identical | _docs/lesson_plans/units/4_unit/06_lesson/alternate_project.pdf; units/4_unit/06_lesson/alternate_project.pdf | 98922 | 98922 |
| docs/units/4_unit/06_lesson/project.docx | Relocated identical | _docs/lesson_plans/units/4_unit/06_lesson/project.docx; units/4_unit/06_lesson/project.docx | 26161 | 26161 |
| docs/units/4_unit/06_lesson/project.pdf | Relocated identical | _docs/lesson_plans/units/4_unit/06_lesson/project.pdf; units/4_unit/06_lesson/project.pdf | 107966 | 107966 |
| docs/units/4_unit/06_lesson/projecta.docx | Relocated identical | _docs/lesson_plans/units/4_unit/06_lesson/alternate_project.docx; units/4_unit/06_lesson/alternate_project.docx | 24772 | 24772 |
| docs/units/4_unit/06_lesson/projecta.pdf | Relocated identical | _docs/lesson_plans/units/4_unit/06_lesson/alternate_project.pdf; units/4_unit/06_lesson/alternate_project.pdf | 98922 | 98922 |
| docs/units/4_unit/06_lesson/rubric.docx | Relocated identical | _docs/lesson_plans/units/4_unit/06_lesson/rubric.docx; units/4_unit/06_lesson/rubric.docx | 29141 | 29141 |
| docs/units/4_unit/06_lesson/rubric.pdf | Relocated identical | _docs/lesson_plans/units/4_unit/06_lesson/rubric.pdf; units/4_unit/06_lesson/rubric.pdf | 83442 | 83442 |
| docs/units/4_unit/slidedecks/Intro Python 4.01 TEALS.pptx | Relocated modified | units/4_unit/slidedecks/Intro Python 4.01 TEALS.pptx; _docs/lesson_plans/units/4_unit/slidedecks/Intro Python 4.01 TEALS.pptx | 1674053 | 1670485 |
| docs/units/4_unit/slidedecks/Intro Python 4.02 TEALS.pptx | Relocated modified | units/4_unit/slidedecks/Intro Python 4.02 TEALS.pptx; _docs/lesson_plans/units/4_unit/slidedecks/Intro Python 4.02 TEALS.pptx | 1510619 | 1502290 |
| docs/units/4_unit/slidedecks/Intro Python 4.03 TEALS.pptx | Relocated modified | units/4_unit/slidedecks/Intro Python 4.03 TEALS.pptx; _docs/lesson_plans/units/4_unit/slidedecks/Intro Python 4.03 TEALS.pptx | 1548883 | 1569792 |
| docs/units/4_unit/slidedecks/Intro Python 4.04 TEALS.pptx | Relocated modified | units/4_unit/slidedecks/Intro Python 4.04 TEALS.pptx; _docs/lesson_plans/units/4_unit/slidedecks/Intro Python 4.04 TEALS.pptx | 1479115 | 1475499 |
| docs/units/4_unit/slidedecks/Intro Python 4.05 TEALS.pptx | Relocated modified | units/4_unit/slidedecks/Intro Python 4.05 TEALS.pptx; _docs/lesson_plans/units/4_unit/slidedecks/Intro Python 4.05 TEALS.pptx | 1480837 | 1480081 |
| docs/units/4_unit/slidedecks/Intro Python 4.06 TEALS.pptx | Relocated modified | units/4_unit/slidedecks/Intro Python 4.06 TEALS.pptx; _docs/lesson_plans/units/4_unit/slidedecks/Intro Python 4.06 TEALS.pptx | 1640470 | 1639079 |
| docs/units/5_unit/01_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/5_unit/01_lesson/lab.docx; units/5_unit/01_lesson/lab.docx | 25220 | 25220 |
| docs/units/5_unit/01_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/5_unit/01_lesson/lab.pdf; units/5_unit/01_lesson/lab.pdf | 43800 | 43800 |
| docs/units/5_unit/02_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/5_unit/02_lesson/lab.docx; units/5_unit/02_lesson/lab.docx | 25168 | 25168 |
| docs/units/5_unit/02_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/5_unit/02_lesson/lab.pdf; units/5_unit/02_lesson/lab.pdf | 57999 | 57999 |
| docs/units/5_unit/03_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/5_unit/03_lesson/lab.docx; units/5_unit/03_lesson/lab.docx | 25064 | 25064 |
| docs/units/5_unit/03_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/5_unit/03_lesson/lab.pdf; units/5_unit/03_lesson/lab.pdf | 42329 | 42329 |
| docs/units/5_unit/04_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/5_unit/04_lesson/lab.docx; units/5_unit/04_lesson/lab.docx | 24839 | 24839 |
| docs/units/5_unit/04_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/5_unit/04_lesson/lab.pdf; units/5_unit/04_lesson/lab.pdf | 58612 | 58612 |
| docs/units/5_unit/05_lesson/project.docx | Relocated identical | _docs/lesson_plans/units/5_unit/05_lesson/project.docx; units/5_unit/05_lesson/project.docx | 25530 | 25530 |
| docs/units/5_unit/05_lesson/project.pdf | Relocated identical | _docs/lesson_plans/units/5_unit/05_lesson/project.pdf; units/5_unit/05_lesson/project.pdf | 87506 | 87506 |
| docs/units/5_unit/05_lesson/rubric.docx | Relocated identical | _docs/lesson_plans/units/5_unit/05_lesson/rubric.docx; units/5_unit/05_lesson/rubric.docx | 21911 | 21911 |
| docs/units/5_unit/05_lesson/rubric.pdf | Relocated identical | _docs/lesson_plans/units/5_unit/05_lesson/rubric.pdf; units/5_unit/05_lesson/rubric.pdf | 101661 | 101661 |
| docs/units/5_unit/slidedecks/Intro Python 5.01 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/5_unit/slidedecks/Intro Python 5.01 TEALS.pptx | 1604271 | 1431828 |
| docs/units/5_unit/slidedecks/Intro Python 5.02 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/5_unit/slidedecks/Intro Python 5.02 TEALS.pptx | 1471189 | 1431743 |
| docs/units/5_unit/slidedecks/Intro Python 5.03 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/5_unit/slidedecks/Intro Python 5.03 TEALS.pptx | 1467396 | 1431765 |
| docs/units/5_unit/slidedecks/Intro Python 5.04 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/5_unit/slidedecks/Intro Python 5.04 TEALS.pptx | 1470555 | 1431759 |
| docs/units/5_unit/slidedecks/Intro Python 5.05 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/5_unit/slidedecks/Intro Python 5.05 TEALS.pptx | 1468983 | 1427942 |
| docs/units/6_unit/01_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/6_unit/01_lesson/lab.docx; units/6_unit/01_lesson/lab.docx | 25225 | 25225 |
| docs/units/6_unit/01_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/6_unit/01_lesson/lab.pdf; units/6_unit/01_lesson/lab.pdf | 61860 | 61860 |
| docs/units/6_unit/02_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/6_unit/02_lesson/lab.docx; units/6_unit/02_lesson/lab.docx | 25568 | 25568 |
| docs/units/6_unit/02_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/6_unit/02_lesson/lab.pdf; units/6_unit/02_lesson/lab.pdf | 66558 | 66558 |
| docs/units/6_unit/03_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/6_unit/03_lesson/lab.docx; units/6_unit/03_lesson/lab.docx | 22475 | 22475 |
| docs/units/6_unit/03_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/6_unit/03_lesson/lab.pdf; units/6_unit/03_lesson/lab.pdf | 83963 | 83963 |
| docs/units/6_unit/04_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/6_unit/04_lesson/lab.docx; units/6_unit/04_lesson/lab.docx | 25816 | 25816 |
| docs/units/6_unit/04_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/6_unit/04_lesson/lab.pdf; units/6_unit/04_lesson/lab.pdf | 105402 | 105402 |
| docs/units/6_unit/05_lesson/project.docx | Relocated identical | _docs/lesson_plans/units/6_unit/05_lesson/project.docx; units/6_unit/05_lesson/project.docx | 25607 | 25607 |
| docs/units/6_unit/05_lesson/project.pdf | Relocated identical | _docs/lesson_plans/units/6_unit/05_lesson/project.pdf; units/6_unit/05_lesson/project.pdf | 66280 | 66280 |
| docs/units/6_unit/05_lesson/project_canada.docx | No mapped match | — | 28165 | — |
| docs/units/6_unit/05_lesson/project_canada.pdf | No mapped match | — | 125760 | — |
| docs/units/6_unit/05_lesson/projectb.docx | Relocated identical | _docs/lesson_plans/units/6_unit/05_lesson/projectb.docx; units/6_unit/05_lesson/projectb.docx | 33662 | 33662 |
| docs/units/6_unit/05_lesson/projectb.pdf | Relocated identical | _docs/lesson_plans/units/6_unit/05_lesson/projectb.pdf; units/6_unit/05_lesson/projectb.pdf | 154554 | 154554 |
| docs/units/6_unit/05_lesson/rubric.docx | Relocated identical | _docs/lesson_plans/units/6_unit/05_lesson/rubric.docx; units/6_unit/05_lesson/rubric.docx | 29626 | 29626 |
| docs/units/6_unit/05_lesson/rubric.pdf | Relocated identical | _docs/lesson_plans/units/6_unit/05_lesson/rubric.pdf; units/6_unit/05_lesson/rubric.pdf | 84324 | 84324 |
| docs/units/6_unit/slidedecks/Intro Python 6.01 TEALS.pptx | Relocated modified | units/6_unit/slidedecks/Intro Python 6.01 TEALS.pptx; _docs/lesson_plans/units/6_unit/slidedecks/Intro Python 6.01 TEALS.pptx | 2475426 | 1495378 |
| docs/units/6_unit/slidedecks/Intro Python 6.02 TEALS.pptx | Relocated modified | units/6_unit/slidedecks/Intro Python 6.02 TEALS.pptx; _docs/lesson_plans/units/6_unit/slidedecks/Intro Python 6.02 TEALS.pptx | 2462537 | 1484940 |
| docs/units/6_unit/slidedecks/Intro Python 6.03 TEALS.pptx | Relocated modified | units/6_unit/slidedecks/Intro Python 6.03 TEALS.pptx; _docs/lesson_plans/units/6_unit/slidedecks/Intro Python 6.03 TEALS.pptx | 1473493 | 1473455 |
| docs/units/6_unit/slidedecks/Intro Python 6.04 TEALS.pptx | Relocated modified | units/6_unit/slidedecks/Intro Python 6.04 TEALS.pptx; _docs/lesson_plans/units/6_unit/slidedecks/Intro Python 6.04 TEALS.pptx | 1481021 | 1540287 |
| docs/units/6_unit/slidedecks/Intro Python 6.05 TEALS.pptx | Relocated modified | units/6_unit/slidedecks/Intro Python 6.05 TEALS.pptx; _docs/lesson_plans/units/6_unit/slidedecks/Intro Python 6.05 TEALS.pptx | 1889650 | 1888251 |
| docs/units/7_unit/01_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/7_unit/01_lesson/lab.docx; units/7_unit/01_lesson/lab.docx | 28094 | 28094 |
| docs/units/7_unit/01_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/7_unit/01_lesson/lab.pdf; units/7_unit/01_lesson/lab.pdf | 58494 | 58494 |
| docs/units/7_unit/02_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/7_unit/02_lesson/lab.docx; units/7_unit/02_lesson/lab.docx | 24986 | 24986 |
| docs/units/7_unit/02_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/7_unit/02_lesson/lab.pdf; units/7_unit/02_lesson/lab.pdf | 55869 | 55869 |
| docs/units/7_unit/03_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/7_unit/03_lesson/lab.docx; units/7_unit/03_lesson/lab.docx | 25250 | 25250 |
| docs/units/7_unit/03_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/7_unit/03_lesson/lab.pdf; units/7_unit/03_lesson/lab.pdf | 62277 | 62277 |
| docs/units/7_unit/04_lesson/lab.docx | Relocated identical | _docs/lesson_plans/units/7_unit/04_lesson/lab.docx; units/7_unit/04_lesson/lab.docx | 25350 | 25350 |
| docs/units/7_unit/04_lesson/lab.pdf | Relocated identical | _docs/lesson_plans/units/7_unit/04_lesson/lab.pdf; units/7_unit/04_lesson/lab.pdf | 85214 | 85214 |
| docs/units/7_unit/05_lesson/alternate_project.docx | Relocated identical | _docs/lesson_plans/units/7_unit/05_lesson/alternate_project.docx; units/7_unit/05_lesson/alternate_project.docx | 25958 | 25958 |
| docs/units/7_unit/05_lesson/alternate_project.pdf | Relocated identical | _docs/lesson_plans/units/7_unit/05_lesson/alternate_project.pdf; units/7_unit/05_lesson/alternate_project.pdf | 130354 | 130354 |
| docs/units/7_unit/05_lesson/project.docx | Relocated modified | units/7_unit/05_lesson/project.docx; _docs/lesson_plans/units/7_unit/05_lesson/project.docx | 33810 | 28824 |
| docs/units/7_unit/05_lesson/project.pdf | Relocated modified | units/7_unit/05_lesson/project.pdf; _docs/lesson_plans/units/7_unit/05_lesson/project.pdf | 241199 | 113515 |
| docs/units/7_unit/05_lesson/projecta.docx | Relocated identical | _docs/lesson_plans/units/7_unit/05_lesson/alternate_project.docx; units/7_unit/05_lesson/alternate_project.docx | 25958 | 25958 |
| docs/units/7_unit/05_lesson/projecta.pdf | Relocated identical | _docs/lesson_plans/units/7_unit/05_lesson/alternate_project.pdf; units/7_unit/05_lesson/alternate_project.pdf | 130354 | 130354 |
| docs/units/7_unit/05_lesson/rubric.docx | Relocated modified | units/7_unit/05_lesson/rubric.docx; _docs/lesson_plans/units/7_unit/05_lesson/rubric.docx | 31690 | 30371 |
| docs/units/7_unit/05_lesson/rubric.pdf | Relocated modified | units/7_unit/05_lesson/rubric.pdf; _docs/lesson_plans/units/7_unit/05_lesson/rubric.pdf | 97387 | 82705 |
| docs/units/7_unit/slidedecks/Intro Python 7.01 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/7_unit/slidedecks/Intro Python 7.01 TEALS.pptx | 1529755 | 1432754 |
| docs/units/7_unit/slidedecks/Intro Python 7.02 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/7_unit/slidedecks/Intro Python 7.02 TEALS.pptx | 1508964 | 1440355 |
| docs/units/7_unit/slidedecks/Intro Python 7.03 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/7_unit/slidedecks/Intro Python 7.03 TEALS.pptx | 1512609 | 1449920 |
| docs/units/7_unit/slidedecks/Intro Python 7.04 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/7_unit/slidedecks/Intro Python 7.04 TEALS.pptx | 1506043 | 1458486 |
| docs/units/7_unit/slidedecks/Intro Python 7.05 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/7_unit/slidedecks/Intro Python 7.05 TEALS.pptx | 1457414 | 1465063 |
| docs/units/8_unit/01_lesson/project_ideas.docx | Relocated modified | units/8_unit/01_lesson/project_ideas.docx; _docs/lesson_plans/units/8_unit/01_lesson/project_ideas.docx | 25977 | 27499 |
| docs/units/8_unit/01_lesson/project_ideas.pdf | Relocated modified | units/8_unit/01_lesson/project_ideas.pdf; _docs/lesson_plans/units/8_unit/01_lesson/project_ideas.pdf | 85716 | 87812 |
| docs/units/8_unit/final_project_development_plan.docx | Relocated identical | _docs/lesson_plans/units/8_unit/final_project_development_plan.docx; units/8_unit/final_project_development_plan.docx | 21277 | 21277 |
| docs/units/8_unit/final_project_plan_organizer.docx | Relocated identical | _docs/lesson_plans/units/8_unit/final_project_plan_organizer.docx; units/8_unit/final_project_plan_organizer.docx | 24391 | 24391 |
| docs/units/8_unit/project.docx | Relocated identical | _docs/lesson_plans/units/8_unit/project.docx; units/8_unit/project.docx | 24998 | 24998 |
| docs/units/8_unit/project.pdf | Relocated identical | _docs/lesson_plans/units/8_unit/project.pdf; units/8_unit/project.pdf | 114429 | 114429 |
| docs/units/8_unit/rubric.docx | Relocated identical | _docs/lesson_plans/units/8_unit/rubric.docx; units/8_unit/rubric.docx | 21976 | 21976 |
| docs/units/8_unit/rubric.pdf | Relocated identical | _docs/lesson_plans/units/8_unit/rubric.pdf; units/8_unit/rubric.pdf | 84000 | 84000 |
| docs/units/supplemental/calculator_canada_project_spec.docx | No mapped match | — | 25515 | — |
| docs/units/supplemental/calculator_canada_project_spec.pdf | No mapped match | — | 146774 | — |
| projects/adventure/spec.docx | Identical | projects/adventure/spec.docx | 35232 | 35232 |
| units/1_unit/01_lesson/lesson.docx | Identical | units/1_unit/01_lesson/lesson.docx | 24324 | 24324 |
| units/1_unit/02_lesson/lab.docx | Identical | units/1_unit/02_lesson/lab.docx | 25596 | 25596 |
| units/1_unit/02_lesson/lab.pdf | Identical | units/1_unit/02_lesson/lab.pdf | 84554 | 84554 |
| units/1_unit/03_lesson/lab.docx | Identical | units/1_unit/03_lesson/lab.docx | 194937 | 194937 |
| units/1_unit/03_lesson/lab.pdf | Identical | units/1_unit/03_lesson/lab.pdf | 259783 | 259783 |
| units/1_unit/04_lesson/lab.docx | Identical | units/1_unit/04_lesson/lab.docx | 127273 | 127273 |
| units/1_unit/04_lesson/lab.pdf | Identical | units/1_unit/04_lesson/lab.pdf | 153113 | 153113 |
| units/1_unit/05_lesson/alt1/TEALS2018-Lab105.pdf | Identical | units/1_unit/05_lesson/alt1/TEALS2018-Lab105.pdf | 275852 | 275852 |
| units/1_unit/06_lesson/project.docx | Modified | units/1_unit/06_lesson/project.docx | 29437 | 157645 |
| units/1_unit/06_lesson/project.pdf | Modified | units/1_unit/06_lesson/project.pdf | 127144 | 206007 |
| units/1_unit/06_lesson/project_canada.docx | No mapped match | — | 27784 | — |
| units/1_unit/06_lesson/project_canada.pdf | No mapped match | — | 130774 | — |
| units/1_unit/06_lesson/projecta.docx | Relocated identical | _docs/lesson_plans/units/1_unit/06_lesson/alternate_project.docx; units/1_unit/06_lesson/alternate_project.docx | 58846 | 58846 |
| units/1_unit/06_lesson/projecta.pdf | Relocated identical | _docs/lesson_plans/units/1_unit/06_lesson/alternate_project.pdf; units/1_unit/06_lesson/alternate_project.pdf | 149856 | 149856 |
| units/1_unit/06_lesson/rubric.docx | Modified | units/1_unit/06_lesson/rubric.docx | 29127 | 28994 |
| units/1_unit/06_lesson/rubric.pdf | Identical | units/1_unit/06_lesson/rubric.pdf | 83391 | 83391 |
| units/1_unit/Cloud9_Student.pdf | Identical | units/1_unit/Cloud9_Student.pdf | 2151694 | 2151694 |
| units/1_unit/Cloud9_Teacher.docx | Identical | units/1_unit/Cloud9_Teacher.docx | 831661 | 831661 |
| units/1_unit/Trinket_Student.docx | Identical | units/1_unit/Trinket_Student.docx | 638371 | 638371 |
| units/1_unit/Trinket_Student.pdf | Identical | units/1_unit/Trinket_Student.pdf | 805638 | 805638 |
| units/1_unit/Trinket_Teacher.docx | Identical | units/1_unit/Trinket_Teacher.docx | 446591 | 446591 |
| units/1_unit/Trinket_Teacher.pdf | Identical | units/1_unit/Trinket_Teacher.pdf | 550885 | 550885 |
| units/1_unit/Trinket_Teacher_Connect.docx | Identical | units/1_unit/Trinket_Teacher_Connect.docx | 632779 | 632779 |
| units/1_unit/replit_student.docx | Identical | units/1_unit/replit_student.docx | 286155 | 286155 |
| units/1_unit/replit_student.pdf | Identical | units/1_unit/replit_student.pdf | 248256 | 248256 |
| units/1_unit/replit_teacher.docx | Identical | units/1_unit/replit_teacher.docx | 316747 | 316747 |
| units/1_unit/replit_teacher.pdf | Identical | units/1_unit/replit_teacher.pdf | 520890 | 520890 |
| units/1_unit/slidedecks/Intro Python 1.01 TEALS.pptx | Modified | units/1_unit/slidedecks/Intro Python 1.01 TEALS.pptx | 2099798 | 2508831 |
| units/1_unit/slidedecks/Intro Python 1.02 TEALS.pptx | Modified | units/1_unit/slidedecks/Intro Python 1.02 TEALS.pptx | 1594822 | 1590033 |
| units/1_unit/slidedecks/Intro Python 1.03 TEALS.pptx | Modified | units/1_unit/slidedecks/Intro Python 1.03 TEALS.pptx | 1497254 | 1491808 |
| units/1_unit/slidedecks/Intro Python 1.04 TEALS.pptx | Modified | units/1_unit/slidedecks/Intro Python 1.04 TEALS.pptx | 1647911 | 1654473 |
| units/1_unit/slidedecks/Intro Python 1.05 TEALS.pptx | Modified | units/1_unit/slidedecks/Intro Python 1.05 TEALS.pptx | 1471838 | 1468392 |
| units/1_unit/slidedecks/Intro Python 1.06 TEALS.pptx | Modified | units/1_unit/slidedecks/Intro Python 1.06 TEALS.pptx | 1484460 | 1474478 |
| units/2_unit/01_lesson/lab.docx | Modified | units/2_unit/01_lesson/lab.docx | 29993 | 25175 |
| units/2_unit/01_lesson/lab.pdf | Modified | units/2_unit/01_lesson/lab.pdf | 80959 | 80064 |
| units/2_unit/01_lesson/lesson.docx | Identical | units/2_unit/01_lesson/lesson.docx | 65681 | 65681 |
| units/2_unit/02_lesson/lab.docx | Modified | units/2_unit/02_lesson/lab.docx | 28612 | 26118 |
| units/2_unit/02_lesson/lab.pdf | Modified | units/2_unit/02_lesson/lab.pdf | 115354 | 91617 |
| units/2_unit/03_lesson/lab.docx | Modified | units/2_unit/03_lesson/lab.docx | 414660 | 403195 |
| units/2_unit/03_lesson/lab.pdf | Modified | units/2_unit/03_lesson/lab.pdf | 236842 | 429100 |
| units/2_unit/04_lesson/lab.docx | Modified | units/2_unit/04_lesson/lab.docx | 28574 | 23339 |
| units/2_unit/04_lesson/lab.pdf | Modified | units/2_unit/04_lesson/lab.pdf | 87636 | 67004 |
| units/2_unit/05_lesson/lab.docx | Modified | units/2_unit/05_lesson/lab.docx | 28538 | 29046 |
| units/2_unit/05_lesson/lab.pdf | Modified | units/2_unit/05_lesson/lab.pdf | 78814 | 91658 |
| units/2_unit/06_lesson/lab.docx | Modified | units/2_unit/06_lesson/lab.docx | 25940 | 29261 |
| units/2_unit/06_lesson/lab.pdf | Modified | units/2_unit/06_lesson/lab.pdf | 66237 | 92047 |
| units/2_unit/07_lesson/lesson.docx | No mapped match | — | 13339 | — |
| units/2_unit/07_lesson/project.docx | Modified | units/2_unit/07_lesson/project.docx | 30423 | 27461 |
| units/2_unit/07_lesson/project.pdf | Modified | units/2_unit/07_lesson/project.pdf | 116019 | 104369 |
| units/2_unit/07_lesson/project_canada.docx | No mapped match | — | 32269 | — |
| units/2_unit/07_lesson/project_canada.pdf | No mapped match | — | 115242 | — |
| units/2_unit/07_lesson/projecta.docx | Relocated identical | _docs/lesson_plans/units/2_unit/07_lesson/alternate_project.docx; units/2_unit/07_lesson/alternate_project.docx | 23851 | 23851 |
| units/2_unit/07_lesson/projecta.pdf | Relocated identical | _docs/lesson_plans/units/2_unit/07_lesson/alternate_project.pdf; units/2_unit/07_lesson/alternate_project.pdf | 116979 | 116979 |
| units/2_unit/07_lesson/rubric.docx | Modified | units/2_unit/07_lesson/rubric.docx | 29086 | 28828 |
| units/2_unit/07_lesson/rubric.pdf | Identical | units/2_unit/07_lesson/rubric.pdf | 103125 | 103125 |
| units/2_unit/slidedecks/Intro Python 2.01 TEALS.pptx | Modified | units/2_unit/slidedecks/Intro Python 2.01 TEALS.pptx | 1487563 | 1472761 |
| units/2_unit/slidedecks/Intro Python 2.02 TEALS.pptx | Modified | units/2_unit/slidedecks/Intro Python 2.02 TEALS.pptx | 3737087 | 1482225 |
| units/2_unit/slidedecks/Intro Python 2.03 TEALS.pptx | Modified | units/2_unit/slidedecks/Intro Python 2.03 TEALS.pptx | 2482886 | 1471982 |
| units/2_unit/slidedecks/Intro Python 2.04 TEALS.pptx | Modified | units/2_unit/slidedecks/Intro Python 2.04 TEALS.pptx | 2483115 | 1472768 |
| units/2_unit/slidedecks/Intro Python 2.05 TEALS.pptx | Modified | units/2_unit/slidedecks/Intro Python 2.05 TEALS.pptx | 2468340 | 1478516 |
| units/2_unit/slidedecks/Intro Python 2.06 TEALS.pptx | Modified | units/2_unit/slidedecks/Intro Python 2.06 TEALS.pptx | 2475687 | 1473929 |
| units/2_unit/slidedecks/Intro Python 2.07 TEALS.pptx | Modified | units/2_unit/slidedecks/Intro Python 2.07 TEALS.pptx | 2452593 | 1471629 |
| units/3_unit/01_lesson/lab.docx | Modified | units/3_unit/01_lesson/lab.docx | 66912 | 49718 |
| units/3_unit/01_lesson/lab.pdf | Modified | units/3_unit/01_lesson/lab.pdf | 96612 | 86518 |
| units/3_unit/02_lesson/lab.docx | Modified | units/3_unit/02_lesson/lab.docx | 28542 | 25030 |
| units/3_unit/02_lesson/lab.pdf | Modified | units/3_unit/02_lesson/lab.pdf | 99475 | 65180 |
| units/3_unit/03_lesson/lab.docx | Modified | units/3_unit/03_lesson/lab.docx | 29659 | 47724 |
| units/3_unit/03_lesson/lab.pdf | Modified | units/3_unit/03_lesson/lab.pdf | 126261 | 116925 |
| units/3_unit/04_lesson/lab.docx | Modified | units/3_unit/04_lesson/lab.docx | 30390 | 26224 |
| units/3_unit/04_lesson/lab.pdf | Modified | units/3_unit/04_lesson/lab.pdf | 132402 | 71227 |
| units/3_unit/05_lesson/project.docx | Modified | units/3_unit/05_lesson/project.docx | 29247 | 26189 |
| units/3_unit/05_lesson/project.pdf | Modified | units/3_unit/05_lesson/project.pdf | 73204 | 89292 |
| units/3_unit/05_lesson/project_canada.docx | No mapped match | — | 32253 | — |
| units/3_unit/05_lesson/project_canada.pdf | No mapped match | — | 116459 | — |
| units/3_unit/05_lesson/projecta.docx | No mapped match | — | 30798 | — |
| units/3_unit/05_lesson/projecta.pdf | No mapped match | — | 120706 | — |
| units/3_unit/05_lesson/rubric.docx | Identical | units/3_unit/05_lesson/rubric.docx | 29225 | 29225 |
| units/3_unit/05_lesson/rubric.pdf | Identical | units/3_unit/05_lesson/rubric.pdf | 80184 | 80184 |
| units/3_unit/slidedecks/Intro Python 3.01 TEALS.pptx | Modified | units/3_unit/slidedecks/Intro Python 3.01 TEALS.pptx | 1593270 | 1589451 |
| units/3_unit/slidedecks/Intro Python 3.02 TEALS.pptx | Modified | units/3_unit/slidedecks/Intro Python 3.02 TEALS.pptx | 2325220 | 2316084 |
| units/3_unit/slidedecks/Intro Python 3.03 TEALS.pptx | Modified | units/3_unit/slidedecks/Intro Python 3.03 TEALS.pptx | 1548473 | 1540962 |
| units/3_unit/slidedecks/Intro Python 3.04 TEALS.pptx | Modified | units/3_unit/slidedecks/Intro Python 3.04 TEALS.pptx | 1624478 | 1564986 |
| units/3_unit/slidedecks/Intro Python 3.05 TEALS.pptx | Modified | units/3_unit/slidedecks/Intro Python 3.05 TEALS.pptx | 1470953 | 1467169 |
| units/4 Steps to Solve Any CS Problem.pdf | Identical | units/4 Steps to Solve Any CS Problem.pdf | 534942 | 534942 |
| units/4_unit/01_lesson/lab.docx | Modified | units/4_unit/01_lesson/lab.docx | 129977 | 130484 |
| units/4_unit/01_lesson/lab.pdf | Modified | units/4_unit/01_lesson/lab.pdf | 209077 | 168900 |
| units/4_unit/02_lesson/lab.docx | Modified | units/4_unit/02_lesson/lab.docx | 29510 | 26031 |
| units/4_unit/02_lesson/lab.pdf | Modified | units/4_unit/02_lesson/lab.pdf | 96090 | 92090 |
| units/4_unit/03_lesson/lab.docx | Modified | units/4_unit/03_lesson/lab.docx | 24753 | 25501 |
| units/4_unit/03_lesson/lab.pdf | Modified | units/4_unit/03_lesson/lab.pdf | 71210 | 64926 |
| units/4_unit/04_lesson/lab.docx | Modified | units/4_unit/04_lesson/lab.docx | 25650 | 26159 |
| units/4_unit/04_lesson/lab.pdf | Modified | units/4_unit/04_lesson/lab.pdf | 81317 | 67716 |
| units/4_unit/05_lesson/lab.docx | Modified | units/4_unit/05_lesson/lab.docx | 24294 | 24941 |
| units/4_unit/05_lesson/lab.pdf | Modified | units/4_unit/05_lesson/lab.pdf | 68153 | 61230 |
| units/4_unit/06_lesson/project.docx | Identical | units/4_unit/06_lesson/project.docx | 26161 | 26161 |
| units/4_unit/06_lesson/project.pdf | Identical | units/4_unit/06_lesson/project.pdf | 107966 | 107966 |
| units/4_unit/06_lesson/projecta.docx | Relocated identical | _docs/lesson_plans/units/4_unit/06_lesson/alternate_project.docx; units/4_unit/06_lesson/alternate_project.docx | 24772 | 24772 |
| units/4_unit/06_lesson/projecta.pdf | Relocated identical | _docs/lesson_plans/units/4_unit/06_lesson/alternate_project.pdf; units/4_unit/06_lesson/alternate_project.pdf | 98922 | 98922 |
| units/4_unit/06_lesson/rubric.docx | Identical | units/4_unit/06_lesson/rubric.docx | 29141 | 29141 |
| units/4_unit/06_lesson/rubric.pdf | Identical | units/4_unit/06_lesson/rubric.pdf | 83442 | 83442 |
| units/4_unit/slidedecks/Intro Python 4.01 TEALS.pptx | Modified | units/4_unit/slidedecks/Intro Python 4.01 TEALS.pptx | 1674053 | 1670485 |
| units/4_unit/slidedecks/Intro Python 4.02 TEALS.pptx | Modified | units/4_unit/slidedecks/Intro Python 4.02 TEALS.pptx | 1510619 | 1502290 |
| units/4_unit/slidedecks/Intro Python 4.03 TEALS.pptx | Modified | units/4_unit/slidedecks/Intro Python 4.03 TEALS.pptx | 1548883 | 1569792 |
| units/4_unit/slidedecks/Intro Python 4.04 TEALS.pptx | Modified | units/4_unit/slidedecks/Intro Python 4.04 TEALS.pptx | 1479115 | 1475499 |
| units/4_unit/slidedecks/Intro Python 4.05 TEALS.pptx | Modified | units/4_unit/slidedecks/Intro Python 4.05 TEALS.pptx | 1480837 | 1480081 |
| units/4_unit/slidedecks/Intro Python 4.06 TEALS.pptx | Modified | units/4_unit/slidedecks/Intro Python 4.06 TEALS.pptx | 1640470 | 1639079 |
| units/5_unit/01_lesson/lab.docx | Identical | units/5_unit/01_lesson/lab.docx | 25220 | 25220 |
| units/5_unit/01_lesson/lab.pdf | Identical | units/5_unit/01_lesson/lab.pdf | 43800 | 43800 |
| units/5_unit/02_lesson/lab.docx | Identical | units/5_unit/02_lesson/lab.docx | 25168 | 25168 |
| units/5_unit/02_lesson/lab.pdf | Identical | units/5_unit/02_lesson/lab.pdf | 57999 | 57999 |
| units/5_unit/03_lesson/lab.docx | Identical | units/5_unit/03_lesson/lab.docx | 25064 | 25064 |
| units/5_unit/03_lesson/lab.pdf | Identical | units/5_unit/03_lesson/lab.pdf | 42329 | 42329 |
| units/5_unit/04_lesson/lab.docx | Identical | units/5_unit/04_lesson/lab.docx | 24839 | 24839 |
| units/5_unit/04_lesson/lab.pdf | Identical | units/5_unit/04_lesson/lab.pdf | 58612 | 58612 |
| units/5_unit/05_lesson/project.docx | Identical | units/5_unit/05_lesson/project.docx | 25530 | 25530 |
| units/5_unit/05_lesson/project.pdf | Identical | units/5_unit/05_lesson/project.pdf | 87506 | 87506 |
| units/5_unit/05_lesson/rubric.docx | Identical | units/5_unit/05_lesson/rubric.docx | 21911 | 21911 |
| units/5_unit/05_lesson/rubric.pdf | Identical | units/5_unit/05_lesson/rubric.pdf | 101661 | 101661 |
| units/5_unit/slidedecks/Intro Python 5.01 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/5_unit/slidedecks/Intro Python 5.01 TEALS.pptx | 1604271 | 1431828 |
| units/5_unit/slidedecks/Intro Python 5.02 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/5_unit/slidedecks/Intro Python 5.02 TEALS.pptx | 1471189 | 1431743 |
| units/5_unit/slidedecks/Intro Python 5.03 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/5_unit/slidedecks/Intro Python 5.03 TEALS.pptx | 1467396 | 1431765 |
| units/5_unit/slidedecks/Intro Python 5.04 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/5_unit/slidedecks/Intro Python 5.04 TEALS.pptx | 1470555 | 1431759 |
| units/5_unit/slidedecks/Intro Python 5.05 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/5_unit/slidedecks/Intro Python 5.05 TEALS.pptx | 1468983 | 1427942 |
| units/6_unit/01_lesson/lab.docx | Identical | units/6_unit/01_lesson/lab.docx | 25225 | 25225 |
| units/6_unit/01_lesson/lab.pdf | Identical | units/6_unit/01_lesson/lab.pdf | 61860 | 61860 |
| units/6_unit/02_lesson/lab.docx | Identical | units/6_unit/02_lesson/lab.docx | 25568 | 25568 |
| units/6_unit/02_lesson/lab.pdf | Identical | units/6_unit/02_lesson/lab.pdf | 66558 | 66558 |
| units/6_unit/03_lesson/lab.docx | Identical | units/6_unit/03_lesson/lab.docx | 22475 | 22475 |
| units/6_unit/03_lesson/lab.pdf | Identical | units/6_unit/03_lesson/lab.pdf | 83963 | 83963 |
| units/6_unit/04_lesson/lab.docx | Identical | units/6_unit/04_lesson/lab.docx | 25816 | 25816 |
| units/6_unit/04_lesson/lab.pdf | Identical | units/6_unit/04_lesson/lab.pdf | 105402 | 105402 |
| units/6_unit/05_lesson/project.docx | Identical | units/6_unit/05_lesson/project.docx | 25607 | 25607 |
| units/6_unit/05_lesson/project.pdf | Identical | units/6_unit/05_lesson/project.pdf | 66280 | 66280 |
| units/6_unit/05_lesson/project_canada.docx | No mapped match | — | 28165 | — |
| units/6_unit/05_lesson/project_canada.pdf | No mapped match | — | 125760 | — |
| units/6_unit/05_lesson/projectb.docx | Identical | units/6_unit/05_lesson/projectb.docx | 33662 | 33662 |
| units/6_unit/05_lesson/projectb.pdf | Identical | units/6_unit/05_lesson/projectb.pdf | 154554 | 154554 |
| units/6_unit/05_lesson/rubric.docx | Identical | units/6_unit/05_lesson/rubric.docx | 29626 | 29626 |
| units/6_unit/05_lesson/rubric.pdf | Identical | units/6_unit/05_lesson/rubric.pdf | 84324 | 84324 |
| units/6_unit/slidedecks/Intro Python 6.01 TEALS.pptx | Modified | units/6_unit/slidedecks/Intro Python 6.01 TEALS.pptx | 2475426 | 1495378 |
| units/6_unit/slidedecks/Intro Python 6.02 TEALS.pptx | Modified | units/6_unit/slidedecks/Intro Python 6.02 TEALS.pptx | 2462537 | 1484940 |
| units/6_unit/slidedecks/Intro Python 6.03 TEALS.pptx | Modified | units/6_unit/slidedecks/Intro Python 6.03 TEALS.pptx | 1473493 | 1473455 |
| units/6_unit/slidedecks/Intro Python 6.04 TEALS.pptx | Modified | units/6_unit/slidedecks/Intro Python 6.04 TEALS.pptx | 1481021 | 1540287 |
| units/6_unit/slidedecks/Intro Python 6.05 TEALS.pptx | Modified | units/6_unit/slidedecks/Intro Python 6.05 TEALS.pptx | 1889650 | 1888251 |
| units/7_unit/01_lesson/lab.docx | Identical | units/7_unit/01_lesson/lab.docx | 28094 | 28094 |
| units/7_unit/01_lesson/lab.pdf | Identical | units/7_unit/01_lesson/lab.pdf | 58494 | 58494 |
| units/7_unit/02_lesson/lab.docx | Identical | units/7_unit/02_lesson/lab.docx | 24986 | 24986 |
| units/7_unit/02_lesson/lab.pdf | Identical | units/7_unit/02_lesson/lab.pdf | 55869 | 55869 |
| units/7_unit/03_lesson/lab.docx | Identical | units/7_unit/03_lesson/lab.docx | 25250 | 25250 |
| units/7_unit/03_lesson/lab.pdf | Identical | units/7_unit/03_lesson/lab.pdf | 62277 | 62277 |
| units/7_unit/04_lesson/lab.docx | Identical | units/7_unit/04_lesson/lab.docx | 25350 | 25350 |
| units/7_unit/04_lesson/lab.pdf | Identical | units/7_unit/04_lesson/lab.pdf | 85214 | 85214 |
| units/7_unit/05_lesson/project.docx | Modified | units/7_unit/05_lesson/project.docx | 33810 | 28824 |
| units/7_unit/05_lesson/project.pdf | Modified | units/7_unit/05_lesson/project.pdf | 241199 | 113515 |
| units/7_unit/05_lesson/projecta.docx | Relocated identical | _docs/lesson_plans/units/7_unit/05_lesson/alternate_project.docx; units/7_unit/05_lesson/alternate_project.docx | 25958 | 25958 |
| units/7_unit/05_lesson/projecta.pdf | Relocated identical | _docs/lesson_plans/units/7_unit/05_lesson/alternate_project.pdf; units/7_unit/05_lesson/alternate_project.pdf | 130354 | 130354 |
| units/7_unit/05_lesson/rubric.docx | Modified | units/7_unit/05_lesson/rubric.docx | 31690 | 30371 |
| units/7_unit/05_lesson/rubric.pdf | Modified | units/7_unit/05_lesson/rubric.pdf | 97387 | 82705 |
| units/7_unit/slidedecks/Intro Python 7.01 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/7_unit/slidedecks/Intro Python 7.01 TEALS.pptx | 1529755 | 1432754 |
| units/7_unit/slidedecks/Intro Python 7.02 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/7_unit/slidedecks/Intro Python 7.02 TEALS.pptx | 1508964 | 1440355 |
| units/7_unit/slidedecks/Intro Python 7.03 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/7_unit/slidedecks/Intro Python 7.03 TEALS.pptx | 1512609 | 1449920 |
| units/7_unit/slidedecks/Intro Python 7.04 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/7_unit/slidedecks/Intro Python 7.04 TEALS.pptx | 1506043 | 1458486 |
| units/7_unit/slidedecks/Intro Python 7.05 TEALS.pptx | Relocated modified | _docs/lesson_plans/units/7_unit/slidedecks/Intro Python 7.05 TEALS.pptx | 1457414 | 1465063 |
| units/8_unit/01_lesson/project_ideas.docx | Modified | units/8_unit/01_lesson/project_ideas.docx | 25977 | 27499 |
| units/8_unit/01_lesson/project_ideas.pdf | Modified | units/8_unit/01_lesson/project_ideas.pdf | 85716 | 87812 |
| units/8_unit/final_project_development_plan.docx | Identical | units/8_unit/final_project_development_plan.docx | 21277 | 21277 |
| units/8_unit/final_project_plan_organizer.docx | Identical | units/8_unit/final_project_plan_organizer.docx | 24391 | 24391 |
| units/8_unit/project.docx | Identical | units/8_unit/project.docx | 24998 | 24998 |
| units/8_unit/project.pdf | Identical | units/8_unit/project.pdf | 114429 | 114429 |
| units/8_unit/rubric.docx | Identical | units/8_unit/rubric.docx | 21976 | 21976 |
| units/8_unit/rubric.pdf | Identical | units/8_unit/rubric.pdf | 84000 | 84000 |
| units/supplemental/calculator_canada_project_spec.docx | No mapped match | — | 25515 | — |
| units/supplemental/calculator_canada_project_spec.pdf | No mapped match | — | 146774 | — |

## Limitations

Git blob hashes identify byte-identical files, not instructional quality or publication date. Binary Office/PDF contents were not retrieved in this pass. Current TEALS MakeCode Arcade is a distinct course, not an automatic replacement for this archived Python curriculum. Preserve the verified student website and editor while reviewing resources.
