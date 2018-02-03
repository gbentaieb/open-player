import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import presets from '../presets';

const customPreset = {
  label: 'Custom URL',
  value: null,
}

class Header extends Component {
  state = {
    selectedIndex: -1,
    value: '',
  }

  handleChange = (event, index, value) => {
    this.setState({
      selectedIndex: index,
      value,
    });
  }

  componentDidMount() {
    this.setState(() => ({
      selectedIndex: 1,
      value: presets[0].value,
    }))
  }

  render() {
    const menuItems = [ customPreset, ...presets].map(({ value, label }, index) => (
      <MenuItem value={value} key={index} primaryText={label}/>
    ))
    return (
      <div className='Toolbar'>
        <Toolbar>
          <ToolbarGroup firstChild={true} style={{ width: '100%', margin: 0 }}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              {menuItems}
            </DropDownMenu>
            <ToolbarSeparator />
            <RaisedButton label='Load' primary={true} />
          </ToolbarGroup>
        </Toolbar>
        <br />
        { !this.state.value &&
          <div style={{margin: '10px', 'margin-top':'0px'}}>
            <TextField floatingLabelText="Content URL" fullWidth/>
          </div>
        }
      </div>
    );
  }
}

export default Header;
