import React from 'react';
import { createMockStore } from 'redux-test-utils';

import FullscreenButtonContainer, { mapStateToProps } from './FullscreenButtonContainer';

const defaultStore = {
  fullscreen: {
    isFullscreen: false,
    container: null,
  },
};

describe('FullscreenButtonContainer snapshot', () => {
  test('FullscreenButtonContainer > Snapshot', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(<FullscreenButtonContainer store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('FullscreenButtonContainer mapStateToProps', () => {
  const result = mapStateToProps(defaultStore);

  expect(result).toEqual({
    isFullscreen: false,
    fullscreenContainer: null,
  });
});
