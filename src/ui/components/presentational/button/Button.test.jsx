import React from 'react';
import Button from './Button';

import { MuiMountWithContext } from '../../../../../test/utils';

const defaultProps = {
  onClick: () => {},
  glyph: {},
  hoverColor: '00BCD4',
};

describe('Button snapshot', () => {
  test('Button > Snapshot', () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Button methods', () => {
  test('Button > addHoverColor', () => {
    const wrapper = MuiMountWithContext(<Button {...defaultProps} />);
    wrapper.instance().addHoverColor();
    expect(wrapper.instance().state.iconColor).toEqual(wrapper.instance().props.hoverColor);
  });

  test('Button > removeHoverColor', () => {
    const wrapper = MuiMountWithContext(<Button {...defaultProps} />);
    wrapper.instance().addHoverColor();
    wrapper.instance().removeHoverColor();
    expect(wrapper.instance().state.iconColor).toEqual(wrapper.instance().props.color);
  });
});
