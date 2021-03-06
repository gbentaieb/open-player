import React from 'react';
import PlayPauseButton from './PlayPauseButton';

const defaultProps = {
  onClick: () => {},
  isPlaying: true,
};

describe('PlayPauseButton snapshot', () => {
  test('PlayPauseButton > Snapshot', () => {
    const wrapper = shallow(<PlayPauseButton {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
