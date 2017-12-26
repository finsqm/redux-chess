"""
Chess moves
"""

import re

class Move:
    """
    Class representing chess move
    """
    def __init__(self, start_pos, end_pos):
        self.start_pos = start_pos
        self.end_pos = end_pos
