import React from 'react';
import { Spinner, isWaiting } from './Spinner';
import { BUFFERING, LOADING, LOADED, SEEKING, PLAYING } from '../../../constants/CoreStates';

const defaultProps = {
  classes: {},
  playerState: PLAYING,
};

describe('Spinner', () => {
  test('Spinner > Snapshot', () => {
    const wrapper = shallow(<Spinner {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Spinner > isWaiting', () => {
    [BUFFERING, LOADING, LOADED, SEEKING].forEach((state) => {
      expect(isWaiting(state)).toBe(true);
    });

    expect(isWaiting(PLAYING)).toBe(false);
  });
});
