import React from 'react';
import App from './App';

describe('test App component', () => {
  test('App > Snapshot', () => {
    const wrapper = shallow(<App videoElement={{}} config={{}} onLoad={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});

