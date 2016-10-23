import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips } from '../actions/index'
import UserTrips from '../components/UserTrips'
import Navbar from '../components/Navbar'
import Profile from './Profile'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { store } = this.context
    const { dispatch } = this.props
    store.dispatch(fetchTrips)
  }

  render() {
    const { trips, user } = this.props
    const { store } = this.context
    return (
      <div>
        <Navbar user={user ? user[0] : {'first_name': 'sign in'}} />
        <Profile  trips={trips ? trips : [{title: 'Loading..'}]}
                  user={user ? user[0] : {'status': 'Please log in'}}
        />

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
    user: state.displayUser.user
  }
}

export default connect(mapStateToProps)(App)
