import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardExampleWithAvatar from './CardExampleWithAvatar';

const App = () => (
  <div>
    <MuiThemeProvider>
      <CardExampleWithAvatar/>
    </MuiThemeProvider>
    <MuiThemeProvider>
      <CardExampleWithAvatar/>
    </MuiThemeProvider>
    <MuiThemeProvider>
      <CardExampleWithAvatar/>
    </MuiThemeProvider>
  </div>
);

export default App;
