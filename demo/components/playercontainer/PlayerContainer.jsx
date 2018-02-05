/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import style from './PlayerContainer.css';

class PlayerContainer extends Component {
  render() {
    return (
      <div className={style.PlayerContainerWrapper}>
        <div
          className={style.PlayerContainer}
          ref={(c) => { this.domContainer = c; }}
        />
      </div>
    );
  }
}

export default PlayerContainer;

