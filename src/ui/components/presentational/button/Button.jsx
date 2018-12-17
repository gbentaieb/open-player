import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    color: 'white',
  },
};

class Button extends Component {
  static getSvgPath(glyph) {
    const htmlPath = glyph.node.innerHTML;
    const regex = /<path d="(.*)"><\/path>/;

    return regex.exec(htmlPath)[1];
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    glyph: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.setIsHovered = this.setIsHovered.bind(this);
  }

  state = {
    isHovered: false,
    svgPath: '',
  }

  componentWillMount() {
    const svgPath = Button.getSvgPath(this.props.glyph);

    this.setState(state => ({ ...state, svgPath }));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.glyph !== this.props.glyph) {
      const svgPath = Button.getSvgPath(nextProps.glyph);
      this.setState(state => ({ ...state, svgPath }));
    }
  }

  setIsHovered = (bool) => {
    this.setState(state => ({ ...state, isHovered: bool }));
  }

  render() {
    const {
      glyph,
      onClick,
      classes,
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
          <SvgIcon viewBox={glyph.viewBox}>
            <path d={this.state.svgPath} />
          </SvgIcon>
        </IconButton>
      </div>
    );
  }
}

export { Button };
export default withStyles(styles)(Button);
