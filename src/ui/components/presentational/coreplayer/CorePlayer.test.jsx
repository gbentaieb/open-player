import React from 'react';
import FakeRxPlayer from '../../../../../test/fakeRxPlayer';
import CorePlayer from './CorePlayer';

test('CorePlayer > Snapshot', () => {
  const wrapper = mount(<CorePlayer RxPlayer={FakeRxPlayer} />);
  expect(wrapper).toMatchSnapshot();
});

test('CorePlayer > componentDidMount > loadVideo', () => {
  const url = 'https://www.test.com/test.mp4';
  const wrapper = mount(<CorePlayer RxPlayer={FakeRxPlayer} url={url} />);
  const instance = wrapper.instance();
  expect(instance.rxPlayer.loadVideoCalled).toEqual(true);
});

test('CorePlayer > componentDidMount > video properties', () => {
  const wrapper = mount(<CorePlayer RxPlayer={FakeRxPlayer} />);
  const instance = wrapper.instance();
  expect(instance.videoElement.controls).toEqual(false);
  expect(instance.videoElement.disableRemotePlayback).toEqual(true);
  expect(instance.videoElement.playsinline).toEqual('');
});

test('CorePlayer > componentWillReceiveProps > video url', () => {
  const url = 'https://www.test.com/test.mp4';
  const wrapper = mount(<CorePlayer RxPlayer={FakeRxPlayer} />);
  wrapper.setProps({ url });
  const instance = wrapper.instance();
  expect(instance.rxPlayer.loadVideoCalled).toEqual(true);
});

test('CorePlayer > getLoadVideoOptions', () => {
  const url = 'https://www.test.com/test.mp4';
  const result = {
    url,
    transport: 'dash',
    autoPlay: true,
  };

  const wrapper = mount(<CorePlayer RxPlayer={FakeRxPlayer} />);
  const instance = wrapper.instance();
  expect(instance.getLoadVideoOptions({ url })).toEqual(result);
});

test('CorePlayer > createRxPlayer', () => {
  const wrapper = mount(<CorePlayer RxPlayer={FakeRxPlayer} />);
  const rxPlayer = wrapper.instance().createRxPlayer();
  expect(rxPlayer.constructorCalled).toEqual(true);
});
