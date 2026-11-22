---
layout: minimal-home
title: "Lesson 1.04: Variables and User Input"
permalink: /student/lesson-1-04/
teacher_url: /docs/lesson_plans/units/1_unit/04_lesson/lesson.html
unit: 1
prev_url: /student/lesson-1-03/
prev_title: "1.03"
next_url: /student/lesson-1-05/
next_title: "1.05"
---
{% raw %}## What you will learn

* Define and identify: **comments,  storing, mutability, variable assignment, input**
* Assign and swap variables
* Store user input into a variable

## Reading

* [Associated Readings 1.3]({% endraw %}{{ '/docs/readings.html#13' | relative_url }}{% raw %})

## Do Now

### 1. In your Console

#### Type and run the following code

```python
a = input("What is your name? ")
# a = "cats and dogs"
# meow
print("Hello there, " + a)
```

### In your Notebook

#### Answer the following questions

1. Read through the code and write down what you expect the printed results to be?
2. Run the code and write down the actual printed result?
3. Briefly describe what the `#` does?
4. Briefly describe what `input` does?

### Snap to Python

Convert the following to Python code:

  ![Snap Input]({% endraw %}{{ '/docs/lesson_plans/units/1_unit/04_lesson/snap_input.png' | relative_url }}{% raw %})

### Swapping

#### 2. In your Console

##### Type and run the following

```python
a = "this sentence should go second"
b = "this sentence should go first."  
# your code starts here

# your code ends here
print(a)
print(b)
```

1. Run the program. What is the output?
2. Write code to swap the values of variables `a` and `b`.

## Lab

### Project Objective

* Use Python to interact with variables and user input
* Create a genie program. Save the file as `magic_genie.py`.

#### Project Specifications

* Have the program introduce itself
* Have the program ask for three separate wishes
* Print all the wishes togethe

![magic_genie_output]({% endraw %}{{ '/docs/lesson_plans/units/1_unit/04_lesson/magic_genie_output.png' | relative_url }}{% raw %})

* There are some repeated strings in this genie program. Move those into variables

#### Genie Confusion

Now it's time to make your genie confused. Edit your code to have him print your first wish as your last wish, and your second wish as your first wish, and your third wish as your second wish.

  ![magic_genie_output_confused]({% endraw %}{{ '/docs/lesson_plans/units/1_unit/04_lesson/magic_genie_output_confused.png' | relative_url }}{% raw %})

### SNAP Flashback – Magic Genie

![Genie Code - Snap]({% endraw %}{{ '/docs/lesson_plans/units/1_unit/04_lesson/GenieProgram%20-%20Code.png' | relative_url }}{% raw %})

#### Hint

Remember to add spaces you can combine `" "`  to the end of your string using the `+` operator. So `print("hello" + " " + "student")` would print `hello student`

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="c" markdown="1">
**1. What does `name = input("Your name? ")` do?**

- Prints "Your name?" and then forgets it
- Sets `name` to the text "Your name? "
- Shows the prompt, waits for the user to type, and stores what they typed in `name`
- Compares `name` to the user's typing

<p class="why">The <code>input</code> function displays the prompt, waits for the user, and returns what they typed so it can be stored in a variable.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**2. What does the `#` do in a line like `# add the tax`?**

- Starts a comment that Python ignores
- Makes Python print the line
- Causes an error
- Stores the line in a variable

<p class="why">Everything after a <code>#</code> is a comment meant for humans, and Python skips it.</p>
</div>

<div class="q" data-answer="d" markdown="1">
**3. After `x = "red"`, `y = "blue"`, and `x = y`, what are `x` and `y`?**

- `x` is "red" and `y` is "blue"
- `x` is "red" and `y` is "red"
- `x` is "blue" and `y` is "red"
- `x` is "blue" and `y` is "blue"

<p class="why">Assignment copies the right-hand value into the left-hand variable, so the old value of <code>x</code> is lost and both hold "blue".</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/1_unit/04_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/1_unit/04_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
