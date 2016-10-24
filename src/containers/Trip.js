import React from 'react';
import { connect } from 'react-redux'
import { fetchDays } from '../actions/index'
import TripDays from '../components/TripDays'

class Trip extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { store } = this.context
    const { dispatch } = this.props
    store.dispatch(fetchDays(2, 'days'))
  }

  render(){
    const { days } = this.props
    return(
      <div>
      Trip id: 2
      <TripDays days={days ? days : [{title: 'Loading..'}]}/>
      </div>
    )
  }
}


Trip.contextTypes = {
  store: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    days: state.days,
    user: state.user
  }
}
export default connect(mapStateToProps)(Trip)
