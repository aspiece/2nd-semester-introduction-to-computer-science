---
layout: minimal-home
title: "Lesson 6.03: Dictionaries of Lists"
permalink: /student/lesson-6-03/
teacher_url: /docs/lesson_plans/units/6_unit/03_lesson/lesson.html
unit: 6
prev_url: /student/lesson-6-02/
prev_title: "6.02"
next_url: /student/lesson-6-04/
next_title: "6.04"
---
{% raw %}## What you will learn

* Create dictionaries with keys and values of different types
* Update, append, or remove list values in a dictionary

## Reading

* [Associated Reading - section 6.3]({% endraw %}{{ '/docs/readings.html#63' | relative_url }}{% raw %})

## Do Now

### 1. In your Console

#### Type the following

```python
weekend_dates = {
  'April 2018': [7, 8, 14, 15, 21, 22, 28, 29],
  'May 2018': [5, 6, 12, 13, 19, 20, 26, 27]
}

print(weekend_dates['April 2018'])
```

### In your Notebook

#### Respond to the following

* What type is `weekend_dates`?
* What type the are keys?
* What type the are values?

### 2. In your Console

#### Challenge yourself with the following

* The 2018 Memorial Day holiday is observed on Monday, May 28, which makes it a long-weekend day.
* Write a new line of code that adds May 28th to the list associated with `'May 2018'`
* So that its value becomes `[5, 6, 12, 13, 19, 20, 26, 27, 28]`.

## Lab

In this lab your job is to create a week-long to-do list using a
Python dictionary. Each key in the dictionary is a day of the
week. Each associated value is a list of items to do that day.

The program repeatedly asks the user
what action they wish to take ( **add** or **get**).

* If the user enters **get**, the program asks for a day of the week, and then returns the to-do list for that day.
* If the user enters **add**, the program asks for a day of the week, then asks for  a new item, then adds it to the specified list.
* If a user tries to add an item that already exists on the list for that day, the program rejects the request.
* At the start of the program the dictionary should be totally empty (containing no keys and no values).

### Example

Here's an example. The program output is shown in bold text, the user
input in regular text.

```python
>>>python3 daily_to_do_list.py
What would you like to do ('add' or 'get')?
add
What day?
Friday
What would you like to add to Fridays to-do list?
practice clarinet
What would you like to do ('add' or 'get')?
get
What day?
Friday
You have to practice clarinet.
What would you like to do('add' or 'get')?
```

### Bonus

It's a bit tedious for the user to have to type in three different lines to add an item to a to-do list. Use `split()` to allow the user
to input `add Friday watch tv and relax`.

Create a variation of the program that doesn't allow any duplicates across any of the days. Make sure when you add a to-do item that it doesn't exist in the to-do lists of any of the days before adding.

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="b" markdown="1">
**1. In `scores = {'ann': [90, 85], 'bo': [70]}`, what type are the values?**

- Strings
- Lists
- Integers
- Dictionaries

<p class="why">Each key maps to a list, and dictionary values can be any type.</p>
</div>

<div class="q" data-answer="c" markdown="1">
**2. Which line adds 100 to Bo's list of scores?**

- `scores['bo'] = 100`
- `scores.append(100)`
- `scores['bo'].append(100)`
- `scores[100] = 'bo'`

<p class="why">Looking up <code>scores['bo']</code> gives the list, and <code>append</code> adds an item to that list.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**3. What does `scores['bo'] = 100` do to the list that was stored for `'bo'`?**

- It replaces the whole list with the number 100
- It adds 100 to the end of the list
- It causes an error
- It removes only the first item

<p class="why">Assigning to a key overwrites the old value entirely, so the list is lost.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/6_unit/03_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/6_unit/03_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
