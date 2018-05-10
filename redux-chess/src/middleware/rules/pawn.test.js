import isValidActionForPawn from './pawn';

test('should validate real pawn moves for white', () => {
  const validPawnMoves = [
    [
      'a2',
      'a3',
    ],
    [
      'a2',
      'a4',
    ],
  ];
  validPawnMoves.forEach((move) => {
    expect(isValidActionForPawn(move[0], move[1], 'white', false)).toBeTruthy();
  });
});

test('should invaldiate illegal pawn moves for white', () => {
  const illegalPawnMoves = [
    [
      'a2',
      'a1',
    ],
    [
      'a1',
      'b1',
    ],
  ];
  illegalPawnMoves.forEach((move) => {
    expect(isValidActionForPawn(move[0], move[1], 'white', false)).toBeFalsy();
  });
});

test('should invaldiate illegal pawn moves for black', () => {
  const illegalPawnMoves = [
    [
      'a1',
      'a2',
    ],
    [
      'a1',
      'b1',
    ],
  ];
  illegalPawnMoves.forEach((move) => {
    expect(isValidActionForPawn(move[0], move[1], 'black', false)).toBeFalsy();
  });
});

test('should validate real pawn moves for black', () => {
  const validPawnMoves = [
    [
      'a7',
      'a6',
    ],
    [
      'a7',
      'a5',
    ],
  ];
  validPawnMoves.forEach((move) => {
    expect(isValidActionForPawn(move[0], move[1], 'black', false)).toBeTruthy();
  });
});

test('should validate capture for white', () => {
  const validCaptures = [
    [
      'a2',
      'b3',
    ],
    [
      'b2',
      'a3',
    ],
  ];
  validCaptures.forEach((move) => {
    expect(isValidActionForPawn(move[0], move[1], 'white', true))
      .toBeTruthy();
  });
});

test('should validate capture for black', () => {
  const validCaptures = [
    [
      'a7',
      'b6',
    ],
    [
      'a7',
      'b6',
    ],
  ];
  validCaptures.forEach((move) => {
    expect(isValidActionForPawn(move[0], move[1], 'black', true))
      .toBeTruthy();
  });
});
