import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../../presentational/spinner/Spinner';

export function mapStateToProps(state) {
  return {
    playerState: state.core.playerState,
  };
}

const SpinnerContainer = props => (
  <Spinner
    playerState={props.playerState}
  />
);

SpinnerContainer.propTypes = {
  playerState: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  {},
)(SpinnerContainer);
