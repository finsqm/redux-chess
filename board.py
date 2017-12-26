"""
Chess Board
"""

from tkinter import Canvas
import numpy as np
from pieces import Pieces
from players import Players

# Number of rows/columns
NUMBER_OF_ROWS = 8
NUMBER_OF_COLUMNS = 8

# Dimension of cell in grid (i.e. how much info/features it contains) e.g. BISHOP, WHITE
D = 2

# Size of edge of grid cell when drawn
EDGE_LENGTH = 64

DARK_SQUARE_COLOR = '#58ae8b'
LIGHT_SQUARE_COLOR = '#feffed'

class Board:
    """
    Chess Board
    """
    def __init__(self):
        self._board = np.ndarray((NUMBER_OF_ROWS, NUMBER_OF_COLUMNS, D), dtype=object)
        self._set_up_board()

    def _set_up_board(self):
        """
        Put board into start of game configuration
        """
        for i in [2, 3, 4, 5]:
            self._board[i, :] = np.repeat([[Pieces.EMPTY, Players.NEITHER]], NUMBER_OF_COLUMNS, axis=0)
        for i in [1, 6]:
            players = {
                1: Players.WHITE,
                6: Players.BLACK
            }
            self._board[i, :] = np.repeat([[Pieces.PAWN, players[i]]], NUMBER_OF_COLUMNS, axis=0)
        for i in [0, 7]:
            players = {
                0: Players.WHITE,
                7: Players.BLACK
            }
            for j in [0, 7]:
                self._board[i, j, :] = [Pieces.ROOK, players[i]]
            for j in [1, 6]:
                self._board[i, j, :] = [Pieces.KNIGHT, players[i]]
            for j in [2, 5]:
                self._board[i, j, :] = [Pieces.BISHOP, players[i]]
            self._board[i, 3, :] = [Pieces.QUEEN, players[i]]
            self._board[i, 4, :] = [Pieces.KING, players[i]]

    def print_board(self):
        """
        Print board to std out
        """
        print(np.flipud(self._board))

    def draw_board(self, master):
        """
        Draws GUI board
        """
        width = NUMBER_OF_COLUMNS*EDGE_LENGTH
        height = NUMBER_OF_ROWS*EDGE_LENGTH
        canvas = Canvas(master, width=width, height=height)
        for i in range(NUMBER_OF_ROWS):
            for j in range(NUMBER_OF_COLUMNS):
                colour = [LIGHT_SQUARE_COLOR, DARK_SQUARE_COLOR][(i-j)%2]
                x_1 = i * EDGE_LENGTH
                x_2 = (i * EDGE_LENGTH) + EDGE_LENGTH
                y_1 = (j * EDGE_LENGTH)
                y_2 = (j * EDGE_LENGTH) + EDGE_LENGTH
                canvas.create_rectangle(x_1, y_1, x_2, y_2, fill=colour)
        canvas.pack()
