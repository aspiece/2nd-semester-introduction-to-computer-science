---
layout: minimal-home
title: "Lesson 2.07: Project"
permalink: /student/lesson-2-07/
teacher_url: /docs/lesson_plans/units/2_unit/07_lesson/lesson.html
unit: 2
prev_url: /student/lesson-2-06/
prev_title: "2.06"
next_url: /student/lesson-3-01/
next_title: "3.01"
---
{% raw %}## What you will learn

* Use knowledge of lists, booleans, conditionals, and while loops to create a text-based adventure game.

## Reading

* Read through the [Associated Readings 2.7]({% endraw %}{{ '/docs/readings.html#27' | relative_url }}{% raw %})

## Project

Using Python, students will use casting, Boolean expressions, lists and while loops to create a text-based adventure game!

### Overview

This game takes place in a three story dungeon. The user has to traverse the levels in search of the prize. Along the way they collect items and fight monsters. On each move the user has seven possible commands: `left`, `right`, `up`, `down`, `grab`, `fight`, `help`. If the input is invalid (not one of these commands,) the game will let the user know. Otherwise, the game will execute the user's command. The goal of the game is to collect the prize guarded by the boss monster.

### Details

#### Behavior

##### The game has three floors

* Each floor is made up of five rooms, arranged in a line from left to right.
* A room can contain: a sword, a monster, magic stones, up-stairs, down-stairs or nothing.

##### At the start of the game, the user is placed in one of the rooms

##### Movement

* The user can try to move to the left room or right room.
* If there is no room in that direction, the game should report this.
* The user can also move upstairs or downstairs if the room contains an up-staircase or a down-staircase.

##### Contents of rooms

* The game prints out the contents of the current room after every command.
* The user can grab swords or magic stones if they walk into a room with them.
* The sword or stones are no longer in the room once grabbed.

##### Monsters guard some rooms

* The user can use a sword to defeat a monster using the `fight` command.
* The sword and monster disappear after fighting.
* If they have no sword, the user can exit in the direction from which they came.
* If the user fights without a sword, they will be defeated and the game will end.
* If they try to walk past a monster, they will be killed and the game will end.
* A sword and magic stones are required to defeat the boss monster.

#### Implementation Details

* The game should be implemented using lists.

##### User Items

* Use a list to keep track of the user's items.
* At the beginning of the game it should be empty.
* A maximum of three items can be held at once.

##### Monsters

* There should be three regular monsters placed throughout the game.
* These require a sword to defeat.
* There should be a boss monster in the room just before the room that contains the prize.
* This monster requires magic stones and a sword to defeat.

##### Movement Implementation

* The user can only go up if there is an up-staircase
* The user can only go down if there is down-staircase.
* The program should not allow the user to run past a monster,
* The program should not allow the user to go up, down or past bounds of the game.

##### Win/Lose

* The game is won when the player grabs the prize.
* The game is lost if the user
* fights a monster without a sword
* fights the boss monster without a sword and stones
* tries to move past a monster

#### Design Considerations

##### Game Board

The game board is the basis of the game. The following is a way to think of a smaller game board as a set of three lists: one for each floor.

```python
floor_1 = ['nothing', 'nothing', 'stairs up']
floor_2 = ['nothing', 'nothing', 'stairs up']
floor_3 = ['prize', 'nothing', 'nothing']
```

The above code has each floor being its own lists. Feel free to use a different implementation, but this should work for our purposes.

##### User Position

It will be useful to keep track of the user's position through a variable.

```python
user_room = 0
user_floor = floor_1
```

This would put the user at the position of the first room of the first floor.

##### Validating User Input

You will need to check the input of the user to make sure it is valid for the current game state:

```python
if user_input == "down":
    current_room = user_floor[user_room]
    if current_room != "stairs down":
        print("Can't go downstairs; there are no stairs.")
```
### Extra Credit

* Add the command `run`, which allows a player to run past a monster instead of fighting. This should work 40% of the time. (Hint: Research the random library.)
* Implement the board using nested lists (each item of the list is a list.)

## Alternate Project

Created By Brian Weinfeld

Using Python, you will create an interactive TODO list that allows users to add and remove tasks from a list.

### Overview

