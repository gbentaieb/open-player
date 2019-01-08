import React from 'react';
import { createMockStore } from 'redux-test-utils';
import SpinnerContainer, { mapStateToProps } from './SpinnerContainer';

const defaultStore = {
  core: {
    playerState: 'PLAYING',
  },
};

describe('SpinnerContainer', () => {
  test('SpinnerContainer > Snapshot', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(<SpinnerContainer store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('SpinnerContainer > mapStateToProps', () => {
    const state = defaultStore;

    expect(mapStateToProps(state)).toEqual(state.core);
  });
});
