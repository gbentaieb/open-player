import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header';
import ToolBar from './components/toolbar/Toolbar';
import PlayerContainer from './components/playercontainer/PlayerContainer';

const App = () => (
  <div className="App">
    <MuiThemeProvider>
      <div>
        <Header />
        <ToolBar />
        <PlayerContainer />
      </div>
    </MuiThemeProvider>
  </div>
);

export default App;
