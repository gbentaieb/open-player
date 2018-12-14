import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core';

import GithubIcon from '../../assets/GithubIcon';

const styles = () => ({
  icon: {
    marginRight: 0,
    color: 'black',
  },
});

class SidePanel extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onClickOutside: PropTypes.func.isRequired,
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

  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
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

export { SidePanel };
export default withStyles(styles)(SidePanel);
