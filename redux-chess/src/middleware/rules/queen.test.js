import isValidActionForQueen from './queen';
import { movePiece } from '../../ducks/board';
import validateMove from '../validate-move';

const validQueenMoves = [
  [
    'a1',
    'a2',
  ],
  [
    'a1',
    'b2',
  ],
  [
    'a1',
    'a8',
  ],
  [
    'a1',
    'h8',
  ],
  [
    'h1',
    'a1',
  ],
  [
    'h1',
    'a8',
  ],
  [
    'e5',
    'f6',
  ],
  [
    'd4',
    'c3',
  ],
];

describe('should validate real queen moves for both players', () => {
  validQueenMoves.forEach((move) => {
    test('for white uncapturing', () => {
      expect(isValidActionForQueen(move[0], move[1], 'white', false)).toBeTruthy();
    });
    test('for black uncapturing', () => {
      expect(isValidActionForQueen(move[0], move[1], 'black', false)).toBeTruthy();
    });
    test('for white capturing', () => {
      expect(isValidActionForQueen(move[0], move[1], 'white', true)).toBeTruthy();
    });
    test('for black capturing', () => {
      expect(isValidActionForQueen(move[0], move[1], 'black', true)).toBeTruthy();
    });
  });
});

const invalidQueenMoves = [
  [
    'a1',
    'd2',
  ],
  [
    'a1',
    'b8',
  ],
  [
    'a1',
    'f8',
  ],
  [
    'a1',
    'f7',
  ],
];

describe('should invalidate bad queen moves for both players', () => {
  invalidQueenMoves.forEach((move) => {
    test('for white uncapturing', () => {
      expect(isValidActionForQueen(move[0], move[1], 'white', false)).toBeFalsy();
    });
    test('for black uncapturing', () => {
      expect(isValidActionForQueen(move[0], move[1], 'black', false)).toBeFalsy();
    });
    test('for white capturing', () => {
      expect(isValidActionForQueen(move[0], move[1], 'white', true)).toBeFalsy();
    });
    test('for black capturing', () => {
      expect(isValidActionForQueen(move[0], move[1], 'black', true)).toBeFalsy();
    });
  });
});


describe('queens should be blocked by something in their path', () => {
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
            queen: 'a1',
          },
        },
      },
    };
    const { next, invoke } = setup(mockState);
    const attemptedAction = movePiece({
      player: 'white',
      pieceId: 'queen',
      square: 'a3',
    });
    invoke(attemptedAction);
    expect(next).toHaveBeenCalledTimes(0);
  });
});

