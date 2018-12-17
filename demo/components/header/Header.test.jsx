import React from 'react';
import { Header } from './Header';

const defaultProps = {
  classes: {},
};

describe('Demo header test', () => {
  test('Header > Snapshot', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Header > onLeftIconButtonClick', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    expect(wrapper.state('isBurgerOpen')).toEqual(false);
    wrapper.instance().onLeftIconButtonClick();
    expect(wrapper.state('isBurgerOpen')).toEqual(true);
  });

  test('Header > closeBurger when closed', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    expect(wrapper.state('isBurgerOpen')).toEqual(false);
    wrapper.instance().closeBurger();
    expect(wrapper.state('isBurgerOpen')).toEqual(false);
  });

  test('Header > closeBurger when opened', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    wrapper.setState({ isBurgerOpen: true });
    expect(wrapper.state('isBurgerOpen')).toEqual(true);
    wrapper.instance().closeBurger();
    expect(wrapper.state('isBurgerOpen')).toEqual(false);
  });
});
