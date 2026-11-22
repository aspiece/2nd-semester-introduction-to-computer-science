---
layout: minimal-home
title: "Lesson 7.01: User-Defined Types (Classes)"
permalink: /student/lesson-7-01/
teacher_url: /docs/lesson_plans/units/7_unit/01_lesson/lesson.html
unit: 7
prev_url: /student/lesson-6-05/
prev_title: "6.05"
next_url: /student/lesson-7-02/
next_title: "7.02"
---
{% raw %}## What you will learn

* Define and identify: **class**, **instance**, **object**, **attributes**
* Create a class and instantiate
* Add attributes to an instance
* Manipulate instances and attributes through a function

## Reading

* [Associated Reading - section 7.1]({% endraw %}{{ '/docs/readings.html#71' | relative_url }}{% raw %})

## Do Now

### Read through the following code

```python
my_pet_1 = 'pet'
my_pet_1_type = 'cat'
my_pet_1_noise = 'meow'
my_pet_1_full_name = 'Snuffles McGruff'

my_pet_2 = 'pet'
my_pet_2_type = 'cat'
my_pet_2_noise = 'meow'
my_pet_2_full_name = 'Snowpounce Flury'

my_pet_3 = 'pet'
my_pet_3_type = 'cat'
my_pet_3_noise = 'meow'
my_pet_3_full_name = 'Snickers Snorkel'

my_pets = [my_pet_1, my_pet_2, my_pet_3]
for pet in my_pets:
    ## print full name of each pet

```

### In your Notebook

#### Respond to the following

1. In the above code, write a quick description of how you would print out each of the pet's names.
2. Write down some other data structures you could use to make this easier.

## Example

### Read the following code

```python

class Pet(object):
    """Represents a pet"""

my_pet_1 = Pet()
my_pet_1.type = 'cat'
my_pet_1.noise = 'meow'
my_pet_1.full_name = 'Snuffles McGruff'

my_pet_2 = Pet()
my_pet_2.type = 'cat'
my_pet_2.noise = 'meow'
my_pet_2.full_name = 'Snowpounce Flury'

my_pet_3 = Pet()
my_pet_3.type = 'cat'
my_pet_3.noise = 'meow'
my_pet_3.full_name = 'Snickers Snorkel'

my_pets = [my_pet_1, my_pet_2, my_pet_3]
for pet in my_pets:
    print(pet.full_name)
```

## Lab

In this lab we will create a class that will represent colors and build a function to combine two colors.

### Background

RGB is a way of storing color data. R stands for red, G stands for green, and B stands for blue. Each color is given a value from 0 to 255.

You can use this tool to see what different colors are:[http://www.rapidtables.com/web/color/RGB_Color.htm](http://www.rapidtables.com/web/color/RGB_Color.htm)

   ![https://media.24ways.org/2009/01/f1.gif](https://media.24ways.org/2009/01/f1.gif)

### Lab

1. Create a class, `Color`.
2. Instantiate at least 3 colors.
3. Add attributes of r, g, and b to those instances.
4. Create a function, `add_color`, which takes in two colors and returns a color that is the average of the two reds, greens, and blues.

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="c" markdown="1">
**1. What is the relationship between a class and an instance?**

- An instance is a blueprint, and a class is one thing built from it
- They are two names for the same thing
- A class is a blueprint, and an instance is one object created from it

<p class="why">A class describes the type, and each call like <code>Pet()</code> creates a separate instance of it.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**2. After `my_pet_1 = Pet()` and `my_pet_1.type = 'cat'`, what is `type`?**

- An attribute of the instance my_pet_1
- A new class
- A function that belongs to Pet
- A variable shared by every Pet

<p class="why">Dot notation on an instance stores an attribute on that one object only.</p>
</div>

<div class="q" data-answer="d" markdown="1">
**3. Why is storing pets as instances of a class better than separate variables like `my_pet_1_type`?**

- Python programs cannot use more than three variables
- It makes the program run faster
- Classes remove the need for loops
- Each pet's data is bundled in one object, so a loop can handle every pet the same way

<p class="why">Grouping related data in one object lets you put objects in a list and write <code>pet.full_name</code> in a loop.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/01_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/01_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
