---
layout: minimal-home
title: "Lesson 2.04: Lists"
permalink: /student/lesson-2-04/
teacher_url: /docs/lesson_plans/units/2_unit/04_lesson/lesson.html
unit: 2
prev_url: /student/lesson-2-03/
prev_title: "2.03"
next_url: /student/lesson-2-05/
next_title: "2.05"
---
{% raw %}## What you will learn

* Define and identify: **list, item, index, integer**
* Be able to access items from a list using the index
* Create lists of different types
* Use the length function

## Reading

* [Associated Readings 2.4]({% endraw %}{{ '/docs/readings.html#24' | relative_url }}{% raw %})

## Do Now

### 1. In your console

#### Type in the following

```python
 a_list = ['a', 'b', 'c', 'd', 'e']
 print(len(a_list))

```

### In your Notebook

#### Answer the following

1. What type do you think a_list is? (Hint: look at the name of the variable)
2. What does `len` do?
3. Brainstorm how you would print the first element from `a_list`?

### 2. In your Console

#### Type the following

```python
 a_list = ['a', 'b', 'c', 'd', 'e']
 print(a_list[0])
 print(a_list[1])
 print(a_list[2])
 print(a_list[3])
 print(a_list[4])
 print(a_list[5])
 print(a_list[6])
```

### Continue In your Notebook

Explain what happens in the program

## Lab

### 1. In your notebook

For each example below, predict what will be printed. Next, run the program and confirm what was output.

#### Example 1

```python
    a = ['a', 'b', 'c', 'd', 'e']
    print(a[0])
    print(a[3])
```

#### Example 2

```python
    a = ['a', 'b', 'c', 'd', 'e']
    print(a[len(a) - 3])
```

#### Example 3

```python
    a = ['a', 'b', 'c', 'd', 'e']
    print(a[len(a) - 6])
```

#### Example 4

```python
    a = ['a', 'b', 'c', 'd', 'e']
    a[3] = 'haha'
    print(a)
```

### 2. Create this game again using lists and indexes. Updated rules below

* Declare 10 prizes (prize0, prize1, prize2 at the top of your file), but store them all in a list.
* User picks a number.
* Print prize associated with the door user picked.

### 3. Create a quiz

Create a food quiz using lists and indexes.

1. List of 6 different foods
2. Ask the user 8 vague questions to find out what their favorite food it out of the list
3. Update the score and print their top 2 favorite foods

Hint: google how to find the biggest number in a list python

[Starter code here]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/04_lesson/Starter_food_chooser.py' | relative_url }}{% raw %})

### Bonus

Research nested lists and work through the following:

#### Bonus Example 1

```python
a = ['a', 'b', 'c', ['d', 'e']]
print(len(a))
```

#### Bonus Example 2

```python
a = ['a', 'b', 'c', ['d', 'e']]
b = a[3]
print(b)
```

#### Bonus - In your Notebook

How would you access 'd' from the list `a`?

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="c" markdown="1">
**1. If `pets = ['cat', 'dog', 'fish']`, what is `pets[1]`?**

- `'cat'`
- `'fish'`
- `'dog'`
- An error

<p class="why">List indexes start at 0, so index 1 is the second item.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**2. What happens when you run `print(pets[3])` with `pets = ['cat', 'dog', 'fish']`?**

- An error, because index 3 is out of range
- It prints `'fish'`
- It prints nothing
- It prints `3`

<p class="why">The list has three items with indexes 0 to 2, so index 3 does not exist.</p>
</div>

<div class="q" data-answer="b" markdown="1">
**3. What does `len(pets)` return for `pets = ['cat', 'dog', 'fish']`?**

- 2
- 3
- 4
- `'fish'`

<p class="why">The <code>len</code> function returns how many items are in the list, and the last valid index is one less than that.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/04_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/04_lesson/lab.docx' | relative_url }}{% raw %})
* [Starter code: Starter_food_chooser.py]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/04_lesson/Starter_food_chooser.py' | relative_url }}{% raw %})
{% endraw %}
