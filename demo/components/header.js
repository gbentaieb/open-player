import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SidePanel from './sidePanel';
import Drawer from 'material-ui/Drawer';

class Header extends Component {
  state = {
    isBurgerOpen: false,
  }

  onLeftIconButtonClick = () => {
    this.setState((prevState) => ({ isBurgerOpen: !prevState.isBurgerOpen }))
  }

  closeBurger = () => {
    this.setState(() => ({ isBurgerOpen: false }))
  }

  render() {
    return (
      <div className="Header">
        <AppBar
          title={this.state.isBurgerOpen ? "" : "Open Player Demo"}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.onLeftIconButtonClick}
        />
        <Drawer width={200} open={this.state.isBurgerOpen} >
          <SidePanel onClickOutside={this.closeBurger}/>
        </Drawer>
      </div>
    );
  }
}

export default Header;