One of the most common tasks we use computers for is to store and track data. Perhaps the most simple form of this task is the TODO list. A TODO list is simply a list of information (for example, chores that needs to be done) that the user wants to track. They can add tasks to the list, remove them when they are complete and examine the list as they progress. Have you ever used a notes app on your phone?

### Details

#### Behavior

```python
Welcome to your TODO list
What would you like to do? (add, remove, list, exit) list
[]

What would you like to do? (add, remove, list, exit) add
What would you like to add to your list? go to gym
Successfully added
What would you like to do? (add, remove, list, exit) list
['go to gym']

What would you like to do? (add, remove, list, exit) add
What would you like to add to your list? buy food
Successfully added
What would you like to do? (add, remove, list, exit) list
['go to gym', 'buy food']

What would you like to do? (add, remove, list, exit) add
What would you like to add to your list? go to gym
This is already on your list!
What would you like to do? (add, remove, list, exit) list
['go to gym', 'buy food']

What would you like to do? (add, remove, list, exit) remove
What would you like to remove? go to gym
Successfully removed
What would you like to do? (add, remove, list, exit) list
['buy food']

What would you like to do? (add, remove, list, exit) remove
What would you like to remove? clean bedroom
This is not in the list!
What would you like to do? (add, remove, list, exit) list
['buy food']

What would you like to do? (add, remove, list, exit) exit
Goodbye
```

#### Implementation Details

* The program offers the user 4 options. **add** will add elements to the TODO list. **remove** will remove elements from the list.  **list** will display the entire list and **exit** will exit the program.

* After a user selects **add** they should then be prompted for the item they want added to the list. Be sure to check before you add the item to the list. You don't want to add the item twice!

* After a user selects **remove** they should then be prompted for the item they want removed from the list. Be sure to check before removing the item from the list. You should let the user know if they are trying to remove an item that isn't in the list!

#### Challenge

This section contains additional components you can add to the project. These should only be attempted **after** the project has been completed.

* It is a bit inconvenient to have to type two commands to add or remove an element from the list. Modify the program so that tasks  can be added or removed from the TODO list with a single command like **add go to gym** or **remove go to gym**.

```python
Welcome to your TODO list
What would you like to do? (add, remove, undo, list, exit) add go to gym
Successfully added
What would you like to do? (add, remove, undo, list, exit) list
['go to gym']

What would you like to do? (add, remove, undo, list, exit) add clean bedroom
Successfully added
What would you like to do? (add, remove, undo, list, exit) list
['go to gym', 'clean bedroom']

What would you like to do? (add, remove, undo, list, exit) remove bedroom
This is not in the list!
What would you like to do? (add, remove, undo, list, exit) remove clean bedroom
Successfully removed
What would you like to do? (add, remove, undo, list, exit) list
['go to gym']
```

* It is helpful to have a feature to immediately remove the most recently added element to the list. This is often because the user made a mistake in adding the element to the list in the first place. Add an **undo** option to the program that will remove the most recently added item. If the item is no longer in the list, print an error.

```python
Welcome to your TODO list
What would you like to do? (add, remove, undo, list, exit) add go to gym
Successfully added
What would you like to do? (add, remove, undo, list, exit) add clean bedroom
Successfully added
What would you like to do? (add, remove, undo, list, exit) list
['go to gym', 'clean bedroom']

What would you like to do? (add, remove, undo, list, exit) undo
Successfully undid last add.
What would you like to do? (add, remove, undo, list, exit) list
['go to gym']

What would you like to do? (add, remove, undo, list, exit) undo
Cannot undo. You already removed this item
What would you like to do? (add, remove, undo, list, exit) list
['go to gym']
```

#### Super Challenge

The super challenge will require knowledge that has not been taught yet. You will need to do additional research on your own. Good luck!

It is possible to track enough information so that the __undo__ command can be called repeatedly. Modify the __undo__ command so that it will always work by removing the most recently added element in the TODO list that is still in the list. The only time the command should do nothing is when the TODO list is empty.

## Rubric

<!--Currently neither project requires students casting, identifying multiple data types, or creating list of different types-->
<!-- this project will require a lot of the same skills as the previous projects they have not included them here, as the expectation is they have already been mastered)-->

Student Name: _______________________________ Date: ________________

### Student correctly identifies data types (2.01)

Assessed in Unit 3

<!--### Student correctly use casting (2.01)

