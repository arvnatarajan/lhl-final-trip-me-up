import React, { PropTypes } from 'react';
import Login from './Login'
import Logout from './Logout'
import { loginUser, logoutUser } from '../actions/index'
import { Link } from 'react-router'

const Navbar = ({ user, isAuthenticated, errorMessage, loginUser, logoutUser, fetchTrips, fetchNotifications }) => (
  <nav className="nav">
    <div className="title">trip me up</div>

    {!isAuthenticated &&
      <Login
        errorMessage={errorMessage}
        onLoginClick={ creds => loginUser(creds) }
        fetchTrips={fetchTrips}
        fetchNotifications={ user_id => fetchNotifications(user_id) }
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
