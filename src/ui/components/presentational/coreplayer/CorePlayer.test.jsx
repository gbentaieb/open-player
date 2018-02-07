import React from 'react';
import CorePlayer from './CorePlayer';

test('CorePlayer > Snapshot', () => {
  const wrapper = mount(<CorePlayer />);
  expect(wrapper).toMatchSnapshot();
});

test('CorePlayer > componentDidMount > video url', () => {
  const url = 'https://www.test.com/test.mp4';
  const wrapper = mount(<CorePlayer url={url} />);
  const instance = wrapper.instance();
  expect(instance.videoElement.src).toEqual(url);
});

test('CorePlayer > componentDidMount > video properties', () => {
  const wrapper = mount(<CorePlayer />);
  const instance = wrapper.instance();
  expect(instance.videoElement.autoplay).toEqual(true);
  expect(instance.videoElement.muted).toEqual(true);
});

test('CorePlayer > componentWillReceiveProps > video url', () => {
  const url = 'https://www.test.com/test.mp4';
  const wrapper = mount(<CorePlayer />);
  wrapper.setProps({ url });
  const instance = wrapper.instance();
  expect(instance.videoElement.src).toEqual(url);
});
