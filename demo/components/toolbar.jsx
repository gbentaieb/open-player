import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import presets from '../presets';

class Header extends Component {
  state = {
    value: presets[1].value,
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
            <RaisedButton label="Load" primary />
          </ToolbarGroup>
        </Toolbar>
        <br />
        { !this.state.value &&
          <div style={{ margin: '10px', 'margin-top': '0px' }}>
            <TextField floatingLabelText="Content URL" fullWidth />
          </div>
        }
      </div>
    );
  }
}

export default Header;
