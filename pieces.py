"""
Chess pieces class
"""

from enum import Enum

class Pieces(Enum):
    """
    Enum for chess pieces
    """
    EMPTY = 0
    PAWN = 1
    KNIGHT = 2
    BISHOP = 3
    ROOK = 4
    QUEEN = 5
    KING = 6
