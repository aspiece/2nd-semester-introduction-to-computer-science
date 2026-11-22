---
layout: minimal-home
title: "Lesson 7.05: Pokemon Project"
permalink: /student/lesson-7-05/
teacher_url: /docs/lesson_plans/units/7_unit/05_lesson/lesson.html
unit: 7
prev_url: /student/lesson-7-04/
prev_title: "7.04"
next_url: /student/lesson-8-01/
next_title: "8.01"
---
{% raw %}## What you will learn

* Engage in **class design** before beginning coding
* Apply what was learned with respect to **classes**, **methods**, and** inheritance** to create an implementation of Pokemon

## Project

In this project we will be creating a basic implementation of Pokemon, and then create a game for them to battle.
This project will have three steps. The Pokemon Classes, the User classes, and the game loop.

### Overview

#### 9 Pokemon

Each Pokemon comes from 1 of 3 types:

1. Grass
2. fire
3. water

#### Classes

You will be given a base Pokemon class which the grass, fire, and water classes will inherit from.

#### Class: User

* You will be given a bare-bones implementation of the base user class.

#### Class: Computer

* The computer class should inherit from the user class
* The computer class will need to overwrite certain methods of the user class.

#### Attacks

All Pokemon of the same type have the same set of attacks, one of the following:

1. hp (hit points)
2. pp(power points)
3. name.

#### Game Loop

Before the battle begins, Ask the user:

1. Name
2. Computer Name

#### Battle Pairing

1. Ask the user to pick 3 Pokemon for their hand
2. Randomly select the computer's Pokemon from the remaining Pokemon.
3. Ask the user which Pokemon they would like to use in battle with currently
4. Randomly select one for the Computer
5. Battle begins.

#### Each Turn

The user will be given the option to

1. `attack`
2. `heal`
3. `switch`.
4. Computer will be randomly selected, but should more frequently be `attack`.

#### Attack

Gives the user the options

1. attacks the Pokemon
2. pick one to attack with

#### Attack Name

An attack has a name, and corresponds to a list of the power of the attack and the accuracy.

#### An Attack should

1. be a random number in the range between the `attack power(or the pp if that is lower than the attack power) - 20`
2. the `attack power (or the pp if that is lower than the attack power)`
3. randomly fail according to the attack's accuracy.
4. decrease the enemy's hp, and print out a useful description.
5. The computer randomly selects an attack to use in the battle.

#### Heal

1. Gives 20 HP back to the current Pokemon,
2. Takes away the turn

#### Switch

1. Lists the stats (HP, AP, Name) of all Pokemon in the hand, and then
2. switches the current Pokemon
3. takes away the turn.
4. On the computer's turn if this option is randomly selected, choose a random Pokemon to switch with
5. If either the user's or the computer's current Pokemon is out of HP, they will be required to switch Pokemon
6. If there are no available Pokemon, that player has lost.

#### Continue looping until one player has lost

#### Behaviour

##### Game Play

* Ask the user to choose 3 Pokemon: At the beginning of the game the program will list out the pokemon to choose from. Options are the following, HP stands for the health points the pokemon has and AP says the max value of attack
* Grass Type:
  * Bulbasoar: 60HP, 40AP
  * Bellsprout: 40HP, 60AP
  * Oddish: 50HP, 50AP
* Fire Type:
  * Charmainder: 25HP, 70AP
  * Ninetails: 30HP, 50AP
  * Ponyta: 40HP, 60AP
* Water Type:
  * Squirtle: 80HP, 20AP
  * Psyduck: 70HP, 40AP
  * Polywag: 50HP, 50AP
