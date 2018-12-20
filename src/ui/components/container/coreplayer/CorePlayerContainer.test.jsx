import React from 'react';
import { createMockStore } from 'redux-test-utils';
import RxPlayer from 'rx-player';

import FakeRxPlayer from '../../../../../test/fakeRxPlayer';
import CorePlayerContainer, { mapStateToProps } from './CorePlayerContainer';

const defaultStore = {
  config: {
    url: 'https://www.test.com/test.mp4',
  },
  core: {
    playRequested: true,
  },
};

const defaultProps = {
  RxPlayer: FakeRxPlayer,
  videoElement: document.createElement('video'),
};

describe('CorePlayerContainer', () => {
  test('CorePlayerContainer > Snapshot', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(<CorePlayerContainer store={store} {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('CorePlayerContainer > mapStateToProps', () => {
    const url = 'https://test.mpd';
    const playRequested = true;
    const seekingTime = 12;
    const state = {
      config: { url },
      core: { playRequested, seekingTime },
    };

    expect(mapStateToProps(state)).toEqual({
      RxPlayer,
      url,
      playRequested,
      seekingTime,
    });
  });
});
