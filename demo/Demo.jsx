import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header';
import ToolBar from './components/toolbar/Toolbar';
import PlayerContainer from './components/playercontainer/PlayerContainer';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.loadVideo = this.loadVideo.bind(this);
  }

  loadVideo(url) {
    if (this.openPlayer) {
      this.openPlayer.loadVideo({ url });
    } else {
      const container = this.playerContainer.domContainer;
      this.openPlayer = new OpenPlayer(container, { url });
    }
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <Header />
            <ToolBar loadVideo={this.loadVideo} />
            <PlayerContainer ref={(c) => { this.playerContainer = c; }} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
