---
layout: minimal-home
title: "Lesson 4.03: Nested For Loops"
permalink: /student/lesson-4-03/
teacher_url: /docs/lesson_plans/units/4_unit/03_lesson/lesson.html
unit: 4
prev_url: /student/lesson-4-02/
prev_title: "4.02"
next_url: /student/lesson-4-04/
next_title: "4.04"
---
{% raw %}## What you will learn

* Define and identify: **nested for loops**, **stack trace**
* Use nested for loops via a function and a for loop
* Use nested for loops via two loops nested
* Use a stack trace to understand and demonstrate the flow of nested for loops

## Do Now

### Type in your Console

```python
def print_6_stars():
my_string = ''
for i in range(0, 6):
    my_string += ' *'
print(my_string)
```

### In your Notebook

1. Write down what the output of the function `print_6_stars` is.
2. Write a function  `print_star_square` that calls `print_6_stars` in a loop to produce the following output.

    ```python
    >>>python3 print_stars.py
    * * * * * *
    * * * * * *
    * * * * * *
    * * * * * *
    * * * * * *
    * * * * * *
    ```

3. Rewrite the function `print_star_square` without using `print_6_stars`.
    * Note that there are two ways to get the above output, so just try doing both!

## Lab

### Instructions

In this lab we will be drawing images using nested for loops.

For each of the following problems, you will write a function that will draw the desired output. You may use an extra function if you find it helpful.

1. Write a function, `draw_7`, to draw the 7x7 square (shown below)

    ```python
    * * * * * * *
    * * * * * * *
    * * * * * * *
    * * * * * * *
    * * * * * * *
    * * * * * * *
    * * * * * * *
    ```

2. Write a function `stars_and_stripes`, that will draw a 3 sets of rows. 1st a row of 7 stars followed by a row of 7 dashes (shown below)

    ```python
    * * * * * * *
    - - - - - - -
    * * * * * * *
    - - - - - - -
    * * * * * * *
    - - - - - - -
    ```

3. Write a function, `increasing_triangle` that will print out following:

    ```python
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
    1 2 3 4 5 6
    1 2 3 4 5 6 7
    ```

4. Write a function, `vertical_stars_and_stripes` that will print out the following:

    ```python
    - * - * - * -
    - * - * - * -
    - * - * - * -
    - * - * - * -
    - * - * - * -
    - * - * - * -
    - * - * - * -
    ```

### Bonus

1. Write a function that will print a border around a 7x7 square (shown below)

    ```python
    * * * * * * * *
    * - - - - - - *
    * - - - - - - *
    * - - - - - - *
    * - - - - - - *
    * - - - - - - *
    * - - - - - - *
    * - - - - - - *
    * * * * * * * *
    ```

2. Write a function that will print the following `balanced_triangle`.

    ```python
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
    1 2 3 4 5 6
    1 2 3 4 5 6 7
    1 2 3 4 5 6
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
    ```

3. Write a function that will print the following triangle.

    ```python
       *
      ***
     *****
    ```

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="b" markdown="1">
**1. How many times is `print("*")` run? `for i in range(3):` containing `for j in range(2):` containing `print("*")`**

- 5
- 6
- 3
- 2

<p class="why">The inner loop runs 2 times for each of the 3 outer iterations, so 3 × 2 = 6.</p>
</div>

<div class="q" data-answer="d" markdown="1">
**2. In nested `for` loops, how often does the inner loop run?**

- Once in total
- Only after the outer loop finishes
- Never
- All of its iterations, each time the outer loop moves forward one step

<p class="why">The inner loop starts over and completes fully for every outer iteration.</p>
</div>

<div class="q" data-answer="c" markdown="1">
**3. What can a stack trace of nested loops show you?**

- How fast the loops run
- The final output only
- The order in which loop variables change and code runs
- Which variables are global

<p class="why">Tracing steps through the flow so you can see how outer and inner variables change.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/03_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/03_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
