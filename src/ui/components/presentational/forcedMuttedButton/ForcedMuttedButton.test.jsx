import React from 'react';
import ForcedMuttedButton from './ForcedMuttedButton';

const defaultProps = {
  videoElement: document.createElement('video'),
  forcedMuted: true,
  setForcedMuted: () => {},
};

describe('ForcedMuttedButton snapshot', () => {
  test('ForcedMuttedButton > Snapshot', () => {
    const wrapper = shallow(<ForcedMuttedButton {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ForcedMuttedButton methods', () => {
  test('ForcedMuttedButton > onClick', () => {
    const videoElement = { muted: true };
    const setForcedMuted = jest.fn();
    const props = { ...defaultProps, videoElement, setForcedMuted };

    const wrapper = shallow(<ForcedMuttedButton {...props} />);
    const instance = wrapper.instance();
    instance.onClick();

    expect(instance.props.videoElement.muted).toBe(false);
    expect(instance.props.setForcedMuted).toHaveBeenCalledWith(false);
  });
});
