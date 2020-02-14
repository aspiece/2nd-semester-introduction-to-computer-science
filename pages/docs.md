---
layout: page
title: Documentation
permalink: /docs/
---

# Documentation

# 2nd Semester - Introduction To Computer Science

A 2nd semester follow-up to the [TEALS Intro CS course](https://tealsk12.gitbook.io/intro-cs/)

* GitHub: https://github.com/TEALSK12/2nd-semester-introduction-to-computer-science
* GitBook: https://tealsk12.gitbooks.io/2nd-semester-introduction-to-computer-science/content/

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


<div class="section-index">
    <hr class="panel-line">
    {% for post in site.docs  %}        
    <div class="entry">
    <h5><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h5>
    <p>{{ post.description }}</p>
    </div>{% endfor %}
</div>
