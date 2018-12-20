import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { seekTo } from '../../../actions/CoreActions';
import SeekBar from '../../presentational/seekBar/SeekBar';

export function mapStateToProps(state) {
  return {
    currentTime: state.core.currentTime,
    startTime: state.core.startTime,
    endTime: state.core.endTime,
  };
}

class SeekBarContainer extends Component {
  static propTypes = {
    currentTime: PropTypes.number,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    seekTo: PropTypes.func.isRequired,
  }

  static defaultProps = {
    currentTime: 0,
    startTime: 0,
    endTime: Infinity,
  }

  render() {
    return (
      <SeekBar
        currentTime={this.props.currentTime}
        startTime={this.props.startTime}
        endTime={this.props.endTime}
        seekTo={this.props.seekTo}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  { seekTo },
)(SeekBarContainer);
