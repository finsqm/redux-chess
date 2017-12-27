import React from 'react';
import PropTypes from 'prop-types';
import getGrid from './BackgroundGrid';
import getPieces from './Pieces';

import './ChessBoard.css';

const ChessBoard = ({ pieces }) => (
  <div className="chessboard">
    {
      getGrid()
    }
    {
      getPieces(pieces.black, 'black')
      .concat(getPieces(pieces.white, 'white'))
    }
  </div>
);

ChessBoard.propTypes = {
  pieces: PropTypes.shape({
    black: PropTypes.object,
    white: PropTypes.object,
  }).isRequired,
};

export default ChessBoard;
