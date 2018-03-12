/* eslint-disable no-debugger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CorePlayer.css';

class CorePlayer extends Component {
  static propTypes = {
    RxPlayer: PropTypes.func.isRequired,
    url: PropTypes.string,
    playRequested: PropTypes.bool.isRequired,
    setPlayerState: PropTypes.func.isRequired,
  }

  static defaultProps = {
    url: '',
  }

  componentDidMount() {
    const { url } = this.props;

    this.setVideoElementProperties();
    this.createRxPlayer();

    this.rxPlayer.addEventListener('playerStateChange', (event) => {
      this.props.setPlayerState(event);
    });

    if (url) {
      const options = this.getLoadVideoOptions({ url });
      this.rxPlayer.loadVideo(options);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { url, playRequested } = this.props;

    if (nextProps.url !== url) {
      const options = this.getLoadVideoOptions({ url: nextProps.url });
      this.rxPlayer.loadVideo(options);
    }

    if (nextProps.playRequested !== playRequested) {
      if (nextProps.playRequested) {
        this.rxPlayer.play();
      } else {
        this.rxPlayer.pause();
      }
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
