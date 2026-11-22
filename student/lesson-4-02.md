---
layout: minimal-home
title: "Lesson 4.02: For Loops Using Range"
permalink: /student/lesson-4-02/
teacher_url: /docs/lesson_plans/units/4_unit/02_lesson/lesson.html
unit: 4
prev_url: /student/lesson-4-01/
prev_title: "4.01"
next_url: /student/lesson-4-03/
next_title: "4.03"
---
{% raw %}## What you will learn

* Define and identify: **range**
* Use the `range` and `len` function to to update lists via for loops

## Reading

* [Associated Reading - section 4.2 of Book]({% endraw %}{{ '/docs/readings.html#42' | relative_url }}{% raw %})

## Do Now

### 1. In your Console

#### Type the following code

```python
for i in range(0, 10):
    print(i)
```

### In your Notebook

#### Respond to the following

Write down what the range function does.

### 2. In your Console

#### Type the following

Use the `range` and `len` functions to make a for loop that loops through `a`.

```python
a = ['apples', 'oranges', 'pears', 'grapes']

len_a = len(a)
range(0, len(a))
```

### Continue In your Notebook

1. Write down what `range(0, len(a))` does.
2. What is the return value of the range function?

### 3. In your Console

Use the `range` and `len` functions to make a for loop. (Remember that for loops iterate over lists)

## Lab

### Part 1

Write a function `pluralize_words` that takes in a list of words and updates the values of the list
to make each one plural. It returns nothing. Making plurals in english has a number of special cases,
but for this lab we'll use a simple rule: if the word ends in a 'y' remove the 'y' and add 'ies';
otherwise add an 's'.

We'll exercise the function on a list of words.

1. Create the function contract for `pluralize_words`.
2. Provide a few examples that confirm `pluralize_words` works as expected:

    * Include examples with 'berry'
    * What if the list is empty?
    * What happens if a word ends in 's'?

#### Example 1

```python
# contract goes here
def pluralize_words(word_list):
    # your code goes here

word_list = ['apple', 'berry', 'melon']
print("Singular words: " + str(word_list))
pluralize_words(word_list)
print("No longer singular words: " + str(word_list))
    # more examples go here
```

##### Here is what it should look like when you run your code

```python
Singular words: ['apple', 'berry', 'melon']
No longer singular words: ['apples', 'berries', 'melons']
```

#### Hint

Remember that you can index into the string and get the length of a string. Use that to get the last letter of each word.

### Part 2

Create a function `my_reverse`, which will return a reversed string.

1. Create the function contract for `my_reverse`.
2. Provide a few examples to confirm that `my_reverse` works:

    * An empty string
    * A string of even length
    * A string of odd length greater than 1
    * A string of length 1

#### Example 2

```python
# contract goes here
def my_reverse(string_to_reverse):
    # your code goes here
reversed = my_reverse("apples")
print(reversed)
# examples go here
```

#### Here is what example 2 should look like when you run your code

```python
>>> python3 my_reverse_lab.py
selppa
```

#### Hint 2

To get the last element:`(len(my_list) -1) -  0`
To get the second to last element: `(len(my_list)-1 ) - 1`
To get the third to last element: `(len(my_list)-1) - 2`

#### Bonus

Create a function `reverse_strings_in_list`. This function will input a list of strings you want to reverse. The function will reverse the strings in the list by calling the `my_reverse` function in a loop.

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="c" markdown="1">
**1. What does `range(0, 4)` produce?**

- 1, 2, 3, 4
- 0, 1, 2, 3, 4
- 0, 1, 2, 3
- 4

<p class="why"><code>range</code> starts at the first number and stops before the second.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**2. A list `a` has 5 items. What values does `i` take in `for i in range(0, len(a)):`?**

- 0, 1, 2, 3, 4
- 1, 2, 3, 4, 5
- 0, 1, 2, 3, 4, 5
- Only 5

<p class="why"><code>len(a)</code> is 5, so <code>i</code> runs from 0 up to 4, the valid indexes.</p>
</div>

<div class="q" data-answer="d" markdown="1">
**3. Why loop over indexes with `range` and `len` when you want to update the items in a list?**

- Loops over items are not allowed
- It is the only way to print a list
- Index loops run backwards
- You can assign to `a[i]` to change the list itself, not just a copy of an item

<p class="why">Assigning to the loop variable of an item loop does not change the list, but assigning to an index does.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/02_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/02_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
