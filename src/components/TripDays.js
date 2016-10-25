import React, { PropTypes } from 'react'
import DayCard from './DayCard'

const TripDays = ({ days }) => {
  // console.log(days, 'look at days array')
  return (
    <div className="days-container">
      {days.map((item, i) =>
        <DayCard key={i} index={i} day={item}/>
      )}
    </div>
  )
}

TripDays.propTypes = {
  days: PropTypes.array.isRequired
}

export default TripDays
