import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header.js'
import ToolBar from './components/toolbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <Header />
            <ToolBar />
          </ div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
