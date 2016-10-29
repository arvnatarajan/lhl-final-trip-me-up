import React from 'react';

import { connect } from 'react-redux'
import { fetchDays, fetchEvents, sendFriendInvite, invitedFriendNotification } from '../actions/index'
import TripDays from '../components/TripDays'
import InviteFriend from '../components/InviteFriend'
import { Link } from 'react-router'


class Trip extends React.Component {
  constructor(props) {
    super(props)
    this._notificationSystem = null
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
    const { user } = this.props
    let trip_id = this.props.params.trip_id
    let user_id = localStorage.getItem('user_id') ? localStorage.getItem('user_id') : null

    if (localStorage.getItem('user_id')) {
      this.props.fetchDays(user_id, trip_id, 'days')
      this.props.fetchEvents(trip_id)
    }
  }

  render(){
    const { days, events } = this.props
    return(
      <div>
        <Link to={"map/" + this.props.params.trip_id}> Map </Link>
        <InviteFriend onInvite={ () => this.props.invitedFriendNotification() } onInviteClick={ deets => this.props.sendFriendInvite(deets) }/>

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
    user: state.user,
    notifierMessage: state.notification.notifier_message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDays: (user_id, trip_id, days) => dispatch(fetchDays(user_id, trip_id, days)),
    fetchEvents: (trip_id) => dispatch(fetchEvents(trip_id)),
    sendFriendInvite: (deets) => dispatch(sendFriendInvite(deets)),
    invitedFriendNotification: () => dispatch(invitedFriendNotification())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
