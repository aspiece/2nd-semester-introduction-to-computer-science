"""Functions related to representing shopping items as python dictionaries."""

import pages


def load_items(filename):
    """Read a CSV file and return a list of dictionaries, one per item.

    The first line of the file names the attributes. Every other line holds
    the values for one item, in the same order. All values stay strings.
    """
    print("load_items() not implemented")
    return []


def item_to_string(item):
    """Return a printable description of one item (an umbrella dictionary).

    Example:
        Samsonite polyester compact umbrella.
             Automatic Open and close, Clear. 2 stars. $8.99
    If the umbrella is not automatic (its 'auto' value is empty), leave out
    the word "Automatic" and the auto value.
    """
    return "item_to_string() not implemented"


def print_page(items, page_number, page_size):
    """Print one numbered page of items. You do not need to modify this."""
    first = pages.first_index(page_number, page_size)
    last = pages.last_index(page_number, page_size, len(items))
    print()
    print("Showing items", first + 1, "-", last, "of", len(items), "items")
    print()
    for index in range(first, last):
        print("%3d) %s" % (index + 1, item_to_string(items[index])))
    print()
