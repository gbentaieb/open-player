import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import presets from '../../presets';

class ToolBar extends Component {
  static propTypes = {
    loadVideo: PropTypes.func.isRequired,
  };

  state = {
    value: presets[1].value,
  }

  onLoadClicked = () => {
    if (this.state.value) {
      this.props.loadVideo(this.state.value);
    } else {
      this.props.loadVideo(this.TextField.value);
    }
  }

  handleChange = (event, index, value) => {
    this.setState({
      value,
    });
  }

  render() {
    const menuItems = presets.map(({ index, value, label }) => (
      <MenuItem value={value} key={index} primaryText={label} />
    ));
    return (
      <div className="Toolbar">
        <Toolbar>
          <ToolbarGroup firstChild style={{ width: '100%', margin: 0 }}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              {menuItems}
            </DropDownMenu>
            <ToolbarSeparator />
            <RaisedButton label="Load" primary onClick={this.onLoadClicked} />
          </ToolbarGroup>
        </Toolbar>
        <br />
        { !this.state.value &&
          <div style={{ margin: '10px', marginTop: '0px' }}>
            <TextField
              floatingLabelText="Content URL"
              fullWidth
              ref={(t) => { this.TextField = t; }}
            />
          </div>
        }
      </div>
    );
  }
}

export default ToolBar;
