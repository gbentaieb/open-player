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
