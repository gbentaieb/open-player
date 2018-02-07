/* eslint-disable no-debugger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CorePlayer.css';

class PlayerCore extends Component {
  static propTypes = {
    url: PropTypes.string,
  }

  static defaultProps = {
    url: '',
  }

  componentDidMount() {
    const { url } = this.props;

    this.setVideoElementProperties();

    if (url) {
      this.videoElement.src = url;
    }
  }

  componentWillReceiveProps(nextProps) {
    const { url } = this.props;
    if (nextProps.url !== url) {
      this.videoElement.src = nextProps.url;
    }
  }

  setVideoElementProperties() {
    this.videoElement.autoplay = true;
    this.videoElement.muted = true;
  }

  render() {
    return (
      <div>
        <video
          className={styles.video}
          ref={(v) => { this.videoElement = v; }}
        />
      </div>
    );
  }
}

export default PlayerCore;