* Ask the user to choose Pokemon to use in fight
* Generate Computer's Hand and randomly select a pokemon to start
* On each turn the player or computer can either `attack`, `heal`, or `switch`
* At the end of each the turn print out the HP of the current Pokemon, and check if either side has lost the game
* A player has lost if all their Pokemon are out of HP
* `switch`: Lists the stats (HP, AP, Name) of all Pokemon in the hand, and asks the user what Pokemon they would like to switch to. Cannot attack until next turn.  
* `stats`: Lists all the stats of the Pokemon in the hand
* `heal`: adds 20 hp to the current Pokemon, cannot attack until next turn
* `attack`: lists all attacks of current Pokemon, prompts the user pick an attack and then inflicts that damage on the Computer's current pokemon. If this K.Os the enemy then the Computer must switch Pokemon on their next turn.
Should print out the following:

```python
>>> Ash is attacking. Bulbosaur used Leaf Storm and did 20 damage.
```

##### Computer

* Computer will select between the three options. 2/3 of the time a user should attack. 1/6 of the time they should heal and 1/6 of the time they should switch pokemon.
* `attack`: Will randomly select an attack and do damage to the User's current Pokemon.
* `heal`: WIll heal current Pokemon by 20 HP, but cannot attack that turn
* `switch`: switched current Pokemon, but cannot attack

#### Pokemon Attacks

All Pokemon of the same type have the same Attacks.

##### Grass Type

All grass type have the following attacks:

* Leaf Storm: 130 Power, 90% accurate
* Mega Drain: 50 Power, 100% accurate
* Razor Leaf: 55 Power, 95% accurate
Grass Type is 1.5x stronger against Water Type.

##### Fire Type

All fire type have the following attacks

* Ember: 60 Power, 100% accurate
* Fire Punch: 85 Power, 80% accurate
* Flame Wheel: 70 Power, 90% accurate
Fire Type is 1.5x stronger against Grass.

##### Water Type

All fire type have the following attacks:

* Bubble: 40 Power, 100% accurate
* Hydro Pump: 185 Power, 30% accurate
* Surf: 70 Power, 90% accurate
* Water Type is 1.5x stronger against Fire Types.

#### Implementation Details

* Use classes to build off the implemented base class for Pokemon. Keep track of HP, Max AP, and type.
  * Here is some [starter_code]
* Design classes for Fire, Grass, Water Types that inherit from the base Pokemon Class
* Each Pokemon should be an instance, use a master list to store all the Pokemon and create this the beginning of the game
* Use methods to set the Pokemon for each player and remove those pokemon from the master Pokemon list.
* Player's and Computer's Pokemon should be stored using a list
* Pokemon attacks should be stored using a dictionary from the attack name to a list of [attack's power, attack's accuracy]

#### Check Point 1

Implement the following:

* `get_attack_power` on Pokemon class
* `attack` on Pokemon class
* `take_damage` on Pokemon class
* `heal` on Pokemon class
* Grass, Fire, and Water type classes
* `set_type` on Fire, Water and Grass classes
* `set_attacks` on Fire, Water and Grass classes
* `get_attack_power` on Fire, Water, and Grass classes

#### Check Point 2

Implement the following:

* `list_pokemon` on User Class
* `switch` on User Class
* `heal` on User Class
* `is_end_game` on User Class
* `print_attacks` on USer Class
* `attack` on User Class

##### Computer class

* `play_turn` on Computer class
* `set_pokemon` on Computer Class
* `attack` on Computer Class
* `switch` on Computer Class

#### Check Point 3

Implement the following

* a game loop
* inputs that ask if user would like to attack, heal or switch
* call correct player function based on inputs
* check for the end of the game and end game if necessary

[starter_code]:{% endraw %}{{ '/docs/lesson_plans/units/7_unit/05_lesson/starter_code.py' | relative_url }}{% raw %}

## Alternate Project

Created by Brian Weinfeld

In this project, you will use dictionaries, lists and objects with Python to create a program that generates mailing lists for advertisers.

### Overview

Every company stores data on its users and a common use of this data is to send relevant advertisements. If the company can track your interests, they can email you when they are selling something they think you may want to purchase. This project consists of several common functions designed to identify which customers you want to send advertisements to.

### Details

#### Behavior

