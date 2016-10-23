import React, { PropTypes } from 'react';
import Login from './Login'
import { Link } from 'react-router'

const Navbar = ({ user }) => (
  <nav>

    <span> Hello { user.first_name }! </span>
    <span> Homebase { user.homebase } </span>
    <span> Trip me Up </span>
      <Link to="trip"> Trip </Link>
      <Link to="user"> User </Link>
    <Login />


  </nav>
)

Navbar.propTypes = {
  user: PropTypes.object.isRequired
}

export default Navbar;
