import React from 'react';
import PlayPauseButton from './PlayPauseButton';

const defaultProps = {
  onClick: () => {},
  isPlaying: true,
  hoverColor: '00BCD4',
};

describe('PlayPauseButton snapshot', () => {
  test('PlayPauseButton > Snapshot', () => {
    const wrapper = shallow(<PlayPauseButton {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
