import isValidActionForKnight from './knight';

const validKnightMoves = [
  [
    'd3',
    'e5',
  ],
  [
    'd3',
    'c5',
  ],
  [
    'd3',
    'e1',
  ],
  [
    'd3',
    'c1',
  ],
  [
    'd3',
    'f4',
  ],
  [
    'd3',
    'b4',
  ],
  [
    'd3',
    'f2',
  ],
  [
    'd3',
    'b2',
  ],
];


test('should validate real knight moves for both players', () => {
  validKnightMoves.forEach((move) => {
    expect(isValidActionForKnight(move[0], move[1], 'white', false)).toBeTruthy();
    expect(isValidActionForKnight(move[0], move[1], 'black', false)).toBeTruthy();
    expect(isValidActionForKnight(move[0], move[1], 'white', true)).toBeTruthy();
    expect(isValidActionForKnight(move[0], move[1], 'black', true)).toBeTruthy();
  });
});
