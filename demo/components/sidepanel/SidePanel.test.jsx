import React from 'react';
import { stub } from 'sinon';
import { SidePanel } from './SidePanel';

const defaultProps = {
  classes: {},
  onClickOutside: () => {},
};

describe('test demo sidepanel', () => {
  test('SidePanel > Snapshot', () => {
    const wrapper = shallow(<SidePanel {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('SidePanel > handleClickOutside', () => {
    const onClickOutside = stub();
    const props = { ...defaultProps, onClickOutside };
    const wrapper = mount(<SidePanel {...props} />);
    wrapper.instance().handleClickOutside({ target: document.createElement('div') });
    expect(onClickOutside.calledOnce).toEqual(true);
  });
});
