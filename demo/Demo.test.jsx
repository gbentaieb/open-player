import React from 'react';
import { App } from './Demo';

const defaultProps = {
  classes: {},
};

describe('Demo header test', () => {
  test('Header > Snapshot', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Header > setMainColor', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    wrapper.instance().setMainColor('#cc0000');
    expect(wrapper.state('theme').palette.primary.main).toEqual('#cc0000');
  });
});
