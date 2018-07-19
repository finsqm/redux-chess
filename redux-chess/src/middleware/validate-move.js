import isEmpty from 'lodash/isEmpty';

import { PIECES, MOVE_PIECE, getPieceInLocation, getLocationOfPiece } from '../ducks/board';
import isValidActionForBishop from './rules/bishop';
import isValidActionForPawn from './rules/pawn';
import isValidActionForKing from './rules/king';
import isValidActionForKnight from './rules/knight';
import isValidActionForRook from './rules/rook';
import isValidActionForQueen from './rules/queen';
import { isPathBlocked } from './rules/utils';

const isValidActionByPieceType = {
  pawn: isValidActionForPawn,
  knight: isValidActionForKnight,
  bishop: isValidActionForBishop,
  rook: isValidActionForRook,
  queen: isValidActionForQueen,
  king: isValidActionForKing,
};

const isValidAction = ({ payload }, state) => {
  const { player, pieceId, square } = payload;
  const pieceInSquare = getPieceInLocation(square, state);
  const isOccupied = !isEmpty(pieceInSquare);
  const isCapturing = isOccupied && pieceInSquare.player !== player;
  if (isOccupied && !isCapturing) {
    // Square occupied by player's own piece
    return false;
  }
  const oldLocation = getLocationOfPiece(pieceId, player, state);
  if (isPathBlocked(oldLocation, square, state, player)) {
    return false;
  }
  const pieceType = PIECES.filter(p => pieceId.includes(p))[0];
  return isValidActionByPieceType[pieceType](oldLocation, square, player, isCapturing);
};

const validateMove = ({ getState }) => next => (action) => {
  if (action.type !== MOVE_PIECE) {
    next(action);
  }
  const state = getState();
  if (isValidAction(action, state)) {
    next(action);
  }
};

export default validateMove;
