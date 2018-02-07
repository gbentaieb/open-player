import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setConfig } from '../actions/ConfigActions';
import CorePlayerContainer from '../components/container/coreplayer/CorePlayerContainer';

class Player extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object,
  };

  componentDidMount() {
    const { config } = this.props;
    this.context.store.dispatch(setConfig(config));
  }

  componentWillReceiveProps(nextProps) {
    const { config } = this.props;

    if (nextProps.config !== config) {
      this.context.store.dispatch(setConfig(nextProps.config));
    }
  }

  render() {
    return (
      <div>
        <CorePlayerContainer />
      </div>
    );
  }
}

export default Player;