|3 |2 |1 |0 |Points
|:-:|:-:|:-:|:-:|:-:|
| Student always uses casting correctly| Student mostly uses casting correctly | Student sometimes uses casting correctly| There is no evidence that the student can use casting correctly |_ _ _ _|
|**Sub Total**||||_ _ _ _|-->

### Student correctly uses conditionals to maintain flow of control (2.02, 2.03)

|3 |2 |1 |0 |Points
|:-:|:-:|:-:|:-:|:-:|  
| All of the conditionals run as expected | Most of the conditionals run as expected | Few conditionals run as expected| There is no evidence the student can correctly use conditionals ||
||||**Sub Total**||

### Student correctly uses lists (2.04 & 2.05)

|3 |2 |1 |0 |Points
|:-:|:-:|:-:|:-:|:-:|  
|Student correctly uses the `length` function| ____ |Student attempts to use the `length` function incorrectly | No evidence the student can use the `length` function| |
|Student can access items from a list using the index | Student often can access item from a list using the index| Student attempts to access items from a list using the index| No evidence the students can access items from a list using the index||
|Students can add and remove items to/from a list| Students can correctly add OR remove items from a list| Student attempts to add and remove items from a list| No evidence that the students can add or remove items from a list||
||||**Sub Total**||

### Student can correctly use the while loop (2.06)

|3 |2 |1 |0 |Points
|:-:|:-:|:-:|:-:|:-:|
|Student correctly uses the while loop | Students attempts to use the while loop, but the condition is not correct|_____|There is no evidence the student can use the while loop| |
||||**Sub Total**||

### Student can decompose a problem to create a program from a brief

|3 |2 |1 |0 |Points
|:-:|:-:|:-:|:-:|:-:|
|Student program runs without error | The students program has a few errors, but it does not impact the program's functionality | Student program has errors that impact the program's functionality | Student program is not functional ||
| __ | Students submitted documentation showing planning for most variables and functions.| Students submitted documentation showing planning for a few variables and functions.| No evidence of planning||
||||**Sub Total**||

### Student uses naming/ syntax conventions and comments to increase readability

|2 |1 |0 |Points
|:-:|:-:|:-:|:-:|
|Syntax conventions are generally used |Sometimes syntax conventions are used| No evidence of syntax conventions to aid in code readability||
|All variables have clear names| Some variables have clear names| No evidence of using variable names to aid in code read ability||
|____|Student comments aid code readability| No evidence of using comments to aid in code readability.||
|||**Sub Total**||

### Final Grade

| Points Possible | Points Earned x Weight | Total Points|
|:-:|:-:|:-:|
|25| ____ X ____||

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="d" markdown="1">
**1. Why is a list a good way to track a player's items in a game?**

- Lists cannot change while the program runs
- Lists make the game run faster
- A list can only hold numbers
- A list can grow and shrink as items are added and removed

<p class="why">Lists can be changed while a program runs, so items can be added with <code>append</code> and removed as the game goes on.</p>
</div>

<div class="q" data-answer="b" markdown="1">
**2. Why would the game use a `while` loop for the main game play?**

- To run the game exactly once
- To keep asking for commands until the game is won or lost
- To store the floors in a list
- To convert input to integers

<p class="why">A loop keeps the game going turn after turn until an ending condition stops it.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**3. Before moving in a direction, why should the program check the room contents or position?**

- To validate that the move is allowed in the current game state
- Because Python requires an `if` before every input
- To make the list longer
- To clear the screen

<p class="why">Conditionals let the program reject invalid moves, such as going up where there is no staircase.</p>
</div>

</div>

## Downloads

* [Project (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/07_lesson/project.pdf' | relative_url }}{% raw %})
* [Project (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/07_lesson/project.docx' | relative_url }}{% raw %})
* [Alternate Project (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/07_lesson/alternate_project.pdf' | relative_url }}{% raw %})
* [Alternate Project (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/07_lesson/alternate_project.docx' | relative_url }}{% raw %})
* [Rubric (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/07_lesson/rubric.pdf' | relative_url }}{% raw %})
* [Rubric (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/07_lesson/rubric.docx' | relative_url }}{% raw %})
* [Starter code: text_Monster_Starter_Code.py]({% endraw %}{{ '/docs/lesson_plans/units/2_unit/07_lesson/text_Monster_Starter_Code.py' | relative_url }}{% raw %})
{% endraw %}
