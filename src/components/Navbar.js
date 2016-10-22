import React, { PropTypes } from 'react';
import Login from './Login'

const Navbar = ({ user }) => (
  <nav>

    <span> Hello { user.first_name }! </span>
    <span> Homebase { user.homebase } </span>
    <span> Trip me Up </span>
    <Login />


  </nav>
)

Navbar.propTypes = {
  user: PropTypes.object.isRequired
}

export default Navbar;
