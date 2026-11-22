---
layout: minimal-home
title: "Lesson 2.02: Booleans & Expressions"
permalink: /student/lesson-2-02/
teacher_url: /docs/lesson_plans/units/2_unit/02_lesson/lesson.html
unit: 2
prev_url: /student/lesson-2-01/
prev_title: "2.01"
next_url: /student/lesson-2-03/
next_title: "2.03"
---
{% raw %}## What you will learn

* Define and identify: **boolean, expression, composition, True, False**
* Evaluate a boolean expression
* Compose boolean expressions using `and`, `or`, `not`, `<`, `>`, and `==`

## Reading

* [Associated Readings 2.2]({% endraw %}{{ '/docs/readings.html#22' | relative_url }}{% raw %})

## Do Now

### Part 1

Open up the console. Type each line of the following code into the interactive editor:

```python
 >>> 5 < 3
 >>> 5 > 3
 >>> type(5 < 3)
 >>> type(5 > 3)
 >>> my_favorite_animal = "cats"
 >>> user_favorite_animal = input("What is your favorite animal? ")
 >>> my_favorite_animal == user_favorite_animal
 ```

#### In your Notebook, answer the following

1. What does `5 < 3` evaluate to?  
2. What is the type of `5 < 3`? What does that stand for (should be familiar from Snap!)?
3. What is the difference between `==` and `=` ?
4. What data type do you think `my_favorite_animal == user_favorite_animal` is?

### Part 2

Open up the console. Type the following code into the interactive editor.

```Python
 >>> months_with_driving_permit = 6
 >>> age = 16
 >>> can_get_license = months_with_driving_permit >= 6 and age >= 16
 >>> print(can_get_license)
```

#### In your Notebook, add this to your notes in your Notebook

1. What does `and` do here? What type do you think `can_get_license` is?
2. Update the code to fit the new driving law: If you are over the age of 18 you don't need to have a permit

### Part 3

Open up the console. Type the following code into the interactive editor.

```Python
>>> animal = 'mouse'
>>> animal == 'cat' or 'dog'
```

#### In your Notebook, continue to your answers in your Notebook to the following

1. What does = and == do here?
2. What is the difference between the to statements?

### Part 4

Open up the console. Type the following code into the interactive editor.

```Python
>>> animal = 'mouse'
>>> animal == 'cat' or animal == 'dog'
```

#### In your Notebook, continue your notes in your Notebook

1. What does = and == do here?
2. What is the difference between the to statements here and Part 3 statements?

## Lab

### In your Notebook

Predict if each of the following examples will produce a `True` or `False` output. Check your answers in interactive mode.

#### Example 1

```python
    >>> a = 100
    >>> b = "science"
    >>> a > 75 and b == "science"
```

| **Predicted Output** | **Actual Output** |
| --- | --- |
| <br> | <br>   |

#### Example 2

```python
    >>> a = 100
    >>> b = "science"
    >>> a > 75 and b != "science"
```

| **Predicted Output** | **Actual Output** |
| --- | --- |
|<br> |<br> |

#### Example 3

```python
    >>> a = 100
    >>> b = "science"
    >>> a > 75 or b != "science"
```

| **Predicted Output** | **Actual Output** |
| --- | --- |
|<br> |<br> |

#### Example 4

```python
    >>> a = 100
    >>> b = "science"
    >>> c = True
    >>> not c and a > 75 and b == "science"
```

| **Predicted Output** | **Actual Output** |
| --- | --- |
|<br> |<br> |

### In your Console

#### Complete the following coding challenge

1. Create a "Can I be President?" program, which determines if the user meets the minimum requirements for becoming the President of the United States. Have the user input the information needed.

    **The minimum requirements to be president of the United States are:**

    * Older than 35
    * Resident of US for 14 Years
    * Natural born citizen
    * Print `True` if the person could be president and `False` if they can't be president.

2. Create a "I can't be President?" program. Print `True` if the user cannot be President and `False` if they can be President.

3. Create a "Can I ride the roller coaster?" program. A roller coaster has the rule that a rider has to be over the height of 50 inches. Because of a legal loophole, if you are over the age of 18 you can ride regardless of your height. If you are allowed to ride, the coaster costs 4 quarters (although the operator accepts tips so more money is appreciated).

    * Also, the theme park sells frequent rider passes: with a frequent rider pass the roller coaster costs only 2 quarters. Ask the user how tall they are in inches, their age, how many quarters they have, and if they have a frequent rider pass. Print `True` if the person can ride and `False` if they can't.

### Bonus

#### Are the following expressions equivalent? Research DeMorgan's Laws and write why you think they are the same or why they are not the same

`not(x or y) == not x and not y`

`not(x and y) == not x or not y`

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="d" markdown="1">
**1. What is the difference between `=` and `==`?**

- They mean the same thing
- `=` compares two values; `==` stores a value
- `==` stores a value in a variable; `=` is only used in strings
- `=` stores a value in a variable; `==` compares two values

<p class="why">A single <code>=</code> assigns a value, while <code>==</code> asks whether two values are equal and gives a boolean.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**2. If `x = 8`, what does `x > 3 and x < 6` evaluate to?**

- `False`
- `True`
- `8`
- An error

<p class="why">With <code>and</code>, both sides must be true, and <code>x &lt; 6</code> is false, so the whole expression is <code>False</code>.</p>
</div>

<div class="q" data-answer="c" markdown="1">
**3. What is the value of `not (4 > 9)`?**

- `False`
- `4`
- `True`
- `9`

<p class="why">The expression <code>4 &gt; 9</code> is <code>False</code>, and <code>not</code> flips it to <code>True</code>.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/02_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/02_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
