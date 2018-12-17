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
    this.createVideoElement();

    this.container = container;
    this.config = config;
    this.onLoad = this.onLoad.bind(this);

    this.renderApp(config);
  }

  onLoad(playerComponent) {
    this.playerComponent = playerComponent;
  }

  createVideoElement() {
    const videoElement = document.createElement('video');

    videoElement.setAttribute('autoplay', true);
    videoElement.load();
    this.videoElement = videoElement;
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
        <App videoElement={this.videoElement} config={this.config} onLoad={this.onLoad} />
      </div>,
      this.container,
    );
  }
}

module.exports = OpenPlayer;
