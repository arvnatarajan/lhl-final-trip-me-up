import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips, fetchDays, fetchUser, loginUser, logoutUser } from '../actions/index'
import Navbar from '../components/Navbar'
import User from './User'
import { Link } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { trips, user, days, loginUser, logoutUser, isAuthenticated, errorMessage } = this.props
    return (
      <div>
        <Navbar
          user={user ? user : ['first_name': 'sign in']}
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          loginUser={loginUser}
          logoutUser={logoutUser}
        />
        <Link to="user/1"> User </Link>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.userTrips,
    days: state.tripDays,
    user: state.user,
    modalStatus: state.modalStatus,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