```python
What would you like to do? (add, count, send, display, exit) add
Enter name email and hobbies: Alice a_person@host.com horses,traveling
a_person@host.com is not in our list
a_person@host.com has been added to our list

What would you like to do? (add, count, send, display, exit) add
Enter name email and hobbies: Blake myemail@host.com school
myemail@host.com is not in our list
myemail@host.com has been added to our list

What would you like to do? (add, count, send, display, exit) display
a_person@host.com Alice ['horses', 'traveling']
myemail@host.com Blake ['school']

What would you like to do? (add, count, send, display, exit) add
Enter name email and hobbies: Alice a_person@host.com sleeping
a_person@host.com is already in our list
Added sleeping to a_person@host.com' hobbies

What would you like to do? (add, count, send, display, exit) display
a_person@host.com Alice ['horses', 'traveling', 'sleeping']
myemail@host.com Blake ['school']

What would you like to do? (add, count, send, display, exit) count
Hobby Results
{'horses': 1, 'traveling': 1, 'sleeping': 1, 'school': 1}

What would you like to do? (add, count, send, display, exit) send
Which hobby? horses
Mailing horses to: ['a_person@host.com']

What would you like to do? (add, count, send, display, exit) exit
Goodbye
```

#### Implementation Details

* Begin by completing the Person class. The person class represents each person your company is tracking. __name__ represents the person's name, __email__ represents their email, and __hobbies__ is a list of strings representing the things you know this person is interseted in. The list may be empty but there should never be repeats (you don't want the same hobby for the same person listed twice). While it is possible for many people to have the same __name__ and __hobbies__, we will assume that each __email__ is unique. That is, only one person can have a specific email address.

```python
class Person:

  def __init__(self, name, email, hobbies):
    # finish

  def __str__(self):
   # finish
```

* Next, complete the 4 methods in the Mailer class. These will be used to create and interact with a list of people. They are described in more detail below.

```python
class Mailer:

  def __init__(self):
    self.people = []

  def __str__(self):
    return '\n'.join(str(p) for p in self.people)
  
  def send_hobby_mailer(self, hobby):
    # finish
  
  def count_hobbies(self):
    # finish
  
  def already_present(self, check):
    # finish

  def add_person(self, check):
    # finish
```

* In __send_hobby_mailer__ create a list of emails that contain all the people who you know are interested in that hobby. Print the list.

* In __count_hobbies__ print each hobby and the number of people who have it as a hobby. This will let you determine which products your company should carry.

* __already_present__ has one parameter check that is of type Person. This function determines whether this person is already in our mailing list. If they are not in our mailing list, print a message and return None. If they are in our mailing list, print a message and return the person.

* __add_person__ has one parameter check that is of type Person. This function does one of two actions. If the person is not in the mailing list, add them to the mailing list. If the person is already in the mailing list, we don't want to add them again. Instead, add the hobbies listed to their already identified hobbies to create a new, possibly longer list of hobbies. Be careful to not add any hobbies that are already in the list.

Below if an example of the functionality of the four functions.

