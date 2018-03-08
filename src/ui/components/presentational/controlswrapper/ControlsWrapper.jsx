import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './ControlsWrapper.css';

class ControlsWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <div />,
  }

  render() {
    return (
      <div className={style.ControlsWrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default ControlsWrapper;
