import React from 'react';
import App from './App';

test('App > Snapshot', () => {
  const wrapper = shallow(<App config={{}} />);
  expect(wrapper).toMatchSnapshot();
});
