import React from 'react';
import { SidePanel, getRandomColor } from './SidePanel';

const defaultProps = {
  classes: {},
  onClickOutside: () => {},
  setMainColor: () => {},
};

describe('test demo sidepanel', () => {
  let getRandomColorStub;
  let callSetMainColorStub;

  beforeEach(() => {
    getRandomColorStub = jest.spyOn(Math, 'random');
    callSetMainColorStub = jest.spyOn(SidePanel, 'callSetMainColor');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('getRandomColor', () => {
    getRandomColorStub.mockReturnValue(1);
    const result = getRandomColor();

    expect(result).toBe('rgb(255,255,255)');
  });

  test('SidePanel > Snapshot', () => {
    const wrapper = shallow(<SidePanel {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('SidePanel > onColorExpandOrClose', () => {
    const wrapper = mount(<SidePanel {...defaultProps} />);
    expect(wrapper.state('isColorOpened')).toBe(false);
    wrapper.instance().onColorExpandOrClose();
    expect(wrapper.state('isColorOpened')).toBe(true);
  });

  test('SidePanel > setWrapperRef', () => {
    const wrapper = mount(<SidePanel {...defaultProps} />);
    const node = <div />;
    wrapper.instance().setWrapperRef(node);
    expect(wrapper.instance().wrapperRef).toBe(node);
  });

  test('SidePanel > setMainColor', () => {
    const setMainColor = jest.fn();
    const props = { ...defaultProps, setMainColor };
    const wrapper = mount(<SidePanel {...props} />);
    const color = 'foo';
    wrapper.instance().setMainColor(color);
    expect(callSetMainColorStub).toHaveBeenCalledWith(color);
    expect(setMainColor).toHaveBeenCalledWith(color);
  });

  test('SidePanel > Snapshot', () => {
    const wrapper = mount(<SidePanel {...defaultProps} />);
    const listItem = wrapper.instance().getColorListItem('foo', 'bar');
    expect(listItem).toMatchSnapshot();
  });

  test('SidePanel > handleClickOutside', () => {
    const onClickOutside = jest.fn();
    const props = { ...defaultProps, onClickOutside };
    const wrapper = mount(<SidePanel {...props} />);
    wrapper.instance().handleClickOutside({ target: document.createElement('div') });
    expect(onClickOutside).toHaveBeenCalledTimes(1);
  });
});
