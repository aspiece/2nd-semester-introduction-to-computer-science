"""Functions related to search criteria.

Criteria are a dictionary of lists. Each key is an attribute name and each
value is the list of acceptable values for that attribute. A missing key
means any value is acceptable.

    my_criteria = {'brand': ['Samsonite'], 'material': ['nylon', 'plastic']}
"""


def filter_items(criteria, items):
    """Return the list of items that satisfy every attribute in criteria."""
    print("filter_items() not implemented")
    return items


def criteria_to_string(criteria):
    """Return a printable description of the current filters.

    Example:
        Current filters:
        brand: Samsonite
        material: nylon, plastic
    """
    return "criteria_to_string() not implemented"
