import React from 'react';
import ControlsWrapper from './ControlsWrapper';

const defaultProps = {
  isActive: true,
};

describe('ControlsWrapper snapshot', () => {
  test('ControlsWrapper > Snapshot', () => {
    const wrapper = shallow(<ControlsWrapper {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
