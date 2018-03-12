import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ControlsWrapper from '../../presentational/controlswrapper/ControlsWrapper';
import PlayPauseButton from '../../presentational/playpausebutton/PlayPauseButton';

import { requestPlay } from '../../../actions/CoreActions';

import { isPlaying } from '../../../utils/playerStates';

function mapStateToProps(state) {
  return {
    isPlaying: isPlaying(state.core.playerState),
    hoverColor: state.config.mainColor,
  };
}

class ControlsContainer extends Component {
  static propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    requestPlay: PropTypes.func.isRequired,
    hoverColor: PropTypes.string.isRequired,
  }

  static defaultProps = {
    /* Add default props */
  }

  playPause = () => {
    this.props.requestPlay(!this.props.isPlaying);
  }

  render() {
    return (
      <ControlsWrapper>
        <PlayPauseButton
          onClick={this.playPause}
          isPlaying={this.props.isPlaying}
          hoverColor={this.props.hoverColor}
        />
        {/* <ProgressBar /> */}
      </ControlsWrapper>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    requestPlay,
  },
)(ControlsContainer);
