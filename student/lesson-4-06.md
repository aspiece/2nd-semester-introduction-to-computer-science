---
layout: minimal-home
title: "Lesson 4.06: Tic Tac Toe"
permalink: /student/lesson-4-06/
teacher_url: /docs/lesson_plans/units/4_unit/06_lesson/lesson.html
unit: 4
prev_url: /student/lesson-4-05/
prev_title: "4.05"
next_url: /student/lesson-5-01/
next_title: "5.01"
---
{% raw %}## What you will learn

* Use project planning skills to complete a larger project
* Utilize loops, lists, and nested loops/lists to create a Tic-Tac-Toe game

## Project

Using Python, students will create a Tic-Tac-Toe game. This project has two parts

1. Designing the game so that two users can play Tic-Tac-Toe against one another.
2. Creating a Tic-Tac-Toe checker which will check the board to see if Xs or Os have won the game.

### Overview

[Tic-Tac-Toe](http://www.merriam-webster.com/dictionary/tic-tac-toe) is a game in which one player draws X's and another player draws O's inside a set of nine squares and each player tries to be the first to fill a row, column, or diagonal of squares with either X's or O's. We will be writing an interactive Tic-Tac-Toe program. At the end of each turn the computer will check to see if X's have won the game or if the O's have won the game.

#### Behavior

* The program will prompt the user to enter their name and their opponents name.
* Whoever enters their name first will be playing as X's, and the other player will be O's.
* The players will take turns inputting the row and column they would like to place their mark.
* If that spot is already taken the program will ask for the spot again.
* At the end of each player's turn the program will
  * check if that player has won.
  * print the updated game board.
* If there are no more spots open and nobody has won the game, the program will print `Tie game!`.

#### Implementation Details

* Use variables to store the user names for personalized prompts.
* Create a game board represented as a list of lists, size 3 by 3.
***Note: This is a change from our earlier implementations of Tic-Tac-Toe. Why do you think this might be better?***
* Check for a winner horizontally, vertically, and on both diagonals.
* Cannot allow a user to overwrite a spot on the board.

## Alternate Project

Modified by Brian Weinfeld

Using loops, variables and functions in Python, you will create a Tic-Tac-Toe game for two human players.

### Overview

[Tic-Tac-Toe](http://www.merriam-webster.com/dictionary/tic-tac-toe) is a game in which one player draws X's and another player draws O's inside a set of nine squares and each player tries to be the first to fill a row, column, or diagonal of squares with either X's or O's.

#### Behavior

```python
Welcome to Tic-Tac-Toe!
'X' what is your name: Alice
'O' what is your name: Bob
Game Start
 | |
 | |
 | |

Alice what row is your move: 1
Alice what col is your move: 1
 | |
 |X|
 | |

Bob what row is your move: 0
Bob what col is your move: 0
O| |
 |X|
 | |

Alice what row is your move: 2
Alice what col is your move: 0
O| |
 |X|
X| |

Bob what row is your move: 2
Bob what col is your move: 0
Invalid move. Try again.

Bob what row is your move: 4
Bob what col is your move: 4
Invalid move. Try again.

Bob what row is your move: 0
Bob what col is your move: 1
O|O|
 |X|
X| |

Alice what row is your move: 0
Alice what col is your move: 2
O|O|X
 |X|
X| |

X wins!

Would you like to play again? no
Goodbye
```

#### Implementation Details

The gameboard should be stored in a list of lists. Each of the internal lists represents one row of the gameboard. If the element in the list is the empty string (the empty string is ''), then the spot is unoccupied. If the element in the list is an 'X' or an 'O', then it is occupied by that player.

Begin by completing the below functions. Do your best to ensure that these functions work properly before moving onto the rest of the project.

```python
def print_gameboard(gameboard):
  # finish
```

* print_gameboard takes the gameboard as its only parameter. This function nicely prints the gameboard.

```python
def check_winner(gameboard):
  # finish
```

* check_winner uses the gameboard to check whether or not a player has won. Return 'X' or 'O' if either of those players have won the game and None if neither player has won.

```python
def check_tied(gameboard):
  # finish
```

* check_tied is used to determine whether the game is tied (all 9 spaces are filled but no one has won). Return True if the game is tied and False if it has not.

```python
def make_move(gameboard, name, symbol):
  # finish
```

* make a move is used to filled the gameboard with the current player's move. The name parameter is a string representing the current player's name and symbol is a string representing their game symbol ('X' or 'O'). Prompt the user by their name for a row and column and place their symbol in the indicated spot. If they select an illegal spot, prompt them for a new selection.

After completing and testing the above functions, complete the following steps to create the main game loop.

* Prompt the 'X' player and 'O' player for their names. You can use these names to prompt each player for their move.
* The players will take turns making moves utilizing the make_move function
* At the end of each player's turn the program will:
  * check if that player has won using the check_winner function.
  * print the updated game board using the print_gameboard function.
* If there are no more spots open and nobody has won the game, the program will print 'Tie game!'. Check this using the check_tied function.
* After the game is over, prompt the players if they would like to play again or quit.

#### Challenge

* Going first is a big advantage in this game. Modify your game loop so that if the users indicate they want to play again, the players swap who goes first. The players should keep their symbol ('X' or 'O') but the symbol that goes first should swap. Every time the players replay the game, the player who goes first should swap.

* Instead of a single game, some players may want to play a best-of-5 or best-of-7 series. In such an event, players repeatedly play the game until one player has won a majority of the games in the series. Before the first game is played, prompt the players for the best-of series they want to play. Remember you don't need to play unnecessary games. If 'X' wins the first 3 games in a best-of-5, the last two games don't need to be played. You should still prompt the player's to see if they want to play again (that is, play a new series of games).

#### Super Challenge

The super challenge will require knowledge that has not been taught yet. You will need to do additional research on your own. Good luck!

* Modify the gameloop so that instead of two human players, either (or both) of the players can be computers. The computer's names can be some variation on "Computer 1". Modify the make_move function so that computer can make an automatic selection. To begin, simply have the computer randomly select an available empty space for their move.

* Continue to build on the above challenge by giving the computer some basic game logic. If the other player is about to win (ie: they have two in a row), then the computer should always select the blocking move. What kind of logic can you give the computer for its turn if it doesn't have to make a blocking move?

## Rubric

<!-- this project will require a lot of the same skills as the previous projects they have not included them here, as the expectation is they have already been mastered)-->

Student Name: _______________________________ Date: ________________________________

### Student uses for loops (4.01)

|3 |2 |1 |0 |Points
|:-:|:-:|:-:|:-:|:-:|
Student uses 3 or more for loops correctly| Student use three for loops correctly |Student uses one or two for loops correctly| No evidence the student can use a for loop||
|Student always scopes the variables in for loops correctly | Student usually scopes the variables in for loops correctly | Student rarely scopes the variables in for loops  correctly.| No evidence Student can correctly scope variables in a for loop||
||||**Sub Total**||

### Students can c use the `range` and `len` functions (4.02)

|3 |2 |1 |0 |Points
|:-:|:-:|:-:|:-:|:-:|
| Student always uses the `range` and `len` functions correctly| Student generally uses the `range` and `len` functions correctly| Sometimes Student uses the `range` and `len` functions correctly| No evidence to that the student can use the `range` or `len` functions correctly||
||||**Sub Total**||

### Students can use nested for loops (4.03)

|3 |2 |1 |0 |Points
|:-:|:-:|:-:|:-:|:-:|
|Student uses 2 or more nested for loops| Student uses 1 nested for loop| Student attempted a nested for loop, but it was not correct| No evidence that Student can correctly use a nested for loop||
||||**Sub Total**||

### Student can use nested lists (4.04)

|3 |2 |1 |0 |Points
|:-:|:-:|:-:|:-:|:-:|
|Student correctly uses nested lists|______| Student attempts to use a nested list| No evidence that the student can use a nested list||
||||**Sub Total**||

### Student can decompose a problem to create a program from a brief

|3 |2 |1 |0 |Points
|:-:|:-:|:-:|:-:|:-:|
|Student program runs without error | The students program has a few errors, but it does not impact the program's functionality | Student program has errors that impact the program's functionality | Student program is not functional ||
| ________ | Students submitted documentation showing planning for most variables and functions.| Students submitted documentation showing planning for a few variables and functions.| No evidence of planning||
||||**Sub Total**||

### Student uses naming/ syntax conventions and comments to increase readability

|2 |1 |0 |Points
|:-:|:-:|:-:|:-:|
|Syntax conventions are generally used |Sometimes syntax conventions are used| No evidence of syntax conventions to aid in code readability||
|All variables have clear names| Some variables have clear names| No evidence of using variable names to aid in code read ability||
|_______|Student comments aid code readability| No evidence of using comments to aid in code readability.||
|||**Sub Total**||

### Final Grade

| Points Possible | Points Earned x Weight | Total Points|
|:-:|:-:|:-:|
|31 | ____ X _____ ||

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="c" markdown="1">
**1. Why store a 3 by 3 game board as a list of lists?**

- A flat list cannot hold strings
- Lists of lists run faster
- A row and column can each be reached with an index
- It takes up less code than variables

<p class="why">Two indexes, such as <code>board[row][column]</code>, match how a grid works.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**2. In `board[1][2]`, what do the two numbers mean?**

- Row 1 and column 2, counting from 0
- Column 1 and row 2, counting from 1
- Value 1 and value 2
- The first and second items of the board

<p class="why">The first index picks the inner list (row) and the second picks the item in it (column).</p>
</div>

<div class="q" data-answer="c" markdown="1">
**3. Which structure is most natural for visiting every square of the board?**

- A single `if` statement
- A `while True` loop only
- A loop over the rows with an inner loop over the columns
- Calling `len` once

<p class="why">A nested loop touches each cell of a list of lists.</p>
</div>

</div>

## Downloads

* [Project (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/06_lesson/project.pdf' | relative_url }}{% raw %})
* [Project (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/06_lesson/project.docx' | relative_url }}{% raw %})
* [Alternate Project (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/06_lesson/alternate_project.pdf' | relative_url }}{% raw %})
* [Alternate Project (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/06_lesson/alternate_project.docx' | relative_url }}{% raw %})
* [Rubric (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/06_lesson/rubric.pdf' | relative_url }}{% raw %})
* [Rubric (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/06_lesson/rubric.docx' | relative_url }}{% raw %})
* [Starter code: tictactoe_starter_code.py]({% endraw %}{{ '/docs/lesson_plans/units/4_unit/06_lesson/tictactoe_starter_code.py' | relative_url }}{% raw %})
{% endraw %}
