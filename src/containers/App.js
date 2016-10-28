import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips, fetchDays, fetchUser, loginUser, logoutUser, fetchNotifications } from '../actions/index'
import Navbar from '../components/Navbar'
import User from './User'
import { Link } from 'react-router'
import NotificationSystem from 'react-notification-system'


class App extends React.Component {
  constructor(props) {
    super(props)
    this._notificationSystem = null
  }

  _addNotification = () => {
    this._notificationSystem.addNotification({
      message: 'Hey',
      level: 'success'
    });
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
    console.log(this.props)
  }

  // componentDidUpdate() {
  //   this.refs.notificationSystem.addNotification({
  //     message: 'hi',
  //     level: 'success'
  //   });
  // }


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
          fetchNotifications={fetchNotifications}
        />
        {this.props.children}
        <div>
          <button onClick={this._addNotification}>Add notification</button>
          <NotificationSystem ref="notificationSystem" />
        </div>
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
    errorMessage: state.auth.errorMessage,
    notifierMessage: state.notification.notifier_message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser()),
    fetchNotifications: (user_id) => dispatch(fetchNotifications(user_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
