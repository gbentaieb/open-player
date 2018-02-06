import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from './store/store';

const store = createReduxStore();

const App = () => (
  <Provider store={store}>
    <div className="openPlayerApp">
      <div />
    </div>
  </Provider>
);

export default App;
