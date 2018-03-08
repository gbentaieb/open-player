import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setConfig } from '../actions/ConfigActions';
import { requestPlay } from '../actions/CoreActions';

import CorePlayerContainer from '../components/container/coreplayer/CorePlayerContainer';
import ControlsContainer from '../components/container/controlscontainer/ControlsContainer';

import style from './Player.css';

class Player extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    onLoad: PropTypes.func.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object,
  };

  componentDidMount() {
    const { config } = this.props;
    this.context.store.dispatch(setConfig(config));
    this.props.onLoad(this);
  }

  componentWillReceiveProps(nextProps) {
    const { config } = this.props;

    if (nextProps.config !== config) {
      this.context.store.dispatch(setConfig(nextProps.config));
    }
  }

  requestPlay(play) {
    this.context.store.dispatch(requestPlay(play));
  }

  render() {
    return (
      <div>
        <div className={style.ControlsWrapper}>
          <ControlsContainer />
        </div>
        <div className={style.CoreWrapper}>
          <CorePlayerContainer />
        </div>
      </div>
    );
  }
}

export default Player;
