import React, { PropTypes } from 'react';
import Login from './Login'
import Logout from './Logout'
import { loginUser, logoutUser } from '../actions/index'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem} from 'react-bootstrap'

const Navigation = ({ user, isAuthenticated, errorMessage, loginUser, logoutUser, fetchTrips, fetchNotifications }) => (


const Navbar = ({ user, isAuthenticated, errorMessage, loginUser, logoutUser, fetchTrips, fetchNotifications }) => (
  <nav className="nav">
    <div className="title">trip me up</div>
  <nav>

    <Navbar.Header>
      <Navbar.Brand>
        <a> Trip me Up </a>
      </Navbar.Brand>
    </Navbar.Header>

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

Navigation.propTypes = {
  user: PropTypes.array.isRequired
}

export default Navigation;
