---
layout: minimal-home
title: "Lesson 3.04: Debugging and Scope"
permalink: /student/lesson-3-04/
teacher_url: /docs/lesson_plans/units/3_unit/04_lesson/lesson.html
unit: 3
prev_url: /student/lesson-3-03/
prev_title: "3.03"
next_url: /student/lesson-3-05/
next_title: "3.05"
---
{% raw %}## What you will learn

* Define and identify scope, aliasing, stack trace
* Demonstrate changing a list in a function updates the list outside of the function
* Demonstrate updating variables in a function does not affect the variable outside of the function
* Demonstrate using global variables
* Draw a simple stack trace

## Reading

* [Associated Readings 3.4]({% endraw %}{{ '/docs/readings.html#34' | relative_url }}{% raw %})

## Do Now

### Quiz Announcement

We will have a quiz next class covering all of the above topics.

#### Discussion

Is there any topic you would like to focus on and cover more of?

#### In your Notebook

Rank the following from easiest to hardest:

1. Importing built-in functions
2. Using `randint`
3. Abstraction/creating functions
4. Passing int/str/float/bool arguments into functions
5. Calling a function
6. List syntax
7. Return vs print

#### Type the following into the console

```python
my_list = ['a', 'b', 'c', 'd']
# input: a list of strings
# output: None
def my_function(list_argument):
    list_argument[0] = 'z'
print(my_list)
my_function(my_list)
print(my_list)
```

1. What did the program output and what is this program doing?

#### Bonus

Try writing a similar program but passing in integers instead of a list. What happens?

## Lab

### In Your Notebook

#### Aliasing

1. Will updating b affect a? Explain why or why not?

    ```python
    a = [1, 2, 4]
    b = a
    ```

2. Predict what `my_list` list will print out when this code is run. If you are not sure check the code by copying and running it.

    ```python
    # input: a list of ints
    # output: an int
    def update_list(a_list):
        a_list[3] = "yo"
        b = a_list[4]
        b = 100

    my_list = [1, 2, 3, 4, 5]
    update_list(my_list)
    ```

#### Scope

1. Draw a stack diagram for the following:

    ```python
    var_1 = "kittens"
    var_2 = "cookies"

    # input: a string
    # output: a string
    def my_function(my_favorite_things):
        song_lyrics = "rain drops on roses,"
        combined_song = song_lyrics + my_favorite_things
        return combined_song

    # input: a string
    # output: a string
    def my_function_2(item, item2):
        full_lyrics = item + "on " + item2
        full_song = my_function(full_lyrics)
        return full_song

    my_song = my_function_2(var_1, var_2)
    ```

### Complete the following on your own

1. Write down what (if anything) is wrong with the following code.
2. If there was an issue write out how to fix it.
3. If you are unsure copy and run the code and fix it

#### Problem 1

```python
var_1 = 'cat'
var_2 = 'dog'

def print_out_my_favorite(favorite_pet):
    if favorite_pet == var_1:
        print("My favorite pet is the cat.")
    if favorite_pet == var_2:
        print("My favorite pet is the dog.")
    var_2 = "cat"

print_out_my_favorite(var_1)
print(var_2)
```

#### Problem 2

```python
var_1 = 'cat'
var_2 = 'dog'

def print_out_my_favorite(favorite_pet):
    var_1 = 'dog'
    var_2 = 'cat'
    if favorite_pet == var_1:
        print("My favorite pet is the cat.")
    if favorite_pet == var_2:
        print("My favorite pet is the dog.")

print_out_my_favorite(var_1)
print(var_1 + " " + var_2)
```

#### Problem 3

```python
var_1 = 'cat'
var_2 = 'dog'

def print_out_my_favorite(favorite_pet):
    if favorite_pet == var_1:
        print("My favorite pet is the cat.")
    if favorite_pet == var_2:
        print("My favorite pet is the dog.")

print_out_my_favorite(var_1)
print(var_2)
```

### In your your console

#### Write a program using the following specifications

1. That has a global variable, `my_num`.
2. Create three functions that update `my_num`
3. `add2`: this function adds 2 to `my_num`
4. `multiply_num`: this function takes in a parameter, `multiplier`, and multiplies `my_num` by that parameter
5. `add2_and_multiply`: this function takes in a parameter, `multiplier`, and calls `add2`, then calls `multiply_num`.
  
#### Complete the program

Write the following code in the main part of the program.

1. sets `my_num` to some initial value you choose
2. prints `my_num`
3. calls `add2_and_multiply()` with some argument you choose
4. prints the final value of `my_num`
5. Confirm that the printed values match what you expected.

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="c" markdown="1">
**1. A function receives a list and runs `lst.append(7)`. After the function ends, what is true of the list that was passed in?**

- It is unchanged
- It is deleted
- It now contains 7, because the function changed the same list
- It is a different list

<p class="why">A list argument is an alias of the original list, so changes inside the function show up outside.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**2. After `x = 5` and a function `def bump(n): n = n + 1` is called as `bump(x)`, what is `x`?**

- 5
- 6
- `None`
- An error

<p class="why">The parameter <code>n</code> is a separate local variable, so the outside <code>x</code> does not change.</p>
</div>

<div class="q" data-answer="d" markdown="1">
**3. What does the scope of a variable describe?**

- How large its value is
- Its data type
- The order functions were defined
- Where in the program the variable can be used

<p class="why">Scope is the part of the program where a variable exists and can be accessed.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/3_unit/04_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/3_unit/04_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
