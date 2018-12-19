import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import SidePanel from '../sidepanel/SidePanel';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  typography: {
    flexGrow: 1,
    textAlign: 'center',
  },
};

class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    setMainColor: PropTypes.func.isRequired,
  };

  state = {
    isBurgerOpen: false,
  }

  onLeftIconButtonClick = () => {
    this.setState(prevState => ({ isBurgerOpen: !prevState.isBurgerOpen }));
  }

  closeBurger = () => {
    this.setState(() => ({ isBurgerOpen: false }));
  }

  render() {
    const { classes } = this.props;
    const { isBurgerOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.onLeftIconButtonClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.typography}>
              { isBurgerOpen ? '' : 'Open Player Demo' }
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={isBurgerOpen}>
          <SidePanel
            onClickOutside={this.closeBurger}
            setMainColor={this.props.setMainColor}
          />
        </Drawer>
      </div>
    );
  }
}

export { Header };
export default withStyles(styles)(Header);
