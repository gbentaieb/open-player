import React from 'react';
import { createMockStore } from 'redux-test-utils';

import ControlsContainer, { mapStateToProps } from './ControlsContainer';

const defaultStore = {
  activity: {
    isActive: false,
  },
};

describe('ControlsContainer', () => {
  test('ControlsContainer > Snapshot', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(<ControlsContainer store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('ControlsContainer > mapStateToProps', () => {
    const state = {
      activity: {
        isActive: false,
      },
    };

    expect(mapStateToProps(state)).toEqual({
      isActive: false,
    });
  });
});
