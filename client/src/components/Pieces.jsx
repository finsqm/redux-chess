import React from 'react';

import blackBishop from './sprites/black_bishop.svg';
import blackKing from './sprites/black_king.svg';
import blackKnight from './sprites/black_knight.svg';
import blackPawn from './sprites/black_pawn.svg';
import blackQueen from './sprites/black_queen.svg';
import blackRook from './sprites/black_rook.svg';

import whiteBishop from './sprites/white_bishop.svg';
import whiteKing from './sprites/white_king.svg';
import whiteKnight from './sprites/white_knight.svg';
import whitePawn from './sprites/white_pawn.svg';
import whiteQueen from './sprites/white_queen.svg';
import whiteRook from './sprites/white_rook.svg';

const svgs = {
  black: {
    bishop: blackBishop,
    king: blackKing,
    knight: blackKnight,
    pawn: blackPawn,
    queen: blackQueen,
    rook: blackRook,
  },
  white: {
    bishop: whiteBishop,
    king: whiteKing,
    knight: whiteKnight,
    pawn: whitePawn,
    queen: whiteQueen,
    rook: whiteRook,
  },
};

const pawns = Array(8).fill('pawn');
const rooks = Array(2).fill('rook');
const knights = Array(2).fill('knight');
const bishops = Array(2).fill('bishop');
const pieces = [
  'queen',
  'king',
].concat(
  pawns,
  rooks,
  knights,
  bishops,
);

const renderPiece = (piece, player) => {
  const style = {
    gridArea: 'a1',
  };
  const id = `${player}-${piece}`;
  return (
    <img
      src={svgs[player][piece]}
      alt={id}
      key={id}
      style={style}
    />
  );
};

const getPieces = player => (
  pieces.map(piece => renderPiece(piece, player))
);

export default getPieces;
