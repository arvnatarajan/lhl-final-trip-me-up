import React, { PropTypes } from 'react'

const Trips = ({trips}) => (
  <ul>
  {trips.map((trip, i) =>
    <li key={i}>{trip.destination}</li>
  )}
  </ul>
)

Trips.propTypes = {
  trips: PropTypes.array.isRequired
}

export default Trips
