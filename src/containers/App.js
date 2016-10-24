import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips, fetchDays } from '../actions/index'
import Navbar from '../components/Navbar'
import User from './User'
import { Link } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { store } = this.context
    const { dispatch } = this.props
    store.dispatch(fetchTrips)
    store.dispatch(fetchDays)
  }

  navigate(){
    console.log(this.props.history)
  }
  render() {
    const { trips, user, days } = this.props
    const { store } = this.context
    return (
      <div>
        <Navbar user={user ? user[0] : {'first_name': 'sign in'}} />
        <button onClick={this.navigate.bind(this)}> button </button>
        {this.props.children}
      </div>
    )
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    trips: state.displayTrips.trips,
    days: state.displayDays.days,
    user: state.displayUser.user
  }
}

export default connect(mapStateToProps)(App)
