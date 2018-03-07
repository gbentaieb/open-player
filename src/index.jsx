import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';

class OpenPlayer {
  static mainDivStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  }

  constructor(container, config) {
    this.container = container;
    this.config = config;
    this.onLoad = this.onLoad.bind(this);

    this.renderApp(config);
  }

  onLoad(playerComponent) {
    this.playerComponent = playerComponent;
  }

  loadVideo(config) {
    this.config = { ...this.config, ...config };
    this.renderApp();
  }

  play() {
    this.playerComponent.requestPlay(true);
  }

  pause() {
    this.playerComponent.requestPlay(false);
  }

  renderApp() {
    ReactDOM.render(
      <div style={OpenPlayer.mainDivStyle}>
        <App config={this.config} onLoad={this.onLoad} />
      </div>,
      this.container,
    );
  }
}

module.exports = OpenPlayer;
