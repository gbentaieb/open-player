import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './HeaderWrapper.css';

class HeaderWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <div />,
  }

  render() {
    return (
      <div className={style.HeaderWrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default HeaderWrapper;
