import { range, zip } from 'lodash';

import { getChessFromCartesian, getCartesianFromChess, getLocationByTranslation } from './utils';

const correctMappings = [
  [1, 1, 'a1'],
  [2, 2, 'b2'],
  [3, 3, 'c3'],
  [8, 8, 'h8'],
  [1, 8, 'a8'],
  [8, 1, 'h1'],
];

test('getChessFromCartesian converts from coordinates to chess notation', () => {
  correctMappings.forEach(xs =>
    expect(getChessFromCartesian(xs[0], xs[1])).toBe(xs[2]));
});

test('getChessFromCartesian doesnt return a value that is out of range', () => {
  const xs = range(1, 9);
  const ys = range(1, 9);
  const coords = zip(xs, ys);
  coords.forEach((coord) => {
    const [file, rank] = getChessFromCartesian(coord[0], coord[1]);
    expect(file.charCodeAt(0)).toBeLessThanOrEqual('h'.charCodeAt(0));
    expect(file.charCodeAt(0)).toBeGreaterThanOrEqual('a'.charCodeAt(0));
    expect(parseInt(rank, 10)).toBeLessThanOrEqual(8);
    expect(parseInt(rank, 10)).toBeGreaterThanOrEqual(1);
  });
});

test('getCartesianFromChess converts from chess notation to coords', () => {
  correctMappings.forEach(xs =>
    expect(getCartesianFromChess(xs[2])).toEqual({
      x: xs[0],
      y: xs[1],
    }));
});

test('getCartestianFromChess doesnt go out of range', () => {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = range(1, 9).map(rank => rank.toString());
  files.forEach((file) => {
    ranks.forEach((rank) => {
      const chessCoord = `${file}${rank}`;
      const coord = getCartesianFromChess(chessCoord);
      expect(coord.x).toBeLessThanOrEqual(8);
      expect(coord.x).toBeGreaterThanOrEqual(1);
      expect(coord.y).toBeLessThanOrEqual(8);
      expect(coord.y).toBeGreaterThanOrEqual(1);
    });
  });
});

test('getLocationByTranslation translates properly', () => {
  const translations = [
    {
      start: 'a1',
      x: 0,
      y: 0,
      end: 'a1',
    },
    {
      start: 'a1',
      x: 7,
      y: 7,
      end: 'h8',
    },
    {
      start: 'h8',
      x: -7,
      y: -7,
      end: 'a1',
    },
    {
      start: 'a8',
      x: 0,
      y: -7,
      end: 'a1',
    },
  ];
  translations.forEach((t) => {
    expect(getLocationByTranslation(t.start, t.x, t.y))
      .toEqual(t.end);
  });
});
