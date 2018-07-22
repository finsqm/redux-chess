import isValidActionForRook from './rook';
import { movePiece } from '../../ducks/board';
import validateMove from '../validate-move';

const validRookMoves = [
  [
    'a1',
    'a2',
  ],
  [
    'a1',
    'b1',
  ],
  [
    'a1',
    'a8',
  ],
  [
    'a1',
    'h1',
  ],
  [
    'h1',
    'a1',
  ],
  [
    'h1',
    'h8',
  ],
  [
    'e5',
    'e6',
  ],
  [
    'd4',
    'c4',
  ],
];


describe('should validate real rook moves for both players', () => {
  validRookMoves.forEach((move) => {
    test('for white uncapturing', () => {
      expect(isValidActionForRook(move[0], move[1], 'white', false)).toBeTruthy();
    });
    test('for black uncapturing', () => {
      expect(isValidActionForRook(move[0], move[1], 'black', false)).toBeTruthy();
    });
    test('for white capturing', () => {
      expect(isValidActionForRook(move[0], move[1], 'white', true)).toBeTruthy();
    });
    test('for black capturing', () => {
      expect(isValidActionForRook(move[0], move[1], 'black', true)).toBeTruthy();
    });
  });
});

describe('rooks should be blocked by something in their path', () => {
  const setup = (mockState) => {
    const store = {
      getState() { return mockState; },
      dispatch: jest.fn(),
    };
    const next = jest.fn();
    const invoke = action => validateMove(store)(next)(action);
    return { store, next, invoke };
  };
  test('blocked to get past the pawn', () => {
    const mockState = {
      board: {
        pieces: {
          white: {
            pawn0: 'a2',
            rook0: 'a1',
          },
        },
      },
    };
    const { next, invoke } = setup(mockState);
    const attemptedAction = movePiece({
      player: 'white',
      pieceId: 'rook0',
      square: 'a3',
    });
    invoke(attemptedAction);
    expect(next).toHaveBeenCalledTimes(0);
  });
});
