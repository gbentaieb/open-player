import React from 'react';
import FakeRxPlayer from '../../../../../test/fakeRxPlayer';
import CorePlayer from './CorePlayer';

const defaultProps = {
  RxPlayer: FakeRxPlayer,
  videoElement: document.createElement('video'),
  playRequested: true,
  setPlayerState: () => {},
  setPlayerTimes: () => {},
};

describe('CorePlayer snapshot', () => {
  test('CorePlayer > Snapshot', () => {
    const wrapper = mount(<CorePlayer {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('CorePlayer react cycle', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

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
    const instance = wrapper.instance();
    instance.rxPlayer.loadVideo = jest.fn();
    wrapper.setProps({ url });
    expect(instance.rxPlayer.loadVideo).toHaveBeenCalledTimes(1);
  });

  test('CorePlayer > componentWillReceiveProps > seekingTime', () => {
    const seekingTime = 12;
    const wrapper = mount(<CorePlayer {...defaultProps} />);
    const instance = wrapper.instance();
    instance.rxPlayer.seekTo = jest.fn();
    wrapper.setProps({ seekingTime });
    expect(instance.rxPlayer.seekTo).toHaveBeenCalledWith(seekingTime);
  });

  test('CorePlayer > componentWillReceiveProps > playRequested false', () => {
    const playRequested = false;
    const wrapper = mount(<CorePlayer {...defaultProps} />);
    const instance = wrapper.instance();
    instance.rxPlayer.pause = jest.fn();
    wrapper.setProps({ playRequested });
    expect(instance.rxPlayer.pause).toHaveBeenCalled();
  });

  test('CorePlayer > componentWillReceiveProps > playRequested true', () => {
    const playRequested = true;
    const wrapper = mount(<CorePlayer {...defaultProps} playRequested={false} />);
    const instance = wrapper.instance();
    instance.rxPlayer.play = jest.fn();
    wrapper.setProps({ playRequested });
    expect(instance.rxPlayer.play).toHaveBeenCalled();
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

  test('CorePlayer > onPlayerStateChange', () => {
    const setPlayerState = jest.fn();
    const wrapper = mount(<CorePlayer {...defaultProps} setPlayerState={setPlayerState} />);
    wrapper.instance().onPlayerStateChange();
    expect(setPlayerState).toHaveBeenCalled();
  });

  test('CorePlayer > onPositionUpdate', () => {
    const times = {
      position: 1,
      duration: 0,
      liveGap: 10,
    };
    const setPlayerTimes = jest.fn();
    const wrapper = mount(<CorePlayer {...defaultProps} setPlayerTimes={setPlayerTimes} />);
    wrapper.instance().onPositionUpdate(times);
    expect(setPlayerTimes).toHaveBeenCalled();
  });

  test('CorePlayer > listenToRxPlayerEvent', () => {
    const wrapper = mount(<CorePlayer {...defaultProps} />);
    const instance = wrapper.instance();
    instance.rxPlayer.addEventListener = jest.fn();
    instance.listenToRxPlayerEvent();
    expect(instance.rxPlayer.addEventListener).toHaveBeenCalledTimes(2);
    expect(instance.rxPlayer.addEventListener).toHaveBeenNthCalledWith(1, 'playerStateChange', instance.onPlayerStateChange);
    expect(instance.rxPlayer.addEventListener).toHaveBeenNthCalledWith(2, 'positionUpdate', instance.onPositionUpdate);
  });

  test('CorePlayer > unlistenToRxPlayerEvent', () => {
    const wrapper = mount(<CorePlayer {...defaultProps} />);
    const instance = wrapper.instance();
    instance.rxPlayer.removeEventListener = jest.fn();
    instance.unlistenToRxPlayerEvent();
    expect(instance.rxPlayer.removeEventListener).toHaveBeenCalledTimes(2);
    expect(instance.rxPlayer.removeEventListener).toHaveBeenNthCalledWith(1, 'playerStateChange', instance.onPlayerStateChange);
    expect(instance.rxPlayer.removeEventListener).toHaveBeenNthCalledWith(2, 'positionUpdate', instance.onPositionUpdate);
  });
});

