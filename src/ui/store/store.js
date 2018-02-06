import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from '../reducers';
import coreActionsMiddleware from '../middlewares/coreActionsMiddleware';

export function createComposeWithReduxDevTools() {
  // eslint-disable-next-line no-underscore-dangle
  if (typeof window !== 'object' || !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) return compose;

  const devtoolOptions = {
    name: '- OpenPlayer Demo -',
    instanceId: 'openplayer',
  };

  // eslint-disable-next-line no-underscore-dangle
  return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(devtoolOptions);
}

export function createReduxStore() {
  let composeEnhancers;
  if (__DEV__) {
    composeEnhancers = createComposeWithReduxDevTools();
  } else {
    composeEnhancers = compose;
  }

  const reducer = combineReducers(reducers);
  const middlewares = [coreActionsMiddleware];

  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
}
