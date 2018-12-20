import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlayPauseButton from '../../presentational/playpausebutton/PlayPauseButton';

import { requestPlay } from '../../../actions/CoreActions';

import { isPlaying } from '../../../utils/playerStates';

function mapStateToProps(state) {
  return {
    isPlaying: isPlaying(state.core.playerState),
  };
}

class PlayPauseButtonContainer extends Component {
  static propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    requestPlay: PropTypes.func.isRequired,
  }

  static defaultProps = {
    /* Add default props */
  }

  playPause = () => {
    this.props.requestPlay(!this.props.isPlaying);
  }

  render() {
    return (
      <PlayPauseButton
        onClick={this.playPause}
        isPlaying={this.props.isPlaying}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  {
    requestPlay,
  },
)(PlayPauseButtonContainer);
