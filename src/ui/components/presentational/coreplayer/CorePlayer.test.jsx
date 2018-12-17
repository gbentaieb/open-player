import React from 'react';
import FakeRxPlayer from '../../../../../test/fakeRxPlayer';
import CorePlayer from './CorePlayer';

const defaultProps = {
  RxPlayer: FakeRxPlayer,
  videoElement: document.createElement('video'),
  playRequested: true,
  setPlayerState: () => {},
};

describe('CorePlayer snapshot', () => {
  test('CorePlayer > Snapshot', () => {
    const wrapper = mount(<CorePlayer {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('CorePlayer react cycle', () => {
  test('CorePlayer > componentDidMount > loadVideo', () => {
    const url = 'https://www.test.com/test.mp4';
    const wrapper = mount(<CorePlayer {...defaultProps} url={url} />);
    const instance = wrapper.instance();
    expect(instance.rxPlayer.loadVideoCalled).toEqual(true);
  });

  test('CorePlayer > componentDidMount > video properties', () => {
    const wrapper = mount(<CorePlayer {...defaultProps} />);
    const instance = wrapper.instance();
    expect(instance.props.videoElement.controls).toEqual(false);
    expect(instance.props.videoElement.disableRemotePlayback).toEqual(true);
    expect(instance.props.videoElement.playsinline).toEqual('');
  });

  test('CorePlayer > componentWillReceiveProps > video url', () => {
    const url = 'https://www.test.com/test.mp4';
    const wrapper = mount(<CorePlayer {...defaultProps} />);
    wrapper.setProps({ url });
    const instance = wrapper.instance();
    expect(instance.rxPlayer.loadVideoCalled).toEqual(true);
  });
});

describe('CorePlayer methods', () => {
  test('CorePlayer > getLoadVideoOptions', () => {
    const url = 'https://www.test.com/test.mp4';
    const result = {
      url,
      transport: 'dash',
      autoPlay: true,
    };

    const wrapper = mount(<CorePlayer {...defaultProps} />);
    const instance = wrapper.instance();
    expect(instance.getLoadVideoOptions({ url })).toEqual(result);
  });

  test('CorePlayer > createRxPlayer', () => {
    const wrapper = mount(<CorePlayer {...defaultProps} />);
    const rxPlayer = wrapper.instance().createRxPlayer();
    expect(rxPlayer.constructorCalled).toEqual(true);
  });
});

