---
layout: minimal-home
title: "Lesson 7.04: Inheritance"
permalink: /student/lesson-7-04/
teacher_url: /docs/lesson_plans/units/7_unit/04_lesson/lesson.html
unit: 7
prev_url: /student/lesson-7-03/
prev_title: "7.03"
next_url: /student/lesson-7-05/
next_title: "7.05"
---
{% raw %}## What you will learn

* Define and identify: **inheritance**,  **parent class**, **child class**
* Create a class that inherits from anther class
* Overwrite methods of parent class in a child class

## Reading

* [Associated Reading - section 7.4]({% endraw %}{{ '/docs/readings.html#74' | relative_url }}{% raw %})

## Do Now

### In your Console

#### Type the following

```python

class Pet(object):
  def __init__(self, name):
  self.name = name
  def make_noise(self):
  print("Noise!")
  return

class Dog(Pet)

# A specific type of Pet!

dog1 = Dog()
dog1.make_noise()
```

### In your Notebook

#### Respond to the following

1. What is the output when you run this code?
2. Rewrite the code to resolve the error and make this work properly
3. What happens when you call method `make_noise`?

## Lab

### Overview

Given the following [example], practice using inheritance to create specific child classes for different types of Pokemon.

#### Create the three child classes below

##### 1. Water Type

* When attacking a fire type, the attack is more effective
* When attacking a grass type the effect is less effective
* When `growl` is called print out "Splish Splosh"

##### 2. Fire Type

* When attacking a water type, the attack is less effective
* When attacking a grass type the effect is more effective
* When `growl` is called print out "Fire Fire"

##### 3. Grass Type

* When attacking a water type, the attack is more effective
* When attacking a fire type the effect is less effective
* When `growl` is called print out "Cheep Cheep"

**Note**: In order to check what type an object is you can use `isinstance` which takes in an object, a class and returns a boolean if the object is the type of the inputted class.

#### Example Code

```python
my_pet = Pet()
isinstance(my_pet, Pet) # returns true
isinstance(my_pet, Dog) # returns false
```

[example]: {% endraw %}{{ '/docs/lesson_plans/units/7_unit/04_lesson/example.py' | relative_url }}{% raw %}

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="a" markdown="1">
**1. In `class Dog(Pet):`, which class is the parent?**

- Pet
- Dog
- Both of them
- Neither, `Dog` is a function

<p class="why">The class in parentheses is the parent, and <code>Dog</code> is the child that inherits from it.</p>
</div>

<div class="q" data-answer="c" markdown="1">
**2. If a child class does not define `make_noise` but its parent does, what happens when you call `make_noise` on a child instance?**

- An error, because the method is missing
- Nothing happens
- It runs the parent's version
- Python asks you to define it

<p class="why">A child inherits all methods of its parent unless it overrides them.</p>
</div>

<div class="q" data-answer="b" markdown="1">
**3. What does it mean to override a method in a child class?**

- Delete the method from the parent class
- Define a method with the same name in the child so its version is used for child instances
- Call the method twice
- Copy the parent class into a new file

<p class="why">The child's own definition takes priority over the parent's for instances of the child.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/04_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/04_lesson/lab.docx' | relative_url }}{% raw %})
* [Starter code: example.py]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/04_lesson/example.py' | relative_url }}{% raw %})
{% endraw %}
