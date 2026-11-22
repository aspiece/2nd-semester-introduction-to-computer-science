"""Utilities for manipulating dictionaries."""


def union_of_dictionaries(dictionaries):
    """Combine a list of dictionaries into one dictionary.

    The result has every key that appears in any of the dictionaries. Each
    key maps to a list of all of the distinct values seen for that key.

    Example:
        [{'a': '1', 'b': '2'}, {'a': '3'}]  ->  {'a': ['1', '3'], 'b': ['2']}
    """
    print("union_of_dictionaries() not implemented")
    return {}
