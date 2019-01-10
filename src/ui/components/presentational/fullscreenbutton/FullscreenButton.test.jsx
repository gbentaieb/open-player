import React from 'react';
import FullscreenButton from './FullscreenButton';

const defaultProps = {
  onClick: () => {},
  isFullscreen: true,
};

describe('PlayPauseButton snapshot', () => {
  test('PlayPauseButton > Snapshot', () => {
    const wrapper = shallow(<FullscreenButton {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
