import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import ExitFullscreenIcon from '@material-ui/icons/FullscreenExit';

import Button from '../button/Button';

import style from './FullscreenButton.css';

class FullscreenButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isFullscreen: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    /* Add default props */
  }

  render() {
    return (
      <div className={style.PlayPauseButton}>
        <Button
          onClick={this.props.onClick}
          Icon={this.props.isFullscreen ? ExitFullscreenIcon : FullscreenIcon}
        />
      </div>
    );
  }
}

export default FullscreenButton;
