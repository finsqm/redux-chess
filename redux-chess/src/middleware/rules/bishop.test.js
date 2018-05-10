import isValidActionForBishop from './bishop';
import { movePiece } from '../../ducks/board';
import validateMove from '../validate-move';

const validBishopMoves = [
  [
    'd3',
    'e4',
  ],
  [
    'd3',
    'f5',
  ],
  [
    'd3',
    'c4',
  ],
  [
    'd3',
    'b5',
  ],
  [
    'd3',
    'e2',
  ],
  [
    'd3',
    'f1',
  ],
  [
    'd3',
    'c2',
  ],
  [
    'd3',
    'b1',
  ],
];


describe('should validate real bishop moves for both players', () => {
  validBishopMoves.forEach((move) => {
    test('for white uncapturing', () => {
      expect(isValidActionForBishop(move[0], move[1], 'white', false)).toBeTruthy();
    });
    test('for black uncapturing', () => {
      expect(isValidActionForBishop(move[0], move[1], 'black', false)).toBeTruthy();
    });
    test('for white capturing', () => {
      expect(isValidActionForBishop(move[0], move[1], 'white', true)).toBeTruthy();
    });
    test('for black capturing', () => {
      expect(isValidActionForBishop(move[0], move[1], 'black', true)).toBeTruthy();
    });
  });
});

describe('bishops should be blocked by something in their path', () => {
  const setup = (mockState) => {
    const store = {
      getState() { return mockState; },
      dispatch: jest.fn(),
    };
    const next = jest.fn();
    const invoke = action => validateMove(store)(next)(action);
    return { store, next, invoke };
  };
  test('blocked to NW', () => {
    const mockState = {
      board: {
        pieces: {
          white: {
            pawn0: 'e5',
            bishop0: 'd4',
          },
        },
      },
    };
    const { next, invoke } = setup(mockState);
    const attemptedAction = movePiece({
      player: 'white',
      pieceId: 'bishop0',
      square: 'f6',
    });
    invoke(attemptedAction);
    expect(next).toHaveBeenCalledTimes(0);
  });
});
