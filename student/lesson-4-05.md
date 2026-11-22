---
layout: minimal-home
title: "Lesson 4.05: Debugging and Quiz"
permalink: /student/lesson-4-05/
teacher_url: /docs/lesson_plans/units/4_unit/05_lesson/lesson.html
unit: 4
prev_url: /student/lesson-4-04/
prev_title: "4.04"
next_url: /student/lesson-4-06/
next_title: "4.06"
---
{% raw %}## What you will learn

* Read and understand longer programs involving loops
* Demonstrate their knowledge of looping, lists, and nested loops/lists
* Debug programs involving for loops and lists

## Lab

### 1. Read through the following code:

```python
def my_looping_function(list): 
    for i in range(1, len(list)+1): 
        print(list[i])

basic_list = [1, 2, 3, 4, 5, 6]
my_looping_function(basic_list)

```

### In your Notebook

#### Write down any bugs that you see in the program

### 2. Read through the following code

```python
def my_nested_looping_function(a_list):
for i in range(0, len(a_list)):
  value = a_list[a]
for j in range(0, i):
value += j
print(value)

basic_list = [1, 2, 3, 4]
my_nested_looping_function(basic_list)
```

### Cointinue in your Notebook

#### Write down any bugs that you see in the program.

### 3. In your Console

Type and fix the two above programs

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="c" markdown="1">
**1. A list has 4 items. What happens if your code uses index 4 on it?**

- It returns the last item
- It returns `None`
- An `IndexError`, because valid indexes are 0 through 3
- It returns 0

<p class="why">Indexes start at 0, so a 4-item list has no index 4.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**2. In Python, how does the computer know which lines belong inside a `for` loop?**

- They are indented under the `for` line
- They are surrounded by quotes
- They come after a blank line
- They are numbered

<p class="why">Indentation marks the body of the loop; wrong indentation is a common bug.</p>
</div>

<div class="q" data-answer="d" markdown="1">
**3. What is a good way to start debugging a loop that gives a wrong result?**

- Delete the loop
- Run it on a bigger list
- Add more loops
- Trace it by hand with a small list, tracking each variable per iteration

<p class="why">Stepping through with a tiny example reveals where the behavior differs from what you expect.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/05_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/05_lesson/lab.docx' | relative_url }}{% raw %})
* [Starter code: longer_coding_sample.py]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/05_lesson/longer_coding_sample.py' | relative_url }}{% raw %})
{% endraw %}
