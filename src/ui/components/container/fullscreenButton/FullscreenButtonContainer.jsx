import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as screenfull from 'screenfull';

import FullscreenButton from '../../presentational/fullscreenbutton/FullscreenButton';

import logger from '../../../../utils/logger';

function mapStateToProps(state) {
  return {
    isFullscreen: state.fullscreen.isFullscreen,
    fullscreenContainer: state.fullscreen.container,
  };
}

class FullscreenButtonContainer extends Component {
  static propTypes = {
    isFullscreen: PropTypes.bool.isRequired,
    fullscreenContainer: PropTypes.object,
  }

  static defaultProps = {
    fullscreenContainer: null,
  }

  toggleFullscreen = async () => {
    try {
      if (this.props.isFullscreen) {
        await screenfull.exit();
      } else {
        await screenfull.request(this.props.fullscreenContainer);
      }
    } catch (e) {
      logger.warn('Open Player > fullscreen > Unable to enter / exit fullscreen', e);
    }
  }

  render() {
    return (
      <FullscreenButton
        onClick={this.toggleFullscreen}
        isFullscreen={this.props.isFullscreen}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  {},
)(FullscreenButtonContainer);
