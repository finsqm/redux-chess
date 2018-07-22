import isValidActionForKing from './king';

test('should validate real king moves for white', () => {
  const validKingMoves = [
    [
      'b2',
      'a1',
    ],
    [
      'b2',
      'a2',
    ],
    [
      'b2',
      'a3',
    ],
    [
      'b2',
      'c1',
    ],
    [
      'b2',
      'c2',
    ],
    [
      'b2',
      'c3',
    ],
    [
      'b2',
      'b1',
    ],
    [
      'b2',
      'b3',
    ],
  ];
  validKingMoves.forEach((move) => {
    expect(isValidActionForKing(move[0], move[1], 'white', false)).toBeTruthy();
  });
});

test('should invaldiate illegal king moves for white', () => {
  const illegalKingMoves = [
    [
      'b2',
      'd1',
    ],
    [
      'b2',
      'b8',
    ],
  ];
  illegalKingMoves.forEach((move) => {
    expect(isValidActionForKing(move[0], move[1], 'white', false)).toBeFalsy();
  });
});
