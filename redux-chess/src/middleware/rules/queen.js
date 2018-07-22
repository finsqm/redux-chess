import isValidActionForRook from './rook';
import isValidActionForBishop from './bishop';

const isValidActionForQueen = (pastLocation, newLocation, player) => (
  isValidActionForRook(pastLocation, newLocation, player) ||
  isValidActionForBishop(pastLocation, newLocation, player)
);

export default isValidActionForQueen;
