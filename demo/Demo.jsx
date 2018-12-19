import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import Header from './components/header/Header';
import ToolBar from './components/toolbar/Toolbar';
import PlayerContainer from './components/playercontainer/PlayerContainer';

const defaultTheme = {
  typography: {
    useNextVariants: true,
  },
};

const styles = {
  playerContainer: {
    width: '80%',
    height: '80%',
    margin: 'auto',
  },
};

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(...args) {
    super(...args);
    this.loadVideo = this.loadVideo.bind(this);
    this.setMainColor = this.setMainColor.bind(this);
  }

  state = {
    theme: createMuiTheme(defaultTheme),
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

  loadVideo(url) {
    if (this.openPlayer) {
      this.openPlayer.loadVideo({ url });
    } else {
      const container = this.playerContainer.domContainer;
      this.openPlayer = new OpenPlayer(container, { url });
      window.$openPlayer = this.openPlayer;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <MuiThemeProvider theme={this.state.theme}>
          <div>
            <Header setMainColor={this.setMainColor} />
            <ToolBar loadVideo={this.loadVideo} />
            <div className={classes.PlayerContainer}>
              <PlayerContainer ref={(c) => { this.playerContainer = c; }} />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export { App };
export default withStyles(styles)(App);
