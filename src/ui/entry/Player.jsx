import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import { setConfig } from '../actions/ConfigActions';
import { requestPlay } from '../actions/CoreActions';

import CorePlayerContainer from '../components/container/coreplayer/CorePlayerContainer';
import ControlsContainer from '../components/container/controlscontainer/ControlsContainer';

import style from './Player.css';
import SpinnerContainer from '../components/container/spinner/SpinnerContainer';

const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

class Player extends Component {
  static propTypes = {
    videoElement: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    onLoad: PropTypes.func.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object,
  };

  state = {
    theme: createMuiTheme(defaultTheme),
  }

  componentWillMount() {
    const { config } = this.props;

    if (config.mainColor) {
      this.setMainColor(config.mainColor);
    }
  }

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

  setMainColor(color) {
    const palette = {
      primary: {
        main: color,
      },
    };

    this.setState(state => ({
      ...state,
      theme: createMuiTheme({ ...defaultTheme, palette }),
    }));
  }

  requestPlay(play) {
    this.context.store.dispatch(requestPlay(play));
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <div>
          <div className={style.ControlsWrapper}>
            <ControlsContainer />
          </div>
          <div className={style.CoreWrapper}>
            <CorePlayerContainer videoElement={this.props.videoElement} />
          </div>
          <div className={style.SpinnerWrapper}>
            <SpinnerContainer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Player;
