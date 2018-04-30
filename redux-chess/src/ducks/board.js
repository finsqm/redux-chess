import { createAction, handleAction } from 'redux-actions';
import forOwn from 'lodash/forOwn';

const MOUNT_POINT = 'board';

export const PIECES = ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king'];

// Actions
export const MOVE_PIECE = 'redux-chess/board/MOVE_PIECE';

// Action Creators
export const movePiece = createAction(MOVE_PIECE);

// Reducer
const initialState = {
  pieces: {
    white: {
      queen: 'd1',
      king: 'e1',
      pawn0: 'a2',
      pawn1: 'b2',
      pawn2: 'c2',
      pawn3: 'd2',
      pawn4: 'e2',
      pawn5: 'f2',
      pawn6: 'g2',
      pawn7: 'h2',
      rook0: 'a1',
      rook1: 'h1',
      knight0: 'b1',
      knight1: 'g1',
      bishop0: 'c1',
      bishop1: 'f1',
    },
    black: {
      queen: 'd8',
      king: 'e8',
      pawn0: 'a7',
      pawn1: 'b7',
      pawn2: 'c7',
      pawn3: 'd7',
      pawn4: 'e7',
      pawn5: 'f7',
      pawn6: 'g7',
      pawn7: 'h7',
      rook0: 'a8',
      rook1: 'h8',
      knight0: 'b8',
      knight1: 'g8',
      bishop0: 'c8',
      bishop1: 'f8',
    },
  },
};

const reducer = handleAction(MOVE_PIECE, (
  state,
  {
    payload:
    {
      player,
      pieceId,
      square,
    },
  },
) => (
  {
    ...state,
    pieces:
      {
        ...state.pieces,
        [player]:
          {
            ...state.pieces[player],
            [pieceId]: square,
          },
      },
  }
), initialState);

export default reducer;

export const getLocationOfPieces = state => (
  state[MOUNT_POINT].pieces
);

export const getLocationOfPiece = (pieceId, player, state) => (
  state[MOUNT_POINT].pieces[player][pieceId]
);

// Assumes only one piece in each square
export const getPieceInLocation = (location, state) => {
  const things = {};
  forOwn(state[MOUNT_POINT].pieces, (value, key) => {
    const player = key;
    forOwn(value, (position, pieceId) => {
      if (location === position) {
        things.player = player;
        things.pieceId = pieceId;
      }
    });
  });
  return things;
};
