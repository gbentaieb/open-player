import React from 'react';
import { createMockStore } from 'redux-test-utils';

import HeaderContainer, { mapStateToProps } from './HeaderContainer';

const defaultStore = {
  core: {
    forcedMuted: false,
  },
};

describe('HeaderContainer', () => {
  test('HeaderContainer > Snapshot', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(<HeaderContainer store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('HeaderContainer > mapStateToProps', () => {
    const forcedMuted = false;
    const state = {
      core: { forcedMuted },
    };

    expect(mapStateToProps(state)).toEqual({
      forcedMuted,
    });
  });
});
