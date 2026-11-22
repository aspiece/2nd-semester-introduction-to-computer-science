---
layout: minimal-home
title: "Lesson 4.01: Looping Basics"
permalink: /student/lesson-4-01/
teacher_url: /docs/lesson_plans/units/4_unit/01_lesson/lesson.html
unit: 4
prev_url: /student/lesson-3-05/
prev_title: "3.05"
next_url: /student/lesson-4-02/
next_title: "4.02"
---
{% raw %}## What you will learn

* Define and identify: **for loop**, **item**, **iteration**, **scope**
* Recall looping in Snap! and reapply the concept in Python
* Loop through (traverse) the items in a list
* Be aware of the scope of variables during iteration

## Reading

* [Associated Reading - section 4.1]({% endraw %}{{ '/docs/readings.html#41' | relative_url }}{% raw %})

## Do Now

### 1. In your Console

#### Type the following Code

```python
 single_fruit = ['apple', 'banana', 'watermelon', 'grape']
 multi_fruit = []
 multi_fruit.append(single_fruit[0] + 's')
 multi_fruit.append(single_fruit[1] + 's')
 multi_fruit.append(single_fruit[2] + 's')
 multi_fruit.append(single_fruit[3] + 's')
 print(multi_fruit)
```

### In your Notebook

#### Respond to the following

Briefly write down what happened. What would happen if you added 100 items to the list `single_fruit`? Write down how you would update `multi_fruit`.

### 2. In your Console

#### Type the following

```python
 list_of_numbers = [3, 5, 10, 23]
 for num in list_of_numbers:
   print("num is " + str(num))
```

### Continue in your Notebook

#### Responses to the following

Briefly write down what happened. How would this change if you added 100 items to `list_of_numbers`?

### 3. In your Console

### Rewrite the code from part 1 using knowledge from part 2

## Lab

### Remove the Vowels

Create a function, `de_vowel`, which will take a string as input and return a copy of that string with all the vowels removed. Otherwise, the string should be the same.

1. Create the function contract for `de_vowel`.
2. Write `de_vowel` using a for loop
3. Provide a few examples that confirm de_vowel works as expected:

    * What if the string is all vowels?
    * What if there are no vowels?
    * What if there is a mix of vowels and non-vowels and spaces?

#### Example

Example of the file:

```python
# contract goes here
def de_vowel(a_string):
    # your code goes here
no_vowels = de_vowel("This sentence has no vowels")
print(no_vowels)
    # examples go here
```

Example output:

```python
>>> python3 de_vowel_lab.py
This sntnc hs n vwls
```

#### Bonus

Use a counter (variable you define outside of a loop to keep track of a value inside a loop) to create a function `count_vowels`.

`count_vowels` takes in a string and returns an int representing the number of vowels in the string.

### SNAP Challenge – 10 Cats Drinking Milk from a Saucer

Create the following program in Python.

 ![Number of Cats]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/01_lesson/NestedLoops%20-%20NumOfCats%20-%20Code.png' | relative_url }}{% raw %})

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="b" markdown="1">
**1. What does this print? `for num in [3, 5, 10]:` then `print(num)` inside the loop.**

- Only the last number
- Each number on its own line, one per iteration
- The whole list once
- Nothing

<p class="why">The loop body runs once for each item, with <code>num</code> set to that item.</p>
</div>

<div class="q" data-answer="d" markdown="1">
**2. In `for item in my_list:`, what is `item`?**

- The length of the list
- The index of the current position
- A copy of the whole list
- A variable holding the current element on each iteration

<p class="why">The loop variable takes each element's value in turn.</p>
</div>

<div class="q" data-answer="b" markdown="1">
**3. Why is a `for` loop better than writing a separate line for each list element?**

- It uses less memory for every list
- It works the same no matter how many items the list has
- It changes the list order
- It avoids needing variables

<p class="why">A loop adapts to any list size without rewriting the code.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/01_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/01_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
