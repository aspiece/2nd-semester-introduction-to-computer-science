"""Functions to help display a paginated list. You do not need to modify this file.

Pages are numbered starting at 0. Indexes refer to positions in a list.
"""


def first_index(page_number, page_size):
    """Index of the first item on the given page."""
    return page_number * page_size


def last_index(page_number, page_size, total_items):
    """Index just past the last item on the given page."""
    return min(first_index(page_number, page_size) + page_size, total_items)


def next_page_number(page_number, page_size, total_items):
    """The next page, or the current page if already on the last one."""
    if first_index(page_number + 1, page_size) < total_items:
        return page_number + 1
    return page_number


def previous_page_number(page_number):
    """The previous page, or page 0 if already on the first one."""
    return max(page_number - 1, 0)
