import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as screenfull from 'screenfull';

import { setIsFullscreen, setFullscreenContainer } from '../../../actions/FullscreenActions';

function mapStateToProps(state) {
  return {
    isFullscreen: state.fullscreen.isFullscreen,
  };
}

class FullscreenContainer extends Component {
  static propTypes = {
    isFullscreen: PropTypes.bool.isRequired,
    setIsFullscreen: PropTypes.func.isRequired,
    setFullscreenContainer: PropTypes.func.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  constructor(props) {
    super(props);
    this.onFullscreenChange = this.onFullscreenChange.bind(this);
  }

  componentDidMount() {
    this.props.setIsFullscreen(this.isFullscreen());
    this.props.setFullscreenContainer(this.container);

    if (screenfull.enabled) screenfull.on('change', this.onFullscreenChange);
  }

  componentWillUnmount() {
    if (screenfull.enabled) screenfull.off('change', this.onFullscreenChange);
  }

  onFullscreenChange() {
    if (this.props.isFullscreen !== this.isFullscreen()) {
      this.props.setIsFullscreen(this.isFullscreen());
    }
  }

  isFullscreen() {
    return screenfull.enabled && screenfull.isFullscreen && screenfull.element === this.container;
  }

  render() {
    return (
      <div ref={(c) => { this.container = c; }}>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    setIsFullscreen,
    setFullscreenContainer,
  },
)(FullscreenContainer);
