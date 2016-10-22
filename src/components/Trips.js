import React, { PropTypes } from 'react'
import Card from './Card'

const Trips = ({ trips }) => (
  <div>
    {trips.map((item, i) =>
      <Card key={i} trip={item}/>
    )}
  </div>
)

Trips.propTypes = {
  trips: PropTypes.array.isRequired
}

export default Trips
