"""Umbrellas Unlimited: a text-based shopping site.

Run this file to start the program.
"""

import criteria
import dictionaries
import items
import pages
from TEALS_utils import get_valid_integer

PAGE_SIZE = 5
INVENTORY_FILE = "inventory.txt"

WELCOME = """
Welcome to Umbrellas Unlimited, your online market for water
protection. We have over 100 umbrellas for sale. Happy shopping!
"""

HELP = """
Use these commands to navigate our site:

  (n)ext          - view the next page of items
  (p)revious      - view the previous page of items
  (a)dd filter    - narrow your search by adding criteria
  (r)emove filter - broaden your search by deleting criteria
  (m)odify filter - change your search criteria
  (b)uy           - purchase an umbrella from the list shown
  (q)uit          - exit our site
"""

PROMPT = "(b)uy, (n)ext, (p)revious, (a)dd, (r)emove, (m)odify, (h)elp or (q)uit? "


def handle_purchase(shown_items):
    """Ask which item to buy, describe it, and return True to end the program."""
    print("handle_purchase() not implemented")
    return False


def handle_add_criterion(all_items, current_criteria):
    """Ask for an attribute and a value, and add them to current_criteria."""
    print("handle_add_criterion() not implemented")


def handle_remove_criterion(current_criteria):
    """Ask which attribute to stop filtering on, and remove it."""
    print("handle_remove_criterion() not implemented")


def handle_modify_criterion(all_items, current_criteria):
    """Choose an attribute, then toggle one of its values on or off."""
    print("handle_modify_criterion() not implemented")


def main():
    print(WELCOME)
    print(HELP)

    all_items = items.load_items(INVENTORY_FILE)
    current_criteria = {}
    page_number = 0

    while True:
        shown_items = criteria.filter_items(current_criteria, all_items)
        if current_criteria:
            print(criteria.criteria_to_string(current_criteria))
        items.print_page(shown_items, page_number, PAGE_SIZE)

        action = input(PROMPT).strip().lower()
        if action in ("n", "next"):
            page_number = pages.next_page_number(page_number, PAGE_SIZE, len(shown_items))
        elif action in ("p", "previous"):
            page_number = pages.previous_page_number(page_number)
        elif action in ("a", "add"):
            handle_add_criterion(all_items, current_criteria)
            page_number = 0
        elif action in ("r", "remove"):
            handle_remove_criterion(current_criteria)
            page_number = 0
        elif action in ("m", "modify"):
            handle_modify_criterion(all_items, current_criteria)
            page_number = 0
        elif action in ("b", "buy"):
            if handle_purchase(shown_items):
                break
        elif action in ("h", "help"):
            print(HELP)
        elif action in ("q", "quit"):
            break
        else:
            print("Sorry, I don't understand", repr(action))

    print("Thanks for visiting Umbrellas Unlimited!")


if __name__ == "__main__":
    main()
