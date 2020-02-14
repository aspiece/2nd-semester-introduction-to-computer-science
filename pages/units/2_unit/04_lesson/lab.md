# Lab 2.04 - Food Chooser

## 1. In your notebook

For each example below, predict what will be printed. Next, run the program and confirm what was output.

### Example 1

```python
    a = ['a', 'b', 'c', 'd', 'e']
    print(a[0])
    print(a[3])
```

### Example 2

```python
    a = ['a', 'b', 'c', 'd', 'e']
    print(a[len(a) - 3])
```

### Example 3

```python
    a = ['a', 'b', 'c', 'd', 'e']
    print(a[len(a) - 6])
```

### Example 4

```python
    a = ['a', 'b', 'c', 'd', 'e']
    a[3] = 'haha'
    print(a)
```

## 2. Create this game again using lists and indexes. Updated rules below

* Declare 10 prizes (prize0, prize1, prize2 at the top of your file), but store them all in a list.
* User picks a number.
* Print prize associated with the door user picked.

## 3. Create a quiz

Create a food quiz using lists and indexes.

1. List of 6 different foods
2. Ask the user 8 vague questions to find out what their favorite food it out of the list
3. Update the score and print their top 2 favorite foods

Hint: google how to find the biggest number in a list python

[Starter code here](Starter_food_chooser.py)

## Bonus

Research nested lists and work through the following:

### Bonus Example 1

```python
a = ['a', 'b', 'c', ['d', 'e']]
print(len(a))
```

### Bonus Example 2

```python
a = ['a', 'b', 'c', ['d', 'e']]
b = a[3]
print(b)
```

### Bonus - In your Notebook

How would you access 'd' from the list `a`?
