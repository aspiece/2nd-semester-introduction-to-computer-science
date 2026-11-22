---
layout: minimal-home
title: "Lesson 7.03: Methods"
permalink: /student/lesson-7-03/
teacher_url: /docs/lesson_plans/units/7_unit/03_lesson/lesson.html
unit: 7
prev_url: /student/lesson-7-02/
prev_title: "7.02"
next_url: /student/lesson-7-04/
next_title: "7.04"
---
{% raw %}## What you will learn

* Define and identify: **method**, **`__str__`**, **`__add__`**, **operator overloading**
* Create a class with an `__init__` method
* Understand and use the `self` argument
* Instantiate a class with an argument

## Reading

* [Associated Reading - section 7.3]({% endraw %}{{ '/docs/readings.html#73' | relative_url }}{% raw %})

## Do Now

### In your Console

#### Type the following

```python
class Time(object):
  def __init__(self, hour, minute, second):
        self.hour = hour
        self.minute = minute
        self.second = second

time1 = Time(5, 32, 0)
time2 = Time(23, 11, 11)

print(time1)
print(time2)
```

### In your Notebook

#### Respond to the following

1. Based on what is output, how can you tell the difference between `time1` and `time2`?
2. What happens if you try to add `time1` add `time2`?

## Lab

### Instructions

* Finish writing the `__add__` method for the time class from the Do Now.
* Write a definition for a class named Kangaroo with the following methods:
  * An `__init__` method that initializes an attribute named `pouch_contents` to an empty list.
  * A method named `put_in_pouch` that takes an object of any type and adds it to `pouch_contents`.
  * A `__str__` method that returns a string representation of the Kangaroo object and the contents of the pouch.

#### Tips to give students

* This exercise is a cautionary tale about one of the most common, and difficult to find, errors in Python
* TypeError: Can't convert 'list' object to str implicitly
* Use the `str()` function to convert the list object to a string.
* Test your code by creating two Kangaroo objects
  * assign them to variables named `kanga` and `roo`
  * add `roo` to the contents of `kanga`’s pouch

### Extra Credit

Return to your Pet class from Lab 7.02. Research the `isinstance` function to write a method, `is_friend` that will take in another pet and return `True` if the two pets are friends, and `false` if they are not.

#### Rules

* If they are both dogs they are friends.
* If the instance is a dog and the other pet is a cat, they are friends.
* If the instance is a cat and the other is a dog they are not friends.
* If they are both cats they are not friends.

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="c" markdown="1">
**1. What does `print(time1)` show by default if the class has no `__str__` method?**

- The hour, minute, and second values
- An error message
- A generic description of the object, such as its class and memory location
- Nothing

<p class="why">Without <code>__str__</code>, Python cannot know how to describe your object nicely, so it prints a generic default.</p>
</div>

<div class="q" data-answer="b" markdown="1">
**2. What does defining `__add__` in a class let you do?**

- Add new attributes to every instance
- Use the `+` operator on instances of that class
- Make the class inherit from another
- Add methods after the class is created

<p class="why">This is operator overloading: <code>a + b</code> calls <code>a.__add__(b)</code>.</p>
</div>

<div class="q" data-answer="d" markdown="1">
**3. How is a method different from an ordinary function?**

- A method cannot take arguments
- A method always returns a string
- A method can only be called once
- A method is defined inside a class and is called on an instance, which is passed as `self`

<p class="why">Methods belong to a class and automatically receive the instance they are called on.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/03_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/03_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
