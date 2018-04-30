import { createStore, applyMiddleware } from 'redux';

import reducer from './ducks/index';
import validateMove from './middleware/validate-move';

export default createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(validateMove),
);
