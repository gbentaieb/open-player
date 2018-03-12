import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    glyph: PropTypes.object.isRequired,
    color: PropTypes.string,
    hoverColor: PropTypes.string.isRequired,
  }

  static defaultProps = {
    color: 'white',
  }

  constructor(...args) {
    super(...args);
    this.addHoverColor = this.addHoverColor.bind(this);
    this.removeHoverColor = this.removeHoverColor.bind(this);
  }

  state = {
    iconColor: 'white',
  }

  addHoverColor = () => {
    this.setState(() => ({ iconColor: this.props.hoverColor }));
  }

  removeHoverColor = () => {
    this.setState(() => ({ iconColor: this.props.color }));
  }

  render() {
    const {
      glyph,
      onClick,
      hoverColor,
    } = this.props;

    return (
      <IconButton
        onClick={onClick}
        onMouseEnter={this.addHoverColor}
        onMouseLeave={this.removeHoverColor}
        iconStyle={{
          color: this.state.iconColor,
          fill: 'currentColor',
          width: '70%',
          height: '70%',
        }}
        hoveredStyle={{ color: hoverColor }}
        ref={(c) => { this.iconButton = c; }}
      >
        <svg viewBox={`${glyph.viewBox}`}>
          <use xlinkHref={`#${glyph.id}`} />
        </svg>
      </IconButton>
    );
  }
}

export default Button;
