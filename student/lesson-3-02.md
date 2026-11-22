---
layout: minimal-home
title: "Lesson 3.02: User-Defined Functions"
permalink: /student/lesson-3-02/
teacher_url: /docs/lesson_plans/units/3_unit/02_lesson/lesson.html
unit: 3
prev_url: /student/lesson-3-01/
prev_title: "3.01"
next_url: /student/lesson-3-03/
next_title: "3.03"
---
{% raw %}## What you will learn

* Define and identify: **abstraction, def**
* Create functions

## Reading

* Associated Reading - section 3.2 of Book
* [Associated Readings 3.2]({% endraw %}{{ '/docs/readings.html#32' | relative_url }}{% raw %})

## Do Now

### In your Console

#### Type the following code

```python
def my_function():
  print("THIS IS MY FUNCTION!")
```

### In Your Notebook

#### Respond to the following

1. What does `my_function` do?
2. How would you call the function? Practice calling `my_function` and checking that it does what you expect it to.
3. How would you add arguments to `my_function`?

## Lab

### Lab Exercise 1

Create a function, `birthday_song`, that prints out the happy birthday song to whatever name is input as an argument. The contract should be:

  ```python
  # Name: birthday_song
  # Purpose: birthday_song prints out a personalized birthday song
  # Arguments: name, string
  # Returns: none
  def birthday_song(name):
     #your code goes here
  ```

### Lab Exercise 2

* Create a function that randomly picks 5 cards from a deck
* The cards can repeat

 Write out the contract for this function using the list.

```python
number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
```

#### Bonus

* Practice passing in lists as an argument to a function.
* What is different about passing in a list as an argument?
* Read about list aliasing in section 3.4 of the associated reading, and write down what is happening in this case.

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="d" markdown="1">
**1. What does the `def` keyword do?**

- Runs a function immediately
- Deletes a function
- Prints a message
- Defines a function without running its body yet

<p class="why"><code>def</code> creates the function; its body only runs when the function is called.</p>
</div>

<div class="q" data-answer="b" markdown="1">
**2. After defining `def my_function():`, how do you make its body run?**

- Type `my_function`
- Call it with `my_function()`
- Type `def my_function` again
- Import it

<p class="why">Parentheses after the name call the function.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**3. What is abstraction in programming?**

- Using a name for a set of steps so you can use it without thinking about the details
- Writing code with no comments
- Repeating the same code many times
- Making a variable global

<p class="why">A function hides the details behind a name, so you can reuse it and think at a higher level.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/3_unit/02_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/3_unit/02_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
