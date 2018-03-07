import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createReduxStore } from './store/store';
import Player from './entry/Player';

const store = createReduxStore();

const App = props => (
  <Provider store={store}>
    <Player config={props.config} onLoad={props.onLoad} />
  </Provider>
);

App.propTypes = {
  config: PropTypes.object.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default App;
