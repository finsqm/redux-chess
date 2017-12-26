import React from 'react';
import './BackgroundGrid.css';

const NCols = 8;
const NRows = 8;
const squareColours = ['dark', 'light'];

const getSquare = (rowIndex, columnIndex) => {
  const colourIndex = (rowIndex + columnIndex) % 2;
  const colourClassName = `backgroundgrid__square--${squareColours[colourIndex]}`;
  const file = String.fromCharCode(97 + columnIndex);
  const rank = (rowIndex + 1).toString();
  const squareName = file + rank;
  const style = {
    gridArea: squareName,
  };
  return (
    <div
      className={`backgroundgrid__square ${colourClassName}`}
      key={squareName}
      id={squareName}
      style={style}
    />
  );
};

const getRow = (rowIndex, nCols) => {
  const cols = [...Array(nCols).keys()];
  return (
    cols.map(columnIndex => getSquare(rowIndex, columnIndex))
  );
};

const getGrid = () => {
  const rowIndices = [...Array(NRows).keys()];
  return (
    rowIndices.map(rowId => getRow(rowId, NCols))
  );
};

export default getGrid;
