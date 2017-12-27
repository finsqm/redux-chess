import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css';

ReactDOM.render(React.createElement(
  Provider,
  { store },
  React.createElement(
    App,
    null,
    null,
  ),
), document.getElementById('root'));
registerServiceWorker();
