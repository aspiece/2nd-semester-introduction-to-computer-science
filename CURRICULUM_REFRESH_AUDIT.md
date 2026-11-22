# TEALS curriculum refresh audit — 2026-11-22

## Scope and preservation
This is an inventory and planning document, not a change to the working curriculum. Preserve the working clean student URLs, interactive quizzes, browser Python editor, and the existing lesson downloads. Do not overwrite changed files without reviewing their contents.

## Source of record
- Archived Python second-semester repository: https://github.com/TEALSK12/2nd-semester-introduction-to-computer-science
- Archived repository last pushed: 2025-02-28. It is archived and not maintained.
- Current fork: https://github.com/aspiece/2nd-semester-introduction-to-computer-science
- Current introductory alternative: https://arcade.makecode.com/courses/downloading-materials (MakeCode Arcade; educator verification may be required; not a drop-in replacement for the Python course).

## Git tree inventory (upstream versus fork)
Original repository contains 364 .docx/.pdf/.pptx files (150 DOCX, 136 PDF, 78 PPTX).
- 70 files: identical blob hash at identical path
- 73 files: differing blob hash at identical path; review before replacing
- 221 files: no file at identical path; inspect renamed/reorganized copies before treating as missing

Original files by location:
- units/: 173
- docs/: 189 (largely generated/legacy published copies)
- projects/: 1
- repository root: 1

## Priority review
1. Preserve a dated upstream snapshot separately from the live site, including source paths and Git commit identity.
2. Compare changed lesson handouts, project briefs, rubrics, and slide decks by content, not only file hash.
3. Map legacy docs/ and units/ paths to the fork's _docs/ and units/ paths, deduplicating generated copies.
4. Verify every download referenced from the 43 clean-URL student lessons, including actual HTTP responses and file contents.
5. Check dated or deprecated tool instructions (Replit, Trinket, Cloud9, older IDE onboarding), Python versions, broken external links, and school-approved tool/privacy requirements.
6. Review lesson objectives, standards mapping, accessibility, assessment quality, pacing, and classroom differentiation.
7. Keep the existing eight-unit Python scope unless an instructional redesign is explicitly approved. Treat MakeCode Arcade as a distinct curriculum rather than an automatic update.
8. Attribute TEALS and review the license of every redistributed resource; do not assume all files have the same license.

## Constraints and status
- This inventory compares Git object IDs and paths only; it does not establish which changed file is pedagogically newer.
- Archived public TEALS materials are not a continuously updated 2026 curriculum.
- Protected educator materials from newer TEALS offerings must be obtained through authorized educator access.
- No downloaded binary files have been replaced as part of this audit.
