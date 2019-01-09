import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    color: 'white',
  },
};

class Button extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    Icon: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.setIsHovered = this.setIsHovered.bind(this);
  }

  state = {
    isHovered: false,
  }

  setIsHovered = (bool) => {
    this.setState(state => ({ ...state, isHovered: bool }));
  }

  render() {
    const {
      onClick,
      classes,
      Icon,
    } = this.props;

    return (
      <div
        className={classes.root}
      >
        <IconButton
          color={this.state.isHovered ? 'primary' : 'inherit'}
          onClick={onClick}
          onMouseEnter={() => this.setIsHovered(true)}
          onMouseLeave={() => this.setIsHovered(false)}
        >
          <Icon fontSize="large" />
        </IconButton>
      </div>
    );
  }
}

export { Button };
export default withStyles(styles)(Button);
