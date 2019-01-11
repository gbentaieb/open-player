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

  setMainColor(color) {
    this.playerComponent.setMainColor(color);
  }

  play() {
    this.playerComponent.requestPlay(true);
  }

  pause() {
    this.playerComponent.requestPlay(false);
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(this.container);
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

// eslint-disable-next-line import/prefer-default-export
export { OpenPlayer };
