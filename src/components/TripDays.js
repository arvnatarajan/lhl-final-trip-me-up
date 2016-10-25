import React, { PropTypes } from 'react'
import DayCard from './DayCard'
import { Accordion } from 'react-bootstrap';

const TripDays = ({ days, events }) => {
  return (
    <div className="days-container">
      {days.map((item, i) =>
        <DayCard key={i} index={i} day={item} events={events}/>
      )}
    </div>
  )
}

TripDays.propTypes = {
  days: PropTypes.array.isRequired
}

export default TripDays
