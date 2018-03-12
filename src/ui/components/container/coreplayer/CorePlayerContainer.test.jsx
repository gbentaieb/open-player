import React from 'react';
import { createMockStore } from 'redux-test-utils';

import FakeRxPlayer from '../../../../../test/fakeRxPlayer';
import CorePlayerContainer from './CorePlayerContainer';

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
};

describe('CorePlayerContainer snapshot', () => {
  test('CorePlayerContainer > Snapshot', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(<CorePlayerContainer store={store} {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
