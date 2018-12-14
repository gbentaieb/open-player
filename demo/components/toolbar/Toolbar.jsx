import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiToolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import presets from '../../presets';

const styles = {
  toolbar: {
    backgroundColor: 'rgb(232, 232, 232)',
  },
  list: {
    width: '100%',
  },
  textField: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  textFieldContainer: {
    display: 'flex',
  },
  loadButton: {
    marginLeft: '10px',
  },
};

class ToolBar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loadVideo: PropTypes.func.isRequired,
  };

  state = {
    label: presets[1].label,
    value: presets[1].value,
    textFieldValue: '',
  }

  onLoadClicked = () => {
    if (this.state.value) {
      this.props.loadVideo(this.state.value);
    } else {
      this.props.loadVideo(this.state.textFieldValue);
    }
  }

  handleClickListItem = ({ currentTarget }) => {
    this.setState(state => ({ ...state, anchorEl: currentTarget }));
  };

  handleMenuItemClick = (index, label, value) => {
    this.setState(state => ({
      ...state, label, value, selectedIndex: index, anchorEl: null,
    }));
  };

  handleMenuClose = () => {
    this.setState(state => ({ ...state, anchorEl: null }));
  };

  handleTextFieldChange = ({ target }) => {
    this.setState(state => ({
      ...state,
      textFieldValue: target.value,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const menuItems = presets.map(({ index, value, label }) => (
      <MenuItem
        value={value}
        key={index}
        onClick={() => this.handleMenuItemClick(index, label, value)}
      >
        {label}
      </MenuItem>
    ));

    return (
      <div>
        <MuiToolbar className={classes.toolbar}>
          <List component="nav" className={classes.list}>
            <ListItem
              button
              onClick={this.handleClickListItem}
            >
              <ListItemText
                primary={this.state.label}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleMenuClose}
          >
            {menuItems}
          </Menu>
          <Button
            variant="contained"
            color="primary"
            className={classes.loadButton}
            onClick={this.onLoadClicked}
          >
            Load
          </Button>
        </MuiToolbar>
        <br />
        { !this.state.value &&
          <div className={classes.textFieldContainer}>
            <TextField
              id="Content URL"
              label="Content URL"
              className={classes.textField}
              value={this.state.textFieldValue}
              onChange={this.handleTextFieldChange}
              margin="normal"
              fullWidth
              innerRef={(t) => { this.TextField = t; }}
            />
          </div>
        }
      </div>
    );
  }
}

export { ToolBar };
export default withStyles(styles)(ToolBar);
