import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setIsActive } from '../../../actions/ActivityActions';

import style from './ActivityDetectorContainer.css';

export function mapStateToProps(state) {
  return {
    isActive: state.activity.isActive,
  };
}

class ActivityDetectorContainer extends Component {
  static ACTIVITY_TIMEOUT = 3000

  static activityOnEvents = [
    'mouseenter',
    'mousemove',
    'touchstart',
    'touchmove',
    'touchend',
  ]

  static activityOffEvents = [
    'mouseLeave',
    'touchcancel',
  ]

  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    setIsActive: PropTypes.func.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  constructor(props) {
    super(props);
    this.onActivityOn = this.onActivityOn.bind(this);
    this.onActivityOff = this.onActivityOff.bind(this);
  }

  componentDidMount() {
    ActivityDetectorContainer.activityOnEvents.forEach((event) => {
      this.container.addEventListener(event, this.onActivityOn);
    });

    ActivityDetectorContainer.activityOffEvents.forEach((event) => {
      this.container.addEventListener(event, this.onActivityOff);
    });
  }

  componentWillUnmount() {
    this.clearActivityTimeout();

    ActivityDetectorContainer.activityOnEvents.forEach((event) => {
      this.container.removeEventListener(event, this.onActivityOn);
    });

    ActivityDetectorContainer.activityOffEvents.forEach((event) => {
      this.container.removeEventListener(event, this.onActivityOff);
    });
  }

  onActivityOn() {
    this.clearActivityTimeout();

    if (!this.props.isActive) {
      this.props.setIsActive(true);
    }

    this.activityTimeout = setTimeout(() => {
      this.props.setIsActive(false);
    }, ActivityDetectorContainer.ACTIVITY_TIMEOUT);
  }

  onActivityOff() {
    this.clearActivityTimeout();

    if (this.props.isActive) {
      this.props.setIsActive(false);
    }
  }

  clearActivityTimeout() {
    if (this.activityTimeout) {
      clearTimeout(this.activityTimeout);
    }
  }

  render() {
    const className = this.props.isActive ? style.ActiveContainer : style.InactiveContainer;

    return (
      <div className={className} ref={(c) => { this.container = c; }}>
        {this.props.children}
      </div>
    );
  }
}

export const UnconnectedActivityDetectorContainer = ActivityDetectorContainer;
export default connect(
  mapStateToProps,
  {
    setIsActive,
  },
)(ActivityDetectorContainer);
