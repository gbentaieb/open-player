import React from 'react';
import { createMockStore } from 'redux-test-utils';
import SeekBarContainer, { mapStateToProps } from './SeekBarContainer';

const defaultStore = {
  core: {
    currentTime: 2,
    startTime: 1,
    endTime: 3,
  },
};

describe('SeekBarContainer', () => {
  test('SeekBarContainer > Snapshot', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(<SeekBarContainer store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('SeekBarContainer > mapStateToProps', () => {
    const state = defaultStore;

    expect(mapStateToProps(state)).toEqual(state.core);
  });
});
