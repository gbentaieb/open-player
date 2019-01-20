import React from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from '../../presentational/headerWrapper/HeaderWrapper';
import ForcedMuttedButton from '../../presentational/forcedMuttedButton/ForcedMuttedButton';
import { setForcedMuted } from '../../../actions/CoreActions';

export function mapStateToProps(state) {
  return {
    forcedMuted: state.core.forcedMuted,
  };
}

const HeaderContainer = props => (
  <HeaderWrapper>
    <ForcedMuttedButton {...props} />
  </HeaderWrapper>
);


export default connect(
  mapStateToProps,
  {
    setForcedMuted,
  },
)(HeaderContainer);
