"""
Chess game
"""

from tkinter import Tk
from board import Board
from players import Players, switch_player

def validate_move(board, player, move):
    """
    Check whether move is allowed
    """
    return True

def take_turn(board, player):
    """
    Simulate a player's turn
    """
    # Get user/agent input
    move = 'Bxe5'
    validate_move(board, player, move)


def main():
    """
    Main game loop
    """
    board = Board()
    running = True
    current_player = Players.WHITE
    master = Tk()

    board.draw_board(master)

    while running:
        take_turn(board, current_player)
        current_player = switch_player(current_player)
        master.update_idletasks()
        master.update()

main()
