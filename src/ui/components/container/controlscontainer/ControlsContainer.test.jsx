import React from 'react';
import { createMockStore } from 'redux-test-utils';
import ControlsContainer from './ControlsContainer';

describe('ControlsContainer snapshot', () => {
  test('ControlsContainer > Snapshot', () => {
    const store = createMockStore({});
    const wrapper = shallow(<ControlsContainer store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
