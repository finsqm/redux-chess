import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

import { getPieceInLocation } from '../../ducks/board';

const ASCII_OF_LITTLE_A = 97;
const MIDDLE_OF_BOARD = 4.5;
const flipForBlack = pos => MIDDLE_OF_BOARD - (pos - MIDDLE_OF_BOARD);

export const getChessFromCartesian = (x, y, player) => {
  const newX = player === 'black' ? flipForBlack(x) : x;
  const newY = player === 'black' ? flipForBlack(y) : y;
  const rank = newY.toString();
  const file = String.fromCharCode(newX + (ASCII_OF_LITTLE_A - 1));
  return `${file}${rank}`;
};

export const getCartesianFromChess = (chessLocation, player) => {
  const file = chessLocation[0];
  const rank = chessLocation[1];
  let x = (file.charCodeAt(0) - ASCII_OF_LITTLE_A) + 1;
  let y = parseInt(rank, 10);
  if (player === 'black') {
    x = flipForBlack(x);
    y = flipForBlack(y);
  }
  return { x, y };
};

export const getLocationByTranslation = (location, xShift, yShift, player) => {
  const { x, y } = getCartesianFromChess(location, player);
  const newX = x + xShift;
  const newY = y + yShift;
  return getChessFromCartesian(newX, newY, player);
};

export const getSquaresInBetween = (oldLocation, newLocation, player) => {
  const oldLocationCartesian = getCartesianFromChess(oldLocation, player);
  const newLocationCartesian = getCartesianFromChess(newLocation, player);
  const xDirection = newLocationCartesian.x - oldLocationCartesian.x;
  const yDirection = newLocationCartesian.y - oldLocationCartesian.y;

  const isOnDiagonal = Math.abs(xDirection / yDirection) === 1;
  if (!isOnDiagonal) {
    return [];
  }

  const normX = xDirection / Math.abs(xDirection);
  const normY = yDirection / Math.abs(yDirection);

  const squaresInBetween = [];
  const square = { x: oldLocationCartesian.x, y: oldLocationCartesian.y };
  square.x += normX;
  square.y += normY;
  while (!isEqual(square, newLocationCartesian)) {
    squaresInBetween.push(getChessFromCartesian(square.x, square.y, player));
    square.x += normX;
    square.y += normY;
  }
  return squaresInBetween;
};

export const isPathBlocked = (oldLocation, newLocation, state, player) => {
  const squaresInBetween = getSquaresInBetween(oldLocation, newLocation, player);
  if (squaresInBetween.length === 0) {
    return false;
  }
  const anyEmpty = squaresInBetween.some((square) => {
    const pieceInLocation = getPieceInLocation(square, state);
    return isEmpty(pieceInLocation);
  });
  return !anyEmpty;
};
