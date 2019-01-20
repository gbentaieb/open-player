import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CorePlayer.css';
import logger from '../../../../utils/logger';
import { LOADED } from '../../../constants/CoreStates';

class CorePlayer extends Component {
  static propTypes = {
    videoElement: PropTypes.object.isRequired,
    RxPlayer: PropTypes.func.isRequired,
    url: PropTypes.string,
    playRequested: PropTypes.bool.isRequired,
    setPlayerState: PropTypes.func.isRequired,
    setPlayerTimes: PropTypes.func.isRequired,
    setForcedMuted: PropTypes.func.isRequired,
    seekingTime: PropTypes.number,
    forcedMuted: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    url: '',
    seekingTime: 0,
  }

  constructor(props) {
    super(props);

    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.onPositionUpdate = this.onPositionUpdate.bind(this);
  }

  componentDidMount() {
    const { url } = this.props;

    this.insertVideoElement();
    this.setVideoElementProperties();
    this.createRxPlayer();
    this.listenToRxPlayerEvent();

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

    if (nextProps.seekingTime !== this.props.seekingTime) {
      this.rxPlayer.seekTo(nextProps.seekingTime);
    }

    if (nextProps.forcedMuted !== this.props.forcedMuted) {
      this.props.videoElement.muted = nextProps.forcedMuted;
    }
  }

  componentWillUnmount() {
    this.unlistenToRxPlayerEvent();
    this.rxPlayer.dispose();
  }

  async onPlayerStateChange(event) {
    this.props.setPlayerState(event);

    if (event === LOADED) {
      try {
        await this.rxPlayer.play();
      } catch (e) {
        this.props.setForcedMuted(true);
        logger.warn('Open Player > core > could not autoplay', e);
      }
    }
  }

  onPositionUpdate({ position, duration, liveGap }) {
    const times = {
      currentTime: position,
      startTime: liveGap
        ? (liveGap + position) - duration
        : 0,
      endTime: liveGap
        ? position + liveGap
        : duration,
    };

    this.props.setPlayerTimes(times);
  }

  getLoadVideoOptions = ({ url }) => (
    {
      url,
      transport: 'dash',
      autoPlay: false,
    }
  )

  setVideoElementProperties() {
    const { videoElement } = this.props;

    videoElement.className = styles.videoElement;
    videoElement.controls = false;
    videoElement.disableRemotePlayback = true;
    videoElement.playsinline = '';
    videoElement.align = 'middle';
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

  listenToRxPlayerEvent() {
    this.rxPlayer.addEventListener('playerStateChange', this.onPlayerStateChange);
    this.rxPlayer.addEventListener('positionUpdate', this.onPositionUpdate);
  }

  unlistenToRxPlayerEvent() {
    this.rxPlayer.removeEventListener('playerStateChange', this.onPlayerStateChange);
    this.rxPlayer.removeEventListener('positionUpdate', this.onPositionUpdate);
  }

  render() {
    return (
      <div
        className={styles.videoContainer}
        ref={(c) => { this.videoContainer = c; }}
      />
    );
  }
}

export default CorePlayer;
