import React from 'react';
import PlayerContainer from './PlayerContainer';

describe('Test demo player container', () => {
  test('PlayerContainer > Snapshot', () => {
    const wrapper = shallow(<PlayerContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
