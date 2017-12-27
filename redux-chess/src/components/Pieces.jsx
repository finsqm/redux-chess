import React from 'react';
import { DragSource } from 'react-dnd';

import './Pieces.css';

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

const pawns = Array(8).fill('pawn').map((piece, i) => (`${piece}${i}`));
const rooks = Array(2).fill('rook').map((piece, i) => (`${piece}${i}`));
const knights = Array(2).fill('knight').map((piece, i) => (`${piece}${i}`));
const bishops = Array(2).fill('bishop').map((piece, i) => (`${piece}${i}`));
const pieces = [
  'queen',
  'king',
].concat(
  pawns,
  rooks,
  knights,
  bishops,
);

const Piece = (piece, player, square) => {
  const style = {
    gridArea: square,
  };
  const id = `${player}-${piece}`;
  const pieceName = piece.replace(/\d/, '');
  return (
    <img
      src={svgs[player][pieceName]}
      alt={id}
      key={id}
      style={style}
      className={`piece piece--${pieceName}`}
    />
  );
};

const getPieces = (locations, player) => (
  pieces.map(piece => (
    <Piece
      piece={piece}
      player={player}
      square={locations[piece]}
    />
  ))
);

export default getPieces;
