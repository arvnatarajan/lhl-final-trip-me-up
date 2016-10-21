import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from '../components/Login.jsx'


const App = () => (
  <div>
    <MuiThemeProvider>
      <Login />
    </MuiThemeProvider>
  </div>
);

export default App;
