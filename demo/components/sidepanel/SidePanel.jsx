import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import StarRate from '@material-ui/icons/StarRate';
import { withStyles } from '@material-ui/core';

import GithubIcon from '../../assets/GithubIcon';

const redColor = '#cc0000';
const blueColor = '#2196f3';
const greenColor = '#4caf50';

function getRandomColor() {
  const rand1 = Math.floor(Math.random() * 255);
  const rand2 = Math.floor(Math.random() * 255);
  const rand3 = Math.floor(Math.random() * 255);

  return `rgb(${rand1},${rand2},${rand3})`;
}

const styles = () => ({
  icon: {
    marginRight: 0,
    color: 'black',
  },
  red: {
    color: redColor,
  },
  blue: {
    color: blueColor,
  },
  green: {
    color: greenColor,
  },
});

class SidePanel extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onClickOutside: PropTypes.func.isRequired,
    setMainColor: PropTypes.func.isRequired,
  };

  static openGithubPage() {
    window.open('https://github.com/gbentaieb/open-player');
  }

  static callPlay() {
    if (window.$openPlayer) window.$openPlayer.play();
  }

  static callPause() {
    if (window.$openPlayer) window.$openPlayer.pause();
  }

  static callSetMainColor(color) {
    if (window.$openPlayer) window.$openPlayer.setMainColor(color);
  }

  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.onColorExpandOrClose = this.onColorExpandOrClose.bind(this);
  }

  state = {
    isColorOpened: false,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  onColorExpandOrClose() {
    this.setState(state => ({ ...state, isColorOpened: !state.isColorOpened }));
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  setMainColor(color) {
    SidePanel.callSetMainColor(color);
    this.props.setMainColor(color);
  }

  getColorListItem(itemColor, itemName) {
    const color = itemColor || getRandomColor();

    return (
      <ListItem
        button
        className={this.props.classes.nestedColor}
        onClick={() => this.setMainColor(color)}
      >
        <ListItemIcon className={this.props.classes[itemName]}>
          <StarRate />
        </ListItemIcon>
        <ListItemText inset primary={itemName} />
      </ListItem>
    );
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onClickOutside();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div ref={this.setWrapperRef}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              { this.isBurgerOpen ? '' : 'Open Player Demo' }
            </Typography>
          </Toolbar>
        </AppBar>
        <List component="nav">
          <ListItem button onClick={this.onColorExpandOrClose}>
            <ListItemText primary="Set main color" />
            {this.state.isColorOpened ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.isColorOpened} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {this.getColorListItem(redColor, 'red')}
              {this.getColorListItem(blueColor, 'blue')}
              {this.getColorListItem(greenColor, 'green')}
              {this.getColorListItem(null, 'random')}
            </List>
          </Collapse>
          <Divider />
          <ListItem button onClick={SidePanel.callPlay}>
            <ListItemText primary="Play" />
          </ListItem>
          <ListItem button onClick={SidePanel.callPause}>
            <ListItemText primary="Pause" />
          </ListItem>
          <Divider />
          <ListItem button onClick={SidePanel.openGithubPage}>
            <ListItemIcon className={classes.icon}>
              <GithubIcon />
            </ListItemIcon>
            <ListItemText primary="Github repository" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export { SidePanel, getRandomColor };
export default withStyles(styles)(SidePanel);
