import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PauseIcon from '@material-ui/icons/Pause';
import PlayIcon from '@material-ui/icons/PlayArrow';

import Button from '../button/Button';

import style from './PlayPauseButton.css';

class PlayPauseButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    /* Add default props */
  }

  render() {
    return (
      <div className={style.PlayPauseButton}>
        <Button
          onClick={this.props.onClick}
          Icon={this.props.isPlaying ? PauseIcon : PlayIcon}
        />
      </div>
    );
  }
}

export default PlayPauseButton;
