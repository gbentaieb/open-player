import React from 'react';
import App from './App';

test('App > Snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
