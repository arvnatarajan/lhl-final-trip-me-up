import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips } from '../actions/index'
import Trips from '../components/Trips'
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
    const { trips } = this.props
    return (
      <div>
        <Navbar/>
        <Trips trips={trips ? trips : [{title: 'Loading..'}]}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.displayTrips.trips
  }
}

export default connect(mapStateToProps)(App)
