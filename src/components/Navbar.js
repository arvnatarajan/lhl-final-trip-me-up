import React, { PropTypes } from 'react';
import Login from './Login'
import Logout from './Logout'
import { loginUser, logoutUser } from '../actions/index'
import { Link } from 'react-router'

const Navbar = ({ user, isAuthenticated, errorMessage, loginUser, logoutUser, fetchTrips }) => (
  <nav>
    <span> Hello { user.first_name }! </span>
    <span> Homebase { user.homebase } </span>
    <span> Trip me Up </span>

    {!isAuthenticated &&
      <Login
        errorMessage={errorMessage}
        onLoginClick={ creds => loginUser(creds) }
        fetchTrips={fetchTrips}
      />
    }

    {isAuthenticated &&
      <Logout onLogoutClick={ () => logoutUser() } />
    }

  </nav>
)

Navbar.propTypes = {
  user: PropTypes.array.isRequired
}

export default Navbar;
