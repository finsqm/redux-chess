"""
Players enum (white or black)
"""

from enum import Enum

class Players(Enum):
    """
    Enum for players
    """
    NEITHER = 0
    WHITE = 1
    BLACK = 2

def switch_player(current_player):
    switch = {
        Players.WHITE: Players.BLACK,
        Players.BLACK: Players.WHITE
    }
    return switch[current_player]
