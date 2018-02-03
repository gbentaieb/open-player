import React from 'react';
import TextField from 'material-ui/TextField/TextField';
import Toolbar from './Toolbar';
import presets from '../../presets';
import { MuiMountWithContext } from '../../../test/utils';

test('Toolbar > Snapshot', () => {
  const wrapper = shallow(<Toolbar />);
  expect(wrapper).toMatchSnapshot();
});

test('Toolbar > handleChange', () => {
  const wrapper = shallow(<Toolbar />);
  expect(wrapper.state('value')).toEqual(presets[1].value);
  wrapper.instance().handleChange('', '', 'test');
  expect(wrapper.state('value')).toEqual('test');
});

test('Toolbar > text field disabled', () => {
  const wrapper = MuiMountWithContext(<Toolbar />);
  const textField = wrapper.find(TextField);
  expect(textField.length).toEqual(0);
});

test('Toolbar > text field enabled', () => {
  const wrapper = MuiMountWithContext(<Toolbar />);
  wrapper.setState({ value: null });
  const textField = wrapper.find(TextField);
  expect(textField.length).toEqual(1);
});
