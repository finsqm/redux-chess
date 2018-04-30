import React from 'react';
import PropTypes from 'prop-types';
import getGrid from './BackgroundGrid';
import getPieces from './Pieces';

import './ChessBoard.css';
import CustomDragLayer from './CustomDragLayer';

const ChessBoard = ({ pieces, movePiece }) => (
  <div className="chessboard">
    {
      getGrid()
    }
    {
      getPieces(pieces.black, 'black', movePiece)
      .concat(getPieces(pieces.white, 'white', movePiece))
    }
    <CustomDragLayer />
  </div>
);

ChessBoard.propTypes = {
  pieces: PropTypes.shape({
    black: PropTypes.object,
    white: PropTypes.object,
  }).isRequired,
  movePiece: PropTypes.func.isRequired,
};

export default ChessBoard;
