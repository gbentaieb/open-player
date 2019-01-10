import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ToolBar } from './Toolbar';

const defaultProps = {
  classes: {},
  loadVideo: () => {},
};

describe('test demo toolbar', () => {
  test('Toolbar > Snapshot', () => {
    const wrapper = shallow(<ToolBar {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Toolbar > text field disabled', () => {
    const wrapper = mount(<ToolBar {...defaultProps} />);
    const textField = wrapper.find(TextField);
    expect(textField.length).toEqual(0);
  });

  test('Toolbar > text field enabled', () => {
    const wrapper = mount(<ToolBar {...defaultProps} />);
    wrapper.setState({ value: null });
    const textField = wrapper.find(TextField);
    expect(textField.length).toEqual(1);
  });

  test('Toolbar > onLoadClicked with value', () => {
    const loadVideo = jest.fn();
    const props = { ...defaultProps, loadVideo };
    const value = 'www.test.com/test.mp4';
    const wrapper = mount(<ToolBar {...props} />);
    wrapper.setState({ value });
    wrapper.instance().onLoadClicked();
    expect(loadVideo).toHaveBeenCalledWith(value);
  });

  test('Toolbar > onLoadClicked without value', () => {
    const loadVideo = jest.fn();
    const props = { ...defaultProps, loadVideo };
    const textFieldValue = 'www.test.com/test.mp4';
    const wrapper = mount(<ToolBar {...props} />);
    wrapper.setState({ value: null, textFieldValue });
    wrapper.instance().onLoadClicked();
    expect(loadVideo).toHaveBeenCalledWith(textFieldValue);
  });

  test('Tollbar > handleClickListItem', () => {
    const wrapper = mount(<ToolBar {...defaultProps} />);
    const currentTarget = document.createElement('div');
    wrapper.instance().handleClickListItem({ currentTarget });
    expect(wrapper.state('anchorEl')).toBe(currentTarget);
  });

  test('Tollbar > handleMenuClose', () => {
    const wrapper = mount(<ToolBar {...defaultProps} />);
    const currentTarget = null;
    wrapper.setState({ anchorEl: document.createElement('div') });
    wrapper.instance().handleMenuClose();
    expect(wrapper.state('anchorEl')).toBe(currentTarget);
  });

  test('Tollbar > handleMenuItemClick', () => {
    const wrapper = mount(<ToolBar {...defaultProps} />);
    const index = 1;
    const label = 'foo';
    const value = 'bar';
    wrapper.setState({ anchorEl: document.createElement('div') });
    wrapper.instance().handleMenuItemClick(index, label, value);
    expect(wrapper.state('selectedIndex')).toBe(index);
    expect(wrapper.state('label')).toBe(label);
    expect(wrapper.state('value')).toBe(value);
    expect(wrapper.state('anchorEl')).toBe(null);
  });

  test('Tollbar > handleTextFieldChange', () => {
    const wrapper = mount(<ToolBar {...defaultProps} />);
    const textFieldValue = 'foo';
    wrapper.instance().handleTextFieldChange({ target: { value: textFieldValue } });
    expect(wrapper.state('textFieldValue')).toBe(textFieldValue);
  });
});
