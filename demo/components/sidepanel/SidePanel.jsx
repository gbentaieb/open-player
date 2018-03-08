import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import style from './SidePanel.css';

class SidePanel extends Component {
  static propTypes = {
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
    return (
      <div className="SidePanel" ref={this.setWrapperRef}>
        <AppBar
          title="API & Infos"
          showMenuIconButton={false}
        />
        <List>
          <ListItem primaryText="Play" onClick={SidePanel.callPlay} />
          <ListItem primaryText="Pause" onClick={SidePanel.callPause} />
          <Divider />
          <ListItem primaryText="Github repository" onClick={SidePanel.openGithubPage} />
          <div className={style.DescriptionCard}>
            <Paper zDepth={0} >
              <div className={style.DescriptionPaper}>
                Open Player is an open source player to make video streaming easier.
                Checkout the github repository to give us some feedbacks !
              </div>
            </Paper>
          </div>
        </List>
      </div>
    );
  }
}

export default SidePanel;
