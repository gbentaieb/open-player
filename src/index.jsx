import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';

class OpenPlayer {
  static mainDivStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  }

  constructor(container) {
    this.container = container;

    this.renderApp();
  }

  renderApp() {
    ReactDOM.render(
      <div style={OpenPlayer.mainDivStyle}>
        <App />
      </div>,
      this.container,
    );
  }
}

module.exports = OpenPlayer;
