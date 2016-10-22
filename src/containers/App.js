import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips } from '../actions/index'
import UserTrips from '../components/UserTrips'
import Navbar from '../components/Navbar'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchTrips)
  }

  render() {
    const { trips, user } = this.props
    return (
      <div>
        <Navbar user={user ? user[0] : {'first_name': 'sign in'}} />
        <UserTrips trips={trips ? trips : [{title: 'Loading..'}]}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.displayTrips.trips,
    user: state.displayUser.user
  }
}

export default connect(mapStateToProps)(App)
