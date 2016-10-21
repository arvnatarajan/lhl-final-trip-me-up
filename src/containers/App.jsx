import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from '../components/Navbar.jsx'
import Signup from '../components/Signup.jsx'
import Carousel from '../components/Carousel.jsx'


const App = () => (
  <div>
    <Navbar />
    <div className="flex-grid">
      <Signup className="col"/>
      <Carousel className="col carousel"/>
    </div>
  </div>
);

export default App;
