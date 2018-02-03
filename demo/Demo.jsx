import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header';
import ToolBar from './components/toolbar/Toolbar';

const App = () => (
  <div className="App">
    <MuiThemeProvider>
      <div>
        <Header />
        <ToolBar />
      </div>
    </MuiThemeProvider>
  </div>
);

export default App;
