/* eslint-disable no-debugger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CorePlayer.css';

class CorePlayer extends Component {
  static propTypes = {
    url: PropTypes.string,
    RxPlayer: PropTypes.func.isRequired,
  }

  static defaultProps = {
    url: '',
  }

  componentDidMount() {
    const { url } = this.props;

    this.setVideoElementProperties();
    this.createRxPlayer();

    if (url) {
      const options = this.getLoadVideoOptions({ url });
      this.rxPlayer.loadVideo(options);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { url } = this.props;

    if (nextProps.url !== url) {
      const options = this.getLoadVideoOptions({ url: nextProps.url });
      this.rxPlayer.loadVideo(options);
    }
  }

  setVideoElementProperties() {
    this.videoElement.controls = false;
    this.videoElement.disableRemotePlayback = true;
    this.videoElement.playsinline = '';
  }

  getLoadVideoOptions = ({ url }) => (
    {
      url,
      transport: 'dash',
      autoPlay: true,
    }
  )

  createRxPlayer() {
    this.rxPlayer = new this.props.RxPlayer({
      videoElement: this.videoElement,
      limitVideoWidth: true,
      throttleWhenHidden: true,
    });

    return this.rxPlayer;
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

export default CorePlayer;
