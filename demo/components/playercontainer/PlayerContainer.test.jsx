import React from 'react';
import PlayerContainer from './PlayerContainer';

test('PlayerContainer > Snapshot', () => {
  const wrapper = shallow(<PlayerContainer />);
  expect(wrapper).toMatchSnapshot();
});
