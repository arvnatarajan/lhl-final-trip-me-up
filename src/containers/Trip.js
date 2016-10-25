import React from 'react';
import { connect } from 'react-redux'
import { fetchDays, fetchEvents } from '../actions/index'
import TripDays from '../components/TripDays'

class Trip extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    const { user } = this.props
    let trip_id = this.props.params.trip_id
    let user_id = user[0] ? user[0].id : null

    this.props.fetchEvents(trip_id, 'events')

    if (user[0]) {
      this.props.fetchDays(user_id, trip_id, 'days')
    }
  }

  render(){
    const { days, events } = this.props
    return(
      <div>
        <TripDays
          days={days ? days : [{title: 'Loading..'}]}
          events={events ? events : [{title: 'Loading..'}]}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    days: state.tripDays,
    events: state.tripEvents,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDays: (user_id, trip_id, days) => dispatch(fetchDays(user_id, trip_id, days)),
    fetchEvents: (trip_id, events) => dispatch(fetchEvents(trip_id, events))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
