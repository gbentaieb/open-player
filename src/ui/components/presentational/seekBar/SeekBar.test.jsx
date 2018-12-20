import React from 'react';
import jest from 'jest-mock';
import { SeekBar } from './SeekBar';

const defaultProps = {
  seekTo: () => {},
  classes: {},
  currentTime: 1,
  startTime: 0,
  endTime: 2,
};

describe('SeekBar snapshot', () => {
  test('SeekBar > Snapshot', () => {
    const wrapper = shallow(<SeekBar {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('SeekBar > convertTime', () => {
    expect(SeekBar.convertTime(0)).toEqual('00:00');
    expect(SeekBar.convertTime(61)).toEqual('01:01');
    expect(SeekBar.convertTime(3601)).toEqual('01:00:01');
  });

  test('SeekBar > getSliderValue', () => {
    const wrapper = shallow(<SeekBar {...defaultProps} />);
    const result = wrapper.instance().getSliderValue();
    expect(result).toEqual(50);
  });

  test('SeekBar > handleSliderValueChange', () => {
    const seekTo = jest.fn();
    const wrapper = shallow(<SeekBar {...defaultProps} seekTo={seekTo} />);
    wrapper.instance().handleSliderValueChange(null, 50);
    expect(seekTo).toHaveBeenCalledWith(1);
  });
});
