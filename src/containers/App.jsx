import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips } from '../actions/index'
import Trips from '../components/Trips'


class App extends React.Component {

  componentDidMount() {
    const { dispatch, user_data } = this.props
    dispatch(fetchTrips(user_data))
  }

  render() {
    return (
      <div>
        <Trips trips={trips} />
      </div>
    )
  }

}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.user,
    ID: state.ID,
    trips: state.trips
  }
}

export default connect(mapStateToProps)(App)
