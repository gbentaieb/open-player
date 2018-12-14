import React from 'react';
import { Provider } from 'react-redux';
import Player from './Player';

const createFakeStore = state => (
  {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => (
      { ...state }
    ),
  }
);

const defaultStore = createFakeStore({
  config: {},
});

describe('test Player component', () => {
  test('Player > Snapshot', () => {
    const globalWrapper = shallow(
      <Provider store={defaultStore}>
        <Player videoElement={{}} config={{}} onLoad={() => {}} />
      </Provider>,
    );

    const wrapper = globalWrapper.find(Player);
    expect(wrapper).toMatchSnapshot();
  });
});
