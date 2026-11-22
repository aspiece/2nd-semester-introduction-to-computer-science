---
layout: minimal-home
title: "Lesson 2.06: Game Loop"
permalink: /student/lesson-2-06/
teacher_url: /docs/lesson_plans/units/2_unit/06_lesson/lesson.html
unit: 2
prev_url: /student/lesson-2-05/
prev_title: "2.05"
next_url: /student/lesson-2-07/
next_title: "2.07"
---
{% raw %}## What you will learn

* Define and identify: **while loop**
* Use a while loop to simulate game play

## Reading

* [Associated Readings 2.7]({% endraw %}{{ '/docs/readings.html#27' | relative_url }}{% raw %})

## Do Now

### 1. In your Notebook

#### Answer the following

1. How would you print out something 10 times? What about 100? What about 1,000?
2. Can you remember something from Snap! that might allow that?

### 2. Open up the console

#### Type the following code using interactive mode

```python
while True:
    print('a')

 ```

### 3. In your Notebook

#### Write responses for the following

1. What happens when you run this code?
2. Try using other Boolean expressions instead of `True` (e.g. `4 > 5` and `9 != 2`), and explore what happens.

3. How would you print out something 10 times? What about 100? What about 1,000?

4. Can you remember something from Snap! that might allow that?

### 4. Open up the console

#### Type the following code

```python
while True:
    print('a')
 ```

### 5. In your Notebook

#### continue  responses for the following

1. What happens when you run this code?
2. Try using other Boolean expressions instead of `True` (e.g. `4 > 5` and `9 != 2`), and explore what happens.

### 6. Open up the console

#### Type and run the following code (Remember this from Unit 2?)

```python
if animal in ['cat', 'dog']:
    print("A great pet!")
 ```

## Lab

### 1. In your Notebook

#### Predict what will be printed then type the program in your console to confirm

#### Example 1

```python
    a = 0
    while a < 10:
        print(a)
```

| **Predicted Output** | **Actual Output** |
| --- | --- |
|<br> |<br> |

#### Example 2

```python
    a = 0
    while a < 10:
        a = a + 1
        print(a)
```

| **Predicted Output** | **Actual Output** |
| --- | --- |
|<br> |<br> |

### 2. In your Notebook

#### Create a set of test cases for the following sample code and predict the behavior

```python
    a = input("Would you like to quit: ")
    while a != "y" and a != "n" :
        a = input("Would you like to quit: ")
```

| **Predicted Output** | **Actual Output** |
| --- | --- |
|<br> |<br> |

### 3. Implement the Tic Tac Toe game using a while loop

* Allow users to keep playing (max 9 times).
* Use variables to decide whose turn it is, and greet them as Xs or Os.
* User picks a location on the board according to the number:

![tic-tac-toe](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRrA_MowUM-KZXl1CpkrQhi8W505dM3cxZG1787i9qFz8KefqFkIQ)

* Depending on the position user gave, update the corresponding position of the board to reflect that.
* Print the updated board out.
* You will not need to determine the winner at this point.

#### Bonus

Create a variable-sized board. So instead of a classic 3 x 3 board, create a way for the user specify the size of the board they want to play with.

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="a" markdown="1">
**1. What does this code print?**

```python
n = 0
while n < 3:
    n = n + 1
print(n)
```

- 3
- 0
- 2
- Nothing, it loops forever

<p class="why">The loop repeats while <code>n &lt; 3</code>, and stops once <code>n</code> reaches 3.</p>
</div>

<div class="q" data-answer="c" markdown="1">
**2. Why does this loop never end?**

```python
count = 0
while count < 5:
    print(count)
```

- Because `print` cannot be used in a loop
- Because 5 is too large
- Because `count` never changes, so the condition stays true
- Because `while` loops run only once

<p class="why">Nothing inside the loop changes <code>count</code>, so <code>count &lt; 5</code> is always true.</p>
</div>

<div class="q" data-answer="b" markdown="1">
**3. When does the code inside a `while` loop run?**

- Only once, before the condition is checked
- Repeatedly, as long as the condition is true
- Only when the condition is false
- Exactly 10 times

<p class="why">A <code>while</code> loop checks its condition before each pass and repeats the body while it is true.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/06_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/06_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
