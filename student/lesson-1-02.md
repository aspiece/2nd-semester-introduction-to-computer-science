---
layout: minimal-home
title: "Lesson 1.02: Interactive Mode"
permalink: /student/lesson-1-02/
teacher_url: /docs/lesson_plans/units/1_unit/02_lesson/lesson.html
unit: 1
prev_url: /student/lesson-1-01/
prev_title: "1.01"
next_url: /student/lesson-1-03/
next_title: "1.03"
---
{% raw %}## What you will learn

* Define and identify: **interpreter, string, integer, float, value, errors, console, expression**
* Use the Python interpreter to evaluate simple math expressions
* Distinguish between an integer, float, and string

## Reading

* [Associated Reading - section 1.1]({% endraw %}{{ '/docs/readings.html#11' | relative_url }}{% raw %})

## Lab

### Part 1

Using the interpreter, type in the expressions below. Copy and paste the output into the output column. If the result is unexpected, note that in the third column.

#### Section 1

| |**Input** | &nbsp; &nbsp; **Output** &nbsp; &nbsp;|**Did it do something unexpected?**|
|-| ----| ------- | ----------- |
|a| `5 + 2 * 2` || |
|b| `2/3` || |
|c| `2.0 * 1.5`|| |
|d| `(2 + 3) * 10`|| |
|e| `5.0 // 2` || |
|f| `5.0 % 2` || | |

#### Section 2

||**Input** | &nbsp; &nbsp; **Output** &nbsp; &nbsp;|**Did it do something unexpected?**|
|-| ----| ------- | ----------- |
|a| `a` || |
|b|`'a'`|| | |

#### Section 3

||**Input** | &nbsp; &nbsp; **Output** &nbsp; &nbsp;|**Did it do something unexpected?**|
|-| ----| ------- | ----------- |
|a| `'a + b'`|| |
|b| `'a' + 'b'`||| |

#### Section 4

||**Input** | &nbsp; &nbsp; **Output** &nbsp; &nbsp;|**Did it do something unexpected?**|
|-| ----| ------- | ----------- |
|a| `'a' * 'b'` || |
|b| `'a' * 2` || | |

### Part 2

#### Before going to the IDE

1. For each item, predict the data type of the result and enter into the "String/Integer/Float" column.
2. Next, predict the value of the result for each item and enter into it into the "Prediction of Result" column.

||     **Expression**     | **String/Integer/Float** | **Prediction of Result** | **Interpreter Result** |
|-| :------------------: | :-----------------------: | :--------------------: | :-----------------: |
|a| `10 * 2`            | integer  |    20   |         20         |
|b| `.5 * 2`           |  |   |                   |
|c| `10/2`             |  |   |                   |
|d| `10%2`             |  |   |                   |
|e| `2 ** 3`           |  |   |                   |
|f| `(2+5)*3`          |  |   |                   |
|g| `2 + 5 * 3`        |  |   |                   |
|h| `'ab' + '12' + '3'`|  |   |                   |
|i| `x`                |  |   |                   |
|j| `"ab" + "cd"`      |  |   |                   |
|k| `'abc' * 2`        |  |   |                   |
|l| `'1'*2 + '2' * 3`  |  |   |                   |
|m| `1 * 2 + '3' * 2`  |  |   |                   |
|n| `'A' ** 2`         |  |   |                   |
|o| `'bc' % 2`         |  |   |                   |
|p| `'bc' / 2`         |  |   |                   |

### Now go to the IDE

Use the interpreter to evaluate the expressions, write down results in the "Interpreter Result" column.

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="b" markdown="1">
**1. Which of these is a string?**

- `7`
- `'7'`
- `7.0`
- `7 + 0`

<p class="why">Quotes make a value a string, so <code>'7'</code> is text, while <code>7</code> is an integer and <code>7.0</code> is a float.</p>
</div>

<div class="q" data-answer="d" markdown="1">
**2. What does `'ha' * 3` give you?**

- `'ha' + '3'`
- `'ha3'`
- An error
- `'hahaha'`

<p class="why">Multiplying a string by an integer repeats it, so <code>'ha' * 3</code> is <code>'hahaha'</code>.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**3. What is the value of `4 + 2 * 3`?**

- 10
- 18
- 9
- 24

<p class="why">Multiplication happens before addition, so the result is 4 + 6 = 10.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/1_unit/02_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/1_unit/02_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
