import React from 'react';
import { connect } from 'react-redux'
import { fetchDays, fetchUser } from '../actions/index'
import TripDays from '../components/TripDays'

class Trip extends React.Component {

  constructor(props) {
    super(props)
  }

  // componentWillMount() {
  //   this.setState({user_id: this.props.user_id});
  // }

  componentDidMount() {
    const { dispatch, user } = this.props
    let trip_id = this.props.params.trip_id
    // let user_id = user[0] ? user[0].id : null;
    if (user[0]) {
      dispatch(fetchDays(user_id, trip_id, 'days'))
      .then(() => console.log('state after fetchdays: ', store.getState()))
      .catch((err) => console.log('failed to fetch days for trip') )
    }
  }

  render(){
    const { days } = this.props
    return(
      <div>
        <TripDays days={days ? days : [{title: 'Loading..'}]}/>
      </div>
    )
  }
}


Trip.contextTypes = {
  store: React.PropTypes.object
}

Trip.DefaultProps = {
  user: {
    id: null
  }
}

const mapStateToProps = (state) => {
  return {
    days: state.tripDays,
    user: state.user
  }
}
export default connect(mapStateToProps)(Trip)
