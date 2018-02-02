import React, { Component } from "react";
import PropTypes from 'prop-types';
import { List, ListItem } from "material-ui/List";
import AppBar from 'material-ui/AppBar';

class Header extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onClickOutside();
    }
  }

  render() {
    return (
      <div className="SidePanel" ref={this.setWrapperRef}>
        <AppBar
          title={'API'}
          showMenuIconButton={false}
        />
        <List>
          <ListItem primaryText="play" />
          <ListItem primaryText="pause" />
          <ListItem primaryText="mute" />
          <ListItem primaryText="unmute" />
        </List>
      </div>
    );
  }
}

export default Header;
