import React from 'react';
import { connect } from 'react-redux'
import { fetchDays, fetchEvents } from '../actions/index'
import TripDays from '../components/TripDays'

class Trip extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchDays(2, 'days')
    this.props.fetchEvents(2, 'events')
  }

  render(){
    const { days, events } = this.props
    return(
      <div>
      Trip id: 2
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
    fetchDays: (trip_id, days) => dispatch(fetchDays(trip_id, days)),
    fetchEvents: (trip_id, events) => dispatch(fetchEvents(trip_id, events))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
