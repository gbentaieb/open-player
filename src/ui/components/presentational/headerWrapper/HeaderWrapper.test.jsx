import React from 'react';
import HeaderWrapper from './HeaderWrapper';

const defaultProps = {
  children: null,
};

describe('HeaderWrapper snapshot', () => {
  test('HeaderWrapper > Snapshot', () => {
    const wrapper = shallow(<HeaderWrapper {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
