import React from 'react';
import { connect } from 'react-redux';
import { fetchTrips } from '../actions/index';
import $ from 'jquery';
import Trip from '../components/Trip.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {name: "Anonymous"},
      trips: [],
      source: 'http://localhost:8080/api/trips'
    }
  }
  componentDidMount() {
    let trip = {}
    this.serverRequest = $.get(this.state.source, function (result) {
    // console.log(result)
       trip = result[0];
       // console.log(trip)
       this.state.trips.push(trip)
       // console.log(this.state.trips)
       this.setState(this.state);
    }.bind(this));
  };


  render() {
    return (
      // <Trip />

      <div>
        { this.state.trips[0] ? <Trip tripdeets={this.state.trips[0]}   />  : <h1>Log in please</h1> }
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//     ID: state.ID,
//     trips: state.trips
//   }
// }

export default App
