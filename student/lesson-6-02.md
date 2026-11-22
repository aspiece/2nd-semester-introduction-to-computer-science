---
layout: minimal-home
title: "Lesson 6.02: Dictionaries Methods"
permalink: /student/lesson-6-02/
teacher_url: /docs/lesson_plans/units/6_unit/02_lesson/lesson.html
unit: 6
prev_url: /student/lesson-6-01/
prev_title: "6.01"
next_url: /student/lesson-6-03/
next_title: "6.03"
---
{% raw %}## What you will learn

* Define and identify: **pop**, **default value**
* Update values in a dictionary
* Add values to a dictionary
* Remove values from a dictionary

## Reading

* [Associated Reading - section 6.2]({% endraw %}{{ '/docs/readings.html#62' | relative_url }}{% raw %})

## Do Now

### 1. In your Console

#### Type the following

```python
my_dictionary = {
'kittens': 'cute animals'
}
my_dictionary['kittens'] = 'p. cute'
print(my_dictionary)
```

#### In your Notebook

##### Respond to the following

Write down what the 2nd line does.

### 2. In your Console

```python
my_dictionary = {}
my_dictionary['puppies'] = 'baby dogs'
print(my_dictionary)
```

#### Continue in your Notebook

##### Respond to the following prompt

Write down what the 2nd line does.

### 3. In your Console

```python
my_dictionary = {
'kittens': 'cute animals',
'puppies': 'baby dogs'
}

my_dictionary.pop('kittens')
print(my_dictionary)
my_dictionary.pop('bunnies')
my_dictionary.pop('bunnies', None)
```

#### Continue In your Notebook

1. Write down what the second line does.
2. What is different between `my_dictionary.pop('bunnies')` and `my_dictionary.pop('bunnies', None)`?

## Lab

In this lab we will implement a word frequency algorithm. It will tell you how many of each word you had in an essay.

At the top of the document save a variable with a long paragraph (example below). In order to turn this paragraph into a list of lower case words we will use the `split(" ")`, `replace()`, and `lower()` functions. There is code at the bottom of this page that will do this for you. Feel free to read more about `split()` in the Python documentation, but it's not critical to this lab.

For each word in the document, count the number of times it occurs. Consider the following phrase: 'Cats are cool. Baby cats are called kittens. Cats make great pets.' The word 'cats' appears 3 times. The word 'are' appears 2 times.

The program will first create a dictionary with the words as keys and the number of times they occur as values. Then it will prompt the user which word they are curious about. If the word was in the paragraph it will print the number of times it occurred.

### Example

```python
>>> python3 word_frequency_lab.py
What word would you like to know the frequency of? cats
'cats' occurs 3 times
```

```python
>>> python3 word_frequency_lab.py
What word would you like to know the frequency of? dogs
'dogs' does not occur
```

#### `split`, `replace`, and `lower`

This is the code to lower case the letters in the paragraph, remove the periods, and split them into individual words.

```python
example_paragraph = "It was a beautiful day in New York City. Our hero Ariana Grande was on a walk from the Standard to Duane Reade. Ariana Grande was walking rather quickly because she had lived in New York for a few months. All of a sudden a slimy donut appeared out of nowhere. Ariana Grande decided to prance foolishly instead of dealing with the situation. Thrown off from Duane Reade Ariana Grande decides to go to Times Square instead. What a beautiful day in New York."

#make all letters lowercase
example_paragraph_lower = example_paragraph.lower()

#remove all periods
example_paragraph_lower_no_punctuation = example_paragraph_lower.replace(".", "")

#convert paragraph into a list of individual strings
example_word_list = example_paragraph_lower_no_punctuation.split(" ")

```

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="d" markdown="1">
**1. If `d = {'a': 1}`, what does `d['b'] = 2` do?**

- Causes a KeyError
- Replaces the value of `'a'`
- Does nothing
- Adds a new key `'b'` with the value 2

<p class="why">Assigning to a key that does not exist yet adds a new key-value pair.</p>
</div>

<div class="q" data-answer="b" markdown="1">
**2. If `d = {'a': 1}`, what does `d['a'] = 5` do?**

- Adds a second key `'a'`
- Updates the value stored under `'a'` to 5
- Removes `'a'`
- Causes an error

<p class="why">Keys are unique, so assigning to an existing key replaces its value.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**3. What is the difference between `d.pop('x')` and `d.pop('x', None)` when `'x'` is not a key?**

- The first causes an error, and the second returns the default `None`
- The first returns `None`, and the second causes an error
- Both cause an error
- Both add `'x'` to the dictionary

<p class="why">The second argument is a default value that <code>pop</code> returns instead of failing when the key is missing.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/6_unit/02_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/6_unit/02_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
