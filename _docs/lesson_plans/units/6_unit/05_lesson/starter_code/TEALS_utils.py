"""General utilities for many TEALS labs. You do not need to modify this file."""


def safe_to_integer(text):
    """Convert text to an int. Return None if text is not a valid integer."""
    try:
        return int(text)
    except ValueError:
        return None


def get_valid_integer(prompt, low, high):
    """Keep asking until the user enters an integer from low to high (inclusive)."""
    while True:
        number = safe_to_integer(input(prompt))
        if number is not None and low <= number <= high:
            return number
        print("Please enter a number between", low, "and", high)
