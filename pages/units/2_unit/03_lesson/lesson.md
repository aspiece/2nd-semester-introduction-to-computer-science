# Lesson 2.03: Conditionals

## Learning Objectives

Students will be able to...

* Define and identify: **if, else, elif, conditionals, flow of control**
* Create chaining if statements
* Understand how conditional statements alter the flow of control of a program

## Materials/Preparation

* [Do Now]
* [Lab - Game Show] ([printable lab document]) ([editable lab document])
* Solution (access protected resources by clicking on "Additional Curriculum Materials" on the [TEALS Dashboard])
* [Associated Readings 2.3](https://tealsk12.gitbook.io/intro-cs-2/readings#2-3)
* Read through the do now, lesson, and lab so that you are familiar with the requirements and can assist students
* **Microsoft Learn - Conditionals Video**

  [![Conditionals Video](https://img.youtube.com/vi/5pPKYWqkoek/0.jpg)](https://www.youtube.com/watch?v=5pPKYWqkoek)

* **Microsoft Learn - Handling Multiple Conditionals Video**

  [![Multiple Conditionals Video](https://img.youtube.com/vi/oYaGJBMoXok/0.jpg)](https://www.youtube.com/watch?v=oYaGJBMoXok)

* **Microsoft Learn - Complex Conditions Video**

  [![Multiple Conditionals Video](https://img.youtube.com/vi/IBOHc87yFYw/0.jpg)](https://www.youtube.com/watch?v=IBOHc87yFYw)

## Pacing Guide

| **Duration**   | **Description** |
| ---------- | ----------- |
| 5 Minutes  | Do Now      |
| 10 Minutes | Lesson      |
| 35 Minutes | Lab         |
| 5 Minutes | Debrief  |

## Instructor's Notes

### 1. Do Now

* Project the Do Now on the board, circulate around the class to check that students are working and understand the instructions.
* Students should quickly realize that they do not have all the tools necessary to complete the task.
  
### 2. Lesson

#### Instruction

* Ask students what they felt like they needed that they had in Snap!
* Explain that in order to write useful programs, we almost always need the ability to check conditions and change the behavior of the program accordingly.
* **Conditional** statements give us this ability to affect the **flow of control**.
* The simplest form is the `if` statement. The boolean expression after `if` is called the condition. If it is true, then the indented statement gets executed. If not, nothing happens.

    ```python
    if x > 0:
        print("x is positive")
    ```

#### Take a look at this example

   ```python
    animal = input("What is your favorite animal?")
    if animal == 'cat' or 'dog':
    print("A great pet!")
    else:
    print("Good choice")
   ```

#### Discussion

* Give students time to predict the output for various inputs in the above example.
* Discuss why the code is buggy
* fix it together as a class.

#### Demonstration

* Write out the syntax of the `if` statement on the board. Point out the Boolean expression(condition), the colon, and the indentation.
* Ask students if they recall what else went along with the if statement when they used it in Snap!
* `else` is used when there are two possibilities and the condition determines which one gets executed.
* Demonstrate the syntax of `else`
* Describe the `elif` statement
* Sometimes there are more than two possibilities and we need more than two branches. One way to express a computation like that is a chained conditional:
* Demonstrate the syntax of `elif`

### 3. Lab

* Students convert the triangle program written in Snap! into Python.
* Students must also write a program that simulates a list index using `if` statements.

### 4. Debrief

* Check student progress and completion of the lab, wrap up by taking any final questions.
* Have students write down a couple of learnings that they stood out to them today in their notebooks.

## Accommodation/Differentiation

Use the following as an extension activity for students that are moving quickly:

* Convert and finish the following SNAP Vending Machine program in Python.

![Vending Machine](python_2.04_vending_machine.png)

If students are moving quickly, this lesson can move onto lists.

## Forums discussion

[Lesson 2.03: Conditionals (TEALS Discourse Account Required)](https://forums.tealsk12.org/c/2nd-semester-unit-2/lesson-2-03-conditionals)

[Do Now]:do_now.md
[Lab - Game Show]:lab.md
[TEALS Dashboard]:http://www.tealsk12.org/dashboard

[printable lab document]: https://github.com/TEALSK12/2nd-semester-introduction-to-computer-science/raw/master/units/2_unit/03_lesson/lab.pdf
[editable lab document]: https://github.com/TEALSK12/2nd-semester-introduction-to-computer-science/raw/master/units/2_unit/03_lesson/lab.docx