```python
> mailer = Mailer()
> mailer.add_person(Person('Alice', 'a_dog@host.com', ['dogs', 'animals']))

a_dog@host.com is not in our list
a_dog@host.com has been added to our list

> mailer.add_person(Person('Bob', 'knitting@host.com', ['knitting', 'surfing', 'painting']))

knitting@host.com is not in our list
knitting@host.com has been added to our list

> mailer.add_person(Person('Carlos', 'filmbuff@host.com', ['movies']))

filmbuff@host.com is not in our list
filmbuff@host.com has been added to our list

> mailer.add_person(Person('Daisy', 'soccerfan@host.com', ['soccer', 'tennis', 'dogs']))

soccerfan@host.com is not in our list
soccerfan@host.com has been added to our list

> mailer.add_person(Person('Eva', 'everything@host.com', ['surfing', 'movies', 'knitting', 'animals']))

everything@host.com is not in our list
everything@host.com has been added to our list

> print(mailer)

a_dog@host.com Alice ['dogs', 'animals']
knitting@host.com Bob ['knitting', 'surfing', 'painting']
filmbuff@host.com Carlos ['movies']
soccerfan@host.com Daisy ['soccer', 'tennis', 'dogs']
everything@host.com Eva ['surfing', 'movies', 'knitting', 'animals']

> mailer.add_person(Person('Bob', 'another_bob@host.com', ['cats', 'tennis']))

another_bob@host.com is not in our list
another_bob@host.com has been added to our list

> mailer.add_person(Person('Bob', 'knitting@host.com', ['surfing', 'animals', 'poetry']))

knitting@host.com is already in our list
Added animals to knitting@host.com' hobbies
Added poetry to knitting@host.com' hobbies

> print(mailer)

a_dog@host.com Alice ['dogs', 'animals']
knitting@host.com Bob ['knitting', 'surfing', 'painting', 'animals', 'poetry']
filmbuff@host.com Carlos ['movies']
soccerfan@host.com Daisy ['soccer', 'tennis', 'dogs']
everything@host.com Eva ['surfing', 'movies', 'knitting', 'animals']
another_bob@host.com Bob ['cats', 'tennis']

> mailer.count_hobbies()

Hobby Results
{'dogs': 2, 'animals': 3, 'knitting': 2, 'surfing': 2, 'painting': 1,
'poetry': 1, 'movies': 2, 'soccer': 1, 'tennis': 2, 'cats': 1}

> mailer.send_hobby_mailer('animals')

Mailing animals to: ['a_dog@host.com', 'knitting@host.com', 'everything@host.com']

> mailer.send_hobby_mailer('tennis')

Mailing tennis to: ['soccerfan@host.com', 'another_bob@host.com']

> mailer.send_hobby_mailer('unique')

Mailing unique to: []
```

* Finally, create a loop that allows a user to enter commands __add__, __count__, __send__, __display__, __exit__ to interact with the code you have already created.

#### Challenge

This section contains additional components you can add to the project. These should only be attempted after the project has been completed.

* As in previous projects, change the looping code so that all typed information can be done at once, instead of spread over multiple lines

* Create a new function __send_hobby_mailer_any__. The hobby parameter in this function is a list of hobbies. Create a list of emails that includes a person if they enjoy ANY of the hobbies listed. Modify the loop to allow this option to be selected.

* Create a new function __send_hobby_mailer_all__. The hobby parameter in this function is a list of hobbies. Create a list of emails that includes a person if they enjoy ALL of the hobbies listed. Modify the loop to allow this option to be selected.

#### Super Challenge

The super challenge will require knowledge that has not been taught yet. You will need to do additional research on your own. Good luck!

A common problem that data engineers face is unclean data. That is, data that is not perfectly entered by the user. For example, capitialization does not matter in an email address. My_email@host.com and my_email@host.com will go to the same place. Punctuation like periods also does not matter. MyEmail@host.com and My.Email@host.com will go to the same place. Right now, your code cannot tell the difference between these two and will treat them as different people.

Part of a data engineer's job is to clean all data inputs. Clean all of the emails in your program as they are entered. Standardize how they are stored so that you can now tell if unclean data entrees like those above are actually the same address. What other types of mistakes might a user make? Try to fix those as well!

## Rubric

<!-- this project will require a lot of the same skills as the previous projects they have not included them here, as the expectation is they have already been mastered)-->

Student Name: ______________________ Date: _________________________

### The Student can create a class and an instance (7.01, 7.02)

| 3 | 2 | 1 | 0 |Points|
|:--:|:--:|:--:|:--:|:--:|
| Student creates classes correctly| Student usually creates classes correctly| Student attempts to create classes| No evidence that the student can create classes | 3 |
| Student correctly creates instances of a class| Student usually creates and instance of a class correctly| Student attempts to create a class| No evidence that the student can create a instance of a class|3 |
| Student instantiates a class with arguments  |__| Student attempts to instantiate a class with arguments| No evidence the student can instantiate a class with arguments|3
|Student always adds attributes to an instance correctly |  Student usually adds attributes to an instance correctly| Student attempts to add attributes to an instance| No evidence the student can add attributes to an instance|2|
||||**Sub Total**||

