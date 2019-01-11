import React from 'react';
import { createMockStore } from 'redux-test-utils';

import ActivityDetectorContainer, { UnconnectedActivityDetectorContainer, mapStateToProps } from './ActivityDetectorContainer';

const defaultStore = {
  activity: {
    isActive: false,
  },
};

let defaultProps;

describe('ActivityDetectorContainer', () => {
  beforeEach(() => {
    defaultProps = {
      isActive: false,
      setIsActive: jest.fn(),
    };
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('ActivityDetectorContainer > Snapshot', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(<ActivityDetectorContainer store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('ActivityDetectorContainer > mapStateToProps', () => {
    const state = {
      activity: {
        isActive: false,
      },
    };

    expect(mapStateToProps(state)).toEqual({
      isActive: false,
    });
  });

  test('ActivityDetectorContainer > componentDidMount > listen to activity on events', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(
      <ActivityDetectorContainer store={store} />,
      { disableLifecycleMethods: true },
    );
    const instance = wrapper.dive().instance();

    instance.container = { addEventListener: jest.fn() };
    instance.componentDidMount();

    expect(instance.container.addEventListener).toHaveBeenCalledTimes(
      ActivityDetectorContainer.activityOnEvents.length +
      ActivityDetectorContainer.activityOffEvents.length,
    );
    ActivityDetectorContainer.activityOnEvents.forEach((event, idx) => {
      expect(instance.container.addEventListener).toHaveBeenNthCalledWith(
        idx + 1, event, instance.onActivityOn,
      );
    });
  });

  test('ActivityDetectorContainer > componentDidMount > listen to activity off events', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(
      <ActivityDetectorContainer store={store} />,
      { disableLifecycleMethods: true },
    );
    const instance = wrapper.dive().instance();

    instance.container = { addEventListener: jest.fn() };
    instance.componentDidMount();

    expect(instance.container.addEventListener).toHaveBeenCalledTimes(
      ActivityDetectorContainer.activityOnEvents.length +
      ActivityDetectorContainer.activityOffEvents.length,
    );
    ActivityDetectorContainer.activityOffEvents.forEach((event, idx) => {
      expect(instance.container.addEventListener).toHaveBeenNthCalledWith(
        idx + ActivityDetectorContainer.activityOnEvents.length + 1, event, instance.onActivityOff,
      );
    });
  });

  test('ActivityDetectorContainer > componentWillUnmount > unlisten to activity on events', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(
      <ActivityDetectorContainer store={store} />,
      { disableLifecycleMethods: true },
    );
    const instance = wrapper.dive().instance();

    instance.container = { removeEventListener: jest.fn() };
    instance.componentWillUnmount();

    expect(instance.container.removeEventListener).toHaveBeenCalledTimes(
      ActivityDetectorContainer.activityOnEvents.length +
      ActivityDetectorContainer.activityOffEvents.length,
    );
    ActivityDetectorContainer.activityOnEvents.forEach((event, idx) => {
      expect(instance.container.removeEventListener).toHaveBeenNthCalledWith(
        idx + 1, event, instance.onActivityOn,
      );
    });
  });

  test('ActivityDetectorContainer > componentWillUnmount > unlisten to activity off events', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(
      <ActivityDetectorContainer store={store} />,
      { disableLifecycleMethods: true },
    );
    const instance = wrapper.dive().instance();

    instance.container = { removeEventListener: jest.fn() };
    instance.componentWillUnmount();

    expect(instance.container.removeEventListener).toHaveBeenCalledTimes(
      ActivityDetectorContainer.activityOnEvents.length +
      ActivityDetectorContainer.activityOffEvents.length,
    );
    ActivityDetectorContainer.activityOffEvents.forEach((event, idx) => {
      expect(instance.container.removeEventListener).toHaveBeenNthCalledWith(
        idx + ActivityDetectorContainer.activityOnEvents.length + 1, event, instance.onActivityOff,
      );
    });
  });

  test('ActivityDetectorContainer > componentWillUnmount > clear activity timeout', () => {
    const store = createMockStore(defaultStore);
    const wrapper = shallow(
      <ActivityDetectorContainer store={store} />,
      { disableLifecycleMethods: true },
    );
    const instance = wrapper.dive().instance();
    const clearActivityTimeoutSpy = jest.spyOn(instance, 'clearActivityTimeout');

    instance.container = { removeEventListener: jest.fn() };
    instance.componentWillUnmount();

    expect(clearActivityTimeoutSpy).toHaveBeenCalledTimes(1);
  });

  test('ActivityDetectorContainer > onActivityOn', () => {
    const wrapper = shallow(
      <UnconnectedActivityDetectorContainer {...defaultProps} />,
      { disableLifecycleMethods: true },
    );
    const instance = wrapper.instance();
    const clearActivityTimeoutSpy = jest.spyOn(instance, 'clearActivityTimeout');

    instance.onActivityOn();

    expect(clearActivityTimeoutSpy).toHaveBeenCalledTimes(1);
    expect(defaultProps.setIsActive).toHaveBeenCalledWith(true);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  test('ActivityDetectorContainer > onActivityOff', () => {
    const wrapper = shallow(
      <UnconnectedActivityDetectorContainer {...defaultProps} isActive />,
      { disableLifecycleMethods: true },
    );
    const instance = wrapper.instance();
    const clearActivityTimeoutSpy = jest.spyOn(instance, 'clearActivityTimeout');

    instance.onActivityOff();

    expect(clearActivityTimeoutSpy).toHaveBeenCalledTimes(1);
    expect(defaultProps.setIsActive).toHaveBeenCalledWith(false);
  });
});
