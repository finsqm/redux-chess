import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

import types from '../dndTypes';

import './BackgroundGrid.css';

const NCols = 8;
const NRows = 8;
const squareColours = ['dark', 'light'];

const getSquareName = (rowIndex, columnIndex) => {
  const file = String.fromCharCode(97 + columnIndex);
  const rank = (rowIndex + 1).toString();
  const squareName = file + rank;
  return squareName;
};

const Square = ({ rowIndex, columnIndex, connectDropTarget }) => {
  const colourIndex = (rowIndex + columnIndex) % 2;
  const colourClassName = `backgroundgrid__square--${squareColours[colourIndex]}`;
  const squareName = getSquareName(rowIndex, columnIndex);
  const style = {
    gridArea: squareName,
  };
  const jsx = (
    <div
      className={`backgroundgrid__square ${colourClassName}`}
      key={squareName}
      id={squareName}
      style={style}
    />
  );
  return connectDropTarget(jsx);
};

Square.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
};

const spec = {
  drop(props, monitor) {
    if (monitor.didDrop()) {
      return {};
    }
    return { square: getSquareName(props.rowIndex, props.columnIndex) };
  },
};

const collect = connect => (
  {
    connectDropTarget: connect.dropTarget(),
  }
);

const DropSquare = DropTarget([types.PIECE_TYPE], spec, collect)(Square);

const getRow = (rowIndex, nCols) => {
  const cols = [...Array(nCols).keys()];
  return (
    cols.map(columnIndex => (
      <DropSquare rowIndex={rowIndex} columnIndex={columnIndex} />
    ))
  );
};

const getGrid = () => {
  const rowIndices = [...Array(NRows).keys()];
  return (
    rowIndices.map(rowId => getRow(rowId, NCols))
  );
};

export default getGrid;
