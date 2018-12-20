import React from 'react';
import { createMockStore } from 'redux-test-utils';

import PlayPauseButtonContainer from './PlayPauseButtonContainer';
import * as playerStates from '../../../constants/CoreStates';

const defaultStore = {
  core: {
    playerState: playerStates.STOPPED,
  },
};

describe('PlayPauseButtonContainer snapshot', () => {
  test('PlayPauseButtonContainer > Snapshot', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(<PlayPauseButtonContainer store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('PlayPauseButtonContainer methods', () => {
  test('PlayPauseButtonContainer > isPlaying when PAUSED', () => {
    const store = createMockStore(
      {
        ...defaultStore,
        core: { playerState: playerStates.PAUSED },
      },
    );
    const wrapper = shallow(<PlayPauseButtonContainer store={store} />);
    const instance = wrapper.dive().instance();
    expect(instance.props.isPlaying).toEqual(false);
  });

  test('PlayPauseButtonContainer > isPlaying when PLAYING', () => {
    const store = createMockStore(
      {
        ...defaultStore,
        core: { playerState: playerStates.PLAYING },
      },
    );
    const wrapper = shallow(<PlayPauseButtonContainer store={store} />);
    const instance = wrapper.dive().instance();
    expect(instance.props.isPlaying).toEqual(true);
  });
});
