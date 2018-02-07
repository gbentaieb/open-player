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

    this.renderApp(config);
  }

  renderApp() {
    ReactDOM.render(
      <div style={OpenPlayer.mainDivStyle}>
        <App config={this.config} />
      </div>,
      this.container,
    );
  }
}

module.exports = OpenPlayer;
