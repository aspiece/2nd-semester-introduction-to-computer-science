---
layout: minimal-home
title: "Lesson 2.01: Data Types & Casting"
permalink: /student/lesson-2-01/
teacher_url: /docs/lesson_plans/units/2_unit/01_lesson/lesson.html
unit: 2
prev_url: /student/lesson-1-06/
prev_title: "1.06"
next_url: /student/lesson-2-02/
next_title: "2.02"
---
{% raw %}## What you will learn

* Define and identify: **type, string, casting, floating point number (float), integer**
* Describe different representations of data in Python
* Convert from one data type to another data type

## Reading

* [Associated Readings 2.1]({% endraw %}{{ '/docs/readings.html#21' | relative_url }}{% raw %})

## Do Now

### Open up the console

#### Type the following code

```python
 x_stage1 = 123
 y_stage1 = 456

 x_stage2 = str(x_stage1)
 y_stage2 = str(y_stage1)

 print(x_stage2 + y_stage2)
```

### In your Notebook

#### Answer the following

1. What type are the variables `x_stage1` and `y_stage1`?
2. What type are the variables `x_stage2` and `y_stage2`?
3. How would you convert a string, `'100'` to an integer?

## Lab

### In your notebook

#### Predict what the following inputs will result in

 Once you have filled in the "prediction" column, check your answers in interactive mode and write the actual result.

| **Input** | **Prediction** | **Result** |
| --- | --- | --- |
| `float('1')`| | |
| `str(1 + '2')`| | |
| `str('2')`| | |
|`int('abc')`| | |
| `int(float('1.6'))`| | |
| `float(int(1.6))`| | |
| `str(float(1))`| | |

### In your Console

1. Create a program which will take in an input and print out that input divided by 2.
2. Alter one line of that program to return only whole numbers.

#### Bonus

Make your program have two modes: an integer mode and a float mode. Add another input to ask which mode the user wants to use. If the user is in integer mode print out integers, otherwise print out float. Feel free to research Python docs (This is a concept covered in Snap)

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="b" markdown="1">
**1. After `n = "5"`, what does `int(n) + 1` evaluate to?**

- `"51"`
- 6
- An error
- `"6"`

<p class="why">Casting with <code>int</code> turns the string into a number, so the addition gives the integer 6.</p>
</div>

<div class="q" data-answer="c" markdown="1">
**2. Why do you need `int()` or `float()` on a value returned by `input()` before doing math with it?**

- `input` always returns a float
- Math cannot be done in Python
- `input` always returns a string
- `input` returns nothing

<p class="why">The <code>input</code> function always gives back a string, so you cast it to a number before doing arithmetic.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**3. What is the main difference between an integer and a float?**

- A float can have a decimal part; an integer is a whole number
- An integer is text; a float is a number
- A float is always bigger than an integer
- There is no difference

<p class="why">Integers are whole numbers, while floats (floating point numbers) can hold fractional values.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/01_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/01_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
