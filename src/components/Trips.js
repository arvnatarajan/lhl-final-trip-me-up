import React, { PropTypes } from 'react'

const Trips = ({trips}) => (
  <ul>
    {trips}
  </ul>
)

Trips.propTypes = {
  trips: PropTypes.array.isRequired
}

export default Trips
