import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CorePlayer.css';

class CorePlayer extends Component {
  static propTypes = {
    videoElement: PropTypes.object.isRequired,
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

    this.insertVideoElement();
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

  getLoadVideoOptions = ({ url }) => (
    {
      url,
      transport: 'dash',
      autoPlay: true,
    }
  )

  setVideoElementProperties() {
    const { videoElement } = this.props;

    videoElement.className = styles.videoElement;
    videoElement.controls = false;
    videoElement.disableRemotePlayback = true;
    videoElement.playsinline = '';
  }

  insertVideoElement() {
    const { videoElement } = this.props;
    this.videoContainer.appendChild(videoElement);
  }

  createRxPlayer() {
    this.rxPlayer = new this.props.RxPlayer({
      videoElement: this.props.videoElement,
      limitVideoWidth: true,
      throttleWhenHidden: true,
    });

    return this.rxPlayer;
  }

  render() {
    return (
      <div ref={(c) => { this.videoContainer = c; }} />
    );
  }
}

export default CorePlayer;
