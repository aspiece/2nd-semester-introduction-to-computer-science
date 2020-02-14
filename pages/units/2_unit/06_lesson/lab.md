# Lab 2.06 - Tic-Tac-Toe Revisited

## 1. In your Notebook

### Predict what will be printed then type the program in your consol to confirm

### Example 1

```python
    a = 0
    while a < 10:
        print(a)
```

| **Predicted Output** | **Actual Output** |
| --- | --- |
|<br> |<br> |

### Example 2

```python
    a = 0
    while a < 10:
        a = a + 1
        print(a)
```

| **Predicted Output** | **Actual Output** |
| --- | --- |
|<br> |<br> |

## 2. In your Notebook

### Create a set of test cases for the following sample code and predict the behavior

```python
    a = input("Would you like to quit: ")
    while a != "y" and a != "n" :
        a = input("Would you like to quit: ")
```

| **Predicted Output** | **Actual Output** |
| --- | --- |
|<br> |<br> |

## 3. Implement the Tic Tac Toe game using a while loop

* Allow users to keep playing (max 9 times).
* Use variables to decide whose turn it is, and greet them as Xs or Os.
* User picks a location on the board according to the number:

![tic-tac-toe](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRrA_MowUM-KZXl1CpkrQhi8W505dM3cxZG1787i9qFz8KefqFkIQ)

* Depending on the position user gave, update the corresponding position of the board to reflect that.
* Print the updated board out.
* You will not need to determine the winner at this point.

### Bonus

Create a variable-sized board. So instead of a classic 3 x 3 board, create a way for the user specify the size of the board they want to play with.
