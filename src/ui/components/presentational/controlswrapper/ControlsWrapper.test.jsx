import React from 'react';
import ControlsWrapper from './ControlsWrapper';

describe('ControlsWrapper snapshot', () => {
  test('ControlsWrapper > Snapshot', () => {
    const wrapper = shallow(<ControlsWrapper />);
    expect(wrapper).toMatchSnapshot();
  });
});
