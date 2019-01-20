import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MutedIcon from '@material-ui/icons/VolumeOff';

import Button from '../button/Button';

import style from './ForcedMuttedButton.css';

class ForcedMuttedButton extends Component {
  static propTypes = {
    videoElement: PropTypes.object.isRequired,
    forcedMuted: PropTypes.bool.isRequired,
    setForcedMuted: PropTypes.func.isRequired,
  }

  static defaultProps = {
    /* Add default props */
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.videoElement.muted = false;
    this.props.setForcedMuted(false);
  }

  render() {
    return this.props.forcedMuted ? (
      <div className={style.ForcedMuttedButton}>
        <Button
          onClick={this.onClick}
          Icon={MutedIcon}
        />
      </div>
    ) : null;
  }
}

export default ForcedMuttedButton;
