import React from 'react';
import { Button } from './Button';

const defaultProps = {
  onClick: () => {},
  glyph: {
    node: {
      innerHTML: '<path d="abcd"></path>',
    },
  },
  classes: {},
};

describe('Button snapshot', () => {
  test('Button > Snapshot', () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Button methods', () => {
  test('Button > setIsHovered', () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    expect(wrapper.state('isHovered')).toEqual(false);
    wrapper.instance().setIsHovered(true);
    expect(wrapper.state('isHovered')).toEqual(true);
  });
});
