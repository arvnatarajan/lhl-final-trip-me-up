import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips } from '../actions/index'
import UserTrips from '../components/UserTrips'
import NewTripForm from '../components/NewTripForm'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchTrips)
  }

  handleSubmit = (values) => {
    console.log(JSON.stringify(values), 'hello')
    fetch(`http://localhost:8080/api/users/1/trips/new`, {
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        trip_start: values.trip_start,
        trip_end: values.trip_end,
        trip_title: values.trip_title,
        trip_start_location: values.start_location,
        trip_destination: values.destination
      })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
  }

  render() {
    const { trips, user } = this.props
    return (
      <div>
        <NewTripForm
          onSubmit={this.handleSubmit}
          user={user ? user[0] : { 'status': 'Please log in!' }}
        />
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

export default connect(mapStateToProps)(Profile)
