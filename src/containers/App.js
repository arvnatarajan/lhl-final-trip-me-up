import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips, fetchDays, fetchUser } from '../actions/index'
import Navbar from '../components/Navbar'
import User from './User'
import { Link } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(1)
  }

  navigate(){
    console.log(this.props.history)
  }

  render() {
    const { trips, user, days } = this.props
    return (
      <div>
        <Navbar user={user ? user : ['first_name': 'sign in']} />
        <button onClick={this.navigate.bind(this)}> button </button>
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
    modalStatus: state.modalStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
