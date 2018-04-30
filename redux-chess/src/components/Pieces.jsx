import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import types from '../dndTypes';

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

export const svgs = {
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

const Piece = (props) => {
  props.connectDragPreview(getEmptyImage(), {
    captureDraggingState: true,
  });
  const style = {
    gridArea: props.square,
  };
  const id = `${props.player}-${props.piece}`;
  const pieceName = props.piece.replace(/\d/, '');
  const jsx = (
    <img
      src={svgs[props.player][pieceName]}
      alt={id}
      key={id}
      style={style}
      className={`piece piece--${pieceName}`}
    />
  );
  return props.connectDragSource(jsx);
};

Piece.propTypes = {
  square: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  piece: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

const spec = {
  beginDrag(props) {
    return {
      id: `${props.player}-${props.piece}`,
      player: props.player,
      piece: props.piece,
    };
  },
  endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }
    const dropResult = monitor.getDropResult();
    props.onDrop(dropResult.square);
  },
};

const collect = (connect, monitor) => (
  {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
);

const DraggablePiece = DragSource(types.PIECE_TYPE, spec, collect)(Piece);

const getPieces = (locations, player, movePiece) => (
  pieces.map(piece => (
    <DraggablePiece
      piece={piece}
      player={player}
      square={locations[piece]}
      key={`${player}-${piece}`}
      onDrop={
        square => movePiece(player, piece, square)
      }
    />
  ))
);

export default getPieces;
