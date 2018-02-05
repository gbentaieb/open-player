import React from 'react';
import { spy } from 'sinon';
import TextField from 'material-ui/TextField/TextField';
import Toolbar from './Toolbar';
import presets from '../../presets';
import { MuiMountWithContext } from '../../../test/utils';

test('Toolbar > Snapshot', () => {
  const wrapper = shallow(<Toolbar loadVideo={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('Toolbar > handleChange', () => {
  const wrapper = shallow(<Toolbar loadVideo={() => {}} />);
  expect(wrapper.state('value')).toEqual(presets[1].value);
  wrapper.instance().handleChange('', '', 'test');
  expect(wrapper.state('value')).toEqual('test');
});

test('Toolbar > text field disabled', () => {
  const wrapper = MuiMountWithContext(<Toolbar loadVideo={() => {}} />);
  const textField = wrapper.find(TextField);
  expect(textField.length).toEqual(0);
});

test('Toolbar > text field enabled', () => {
  const wrapper = MuiMountWithContext(<Toolbar loadVideo={() => {}} />);
  wrapper.setState({ value: null });
  const textField = wrapper.find(TextField);
  expect(textField.length).toEqual(1);
});

test('Toolbar > onLoadClicked with value', () => {
  const loadVideo = spy();
  const value = 'www.test.com/test.mp4';
  const wrapper = MuiMountWithContext(<Toolbar loadVideo={loadVideo} />);
  wrapper.setState({ value });
  wrapper.instance().onLoadClicked();
  expect(loadVideo.calledWith(value)).toEqual(true);
});

test('Toolbar > onLoadClicked without value', () => {
  const loadVideo = spy();
  const value = 'www.test.com/test.mp4';
  const wrapper = MuiMountWithContext(<Toolbar loadVideo={loadVideo} />);
  wrapper.setState({ value: null });
  wrapper.instance().TextField.value = value;
  wrapper.instance().onLoadClicked();
  expect(loadVideo.calledWith(value)).toEqual(true);
});
