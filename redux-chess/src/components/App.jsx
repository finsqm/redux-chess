import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Chess from './containers/Chess';

import './App.css';

const App = () => (
  <div className="App">
    <Chess />
  </div>
);

export default DragDropContext(HTML5Backend)(App);
