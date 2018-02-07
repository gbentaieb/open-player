import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setConfig } from '../actions/ConfigActions';

class Player extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object,
  };

  componentDidMount() {
    this.context.store.dispatch(setConfig(this.props.config));
  }

  render() {
    return <div />;
  }
}

export default Player;
