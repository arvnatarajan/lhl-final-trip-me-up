import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips } from '../actions/index'


class App extends React.Component {

  componentDidMount() {
    const { dispatch, user_data } = this.props
    dispatch(fetchTrips(user_data))
  }

  render() {
    return (
      <div>
        { this.props.user.length > 0 ? <h1>Logged in {this.props.user}</h1> : <h1>Log in please</h1> }
        <Trips trips={trips} />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
    ID: state.ID,
    trips: state.trips
  }
}

export default connect(mapStateToProps)(App)
