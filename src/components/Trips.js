import React, { PropTypes } from 'react'
import TripCard from './TripCard'

const Trips = ({ trips }) => (
  <div>
    {trips.map((item, i) =>
      <TripCard key={i} index={i} trip={item}/>
    )}
  </div>
)

Trips.propTypes = {
  trips: PropTypes.array.isRequired
}

export default Trips
