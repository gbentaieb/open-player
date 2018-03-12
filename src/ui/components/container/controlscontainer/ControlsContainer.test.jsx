import React from 'react';
import { createMockStore } from 'redux-test-utils';

import ControlsContainer from './ControlsContainer';
import * as playerStates from '../../../constants/CoreStates';

const defaultStore = {
  core: {
    playerState: playerStates.STOPPED,
  },
  config: {
    mainColor: 'white',
  },
};

describe('ControlsContainer snapshot', () => {
  test('ControlsContainer > Snapshot', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(<ControlsContainer store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ControlsContainer methods', () => {
  test('ControlsContainer > isPlaying when PAUSED', () => {
    const store = createMockStore(
      {
        ...defaultStore,
        core: { playerState: playerStates.PAUSED },
      },
    );
    const wrapper = shallow(<ControlsContainer store={store} />);
    const instance = wrapper.dive().instance();
    expect(instance.props.isPlaying).toEqual(false);
  });

  test('ControlsContainer > isPlaying when PLAYING', () => {
    const store = createMockStore(
      {
        ...defaultStore,
        core: { playerState: playerStates.PLAYING },
      },
    );
    const wrapper = shallow(<ControlsContainer store={store} />);
    const instance = wrapper.dive().instance();
    expect(instance.props.isPlaying).toEqual(true);
  });
});
