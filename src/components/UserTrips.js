import React, { PropTypes } from 'react'
import TripCard from './TripCard'

const UserTrips = ({ trips }) => (
  <div>
    {trips.map((item, i) =>
      <TripCard key={i} index={i} trip={item}/>
    )}
  </div>
)

UserTrips.propTypes = {
  trips: PropTypes.array.isRequired
}

export default UserTrips