### The student can create methods for classes

| 3 | 2 | 1 | 0 |Points|
|:--:|:--:|:--:|:--:|:--:|
| Student always uses the `self` argument correctly| Student usually uses the `self` argument correctly| Student attempts to use the `self` argument| There is no evidence Student can use the `self` argument|3|
|Student correctly uses the `__str__` method||Student attempts to use the `__str__` method|  No evidence Student can use the `__str__` method|0|
||||**Sub Total**||

### The student can correctly use inheritance

| 3 | 2 | 1 | 0 |Points|
|:--:|:--:|:--:|:--:|:--:|
| Student uses inheritance correctly | __| Student attempts to use inheritance| No evidence that the student can use inheritance correctly|3|
||||**Sub Total**||

### Student can decompose a problem to create a program from a brief

|3 |2 |1 |0 |Points
|:-:|:-:|:-:|:-:|:-:|
|Student program runs without error |  The students program has a few errors, but it does not impact the program's functionality | Student program has errors that impact the program's functionality | Student program is not functional |2|
| __ |  Students submitted documentation showing planning for most variables and functions.| Students submitted documentation showing planning for a few variables and functions.| No evidence of planning|2|
||||**Sub Total**||

### Student uses naming/ syntax conventions and comments to increase readability

|2 |1 |0 |Points |
|:-:|:-:|:-:|:-:|
|Syntax conventions are generally used | Sometimes syntax conventions are used| No evidence of syntax conventions to aid in code readability|2|
| All variables have clear names| Some variables have clear names| No evidence of using variable names to aid in code read ability|2|
|__| Student comments aid code readability| No evidence of using comments to aid in code readability.|1|
|||**Sub Total**||

### Final Grade

| Points Possible | Points Earned x Weight | total Points|
|:-:|:-:|:-:|
| 28 | ___ X ___||

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="d" markdown="1">
**1. Why should you do class design before you begin coding a project like this?**

- Planning removes the need for testing
- Python requires a design document to run
- Designs cannot change once written
- Deciding which classes, attributes, and methods you need first helps you organize the code and avoid rework

<p class="why">Thinking through the classes up front makes the coding steps clearer and reduces rewrites.</p>
</div>

<div class="q" data-answer="a" markdown="1">
**2. When several types share the same attributes and methods, how can inheritance help?**

- Put the shared parts in a base class and let child classes inherit and customize them
- Copy and paste the code into each class
- Use one long list instead of classes
- Give every class a different `__init__` name

<p class="why">A parent class avoids repetition, and each child only adds or overrides what differs.</p>
</div>

<div class="q" data-answer="c" markdown="1">
**3. If a child class needs different behavior for one method than its parent, what should it do?**

- Rename the parent class
- Edit the parent class so it breaks for everyone
- Override the method in the child class
- Avoid using that method

<p class="why">Overriding replaces the inherited behavior only for the child.</p>
</div>

</div>

## Downloads

* [Project (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/05_lesson/project.pdf' | relative_url }}{% raw %})
* [Project (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/05_lesson/project.docx' | relative_url }}{% raw %})
* [Alternate Project (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/05_lesson/alternate_project.pdf' | relative_url }}{% raw %})
* [Alternate Project (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/05_lesson/alternate_project.docx' | relative_url }}{% raw %})
* [Rubric (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/05_lesson/rubric.pdf' | relative_url }}{% raw %})
* [Rubric (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/05_lesson/rubric.docx' | relative_url }}{% raw %})
* [Starter code: starter_code.py]({% endraw %}{{ '/docs/lesson_plans/units/7_unit/05_lesson/starter_code.py' | relative_url }}{% raw %})
{% endraw %}
