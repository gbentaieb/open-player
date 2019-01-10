import React from 'react';
import { createMockStore } from 'redux-test-utils';

import FullscreenContainer from './FullscreenContainer';

const defaultStore = {
  fullscreen: {
    isFullscreen: false,
  },
};

describe('FullscreenContainer snapshot', () => {
  test('FullscreenContainer > Snapshot', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(<FullscreenContainer store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});

// TODO: find a way to test components using screenfull.
// I tried everything, but nothing worked ! :(
