import React from 'react';
import getGrid from './BackgroundGrid';
import getPieces from './Pieces';

import './ChessBoard.css';

const ChessBoard = () => (
  <div className="chessboard">
    {getGrid()}
    {getPieces('black').concat(getPieces('white'))}
  </div>
);

export default ChessBoard;
