import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';

import { PLAY_GLYPH, PAUSE_GLYPH } from '../../../constants/Glyphs';

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
          glyph={this.props.isPlaying ? PAUSE_GLYPH : PLAY_GLYPH}
        />
      </div>
    );
  }
}

export default PlayPauseButton;
