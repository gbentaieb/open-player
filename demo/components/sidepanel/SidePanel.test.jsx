import React from 'react';
import { stub } from 'sinon';
import SidePanel from './SidePanel';
import { MuiMountWithContext } from '../../../test/utils';

test('SidePanel > Snapshot', () => {
  const onClickOutside = () => {};
  const wrapper = shallow(<SidePanel onClickOutside={onClickOutside} />);
  expect(wrapper).toMatchSnapshot();
});

test('SidePanel > handleClickOutside', () => {
  const onClickOutside = stub();
  const wrapper = MuiMountWithContext(<SidePanel onClickOutside={onClickOutside} />);
  wrapper.instance().handleClickOutside({ target: document.createElement('div') });
  expect(onClickOutside.calledOnce).toEqual(true);
});
