import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './ControlsWrapper.css';

class ControlsWrapper extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <div />,
  }

  render() {
    const className = classNames({
      [style.ControlsWrapper]: true,
      [style.ControlsWrapperActive]: this.props.isActive,
    });

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

export default ControlsWrapper;
