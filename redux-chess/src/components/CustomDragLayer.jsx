import React from 'react';
import { DragLayer } from 'react-dnd';
import { svgs } from './Pieces';

import './CustomDragLayer.css';

const getStyles = (offset) => {
  if (!offset) {
    return {
      display: 'none',
    };
  }
  const { x, y } = offset;
  const transform = `translate(${x}px, ${y}px)`;
  const styles = {
    transform,
    WebkitTransform: transform,
    position: 'fixed',
    pointerEvents: 'none',
  };
  return styles;
};

const renderPiece = (item, offset) => {
  const { player, piece } = item;
  const pieceName = piece.replace(/\d/, '');
  const styles = getStyles(offset);
  return (
    <div style={styles}>
      <img
        src={svgs[player][pieceName]}
        alt={pieceName}
        className="draglayer__piece"
      />
    </div>
  );
};

const CustomDragLayer = ({ item, isDragging, offset }) => (
  isDragging ? renderPiece(item, offset) : null
);

const collect = monitor => ({
  isDragging: monitor.isDragging(),
  item: monitor.getItem(),
  offset: monitor.getSourceClientOffset(),
});

export default DragLayer(collect)(CustomDragLayer);
