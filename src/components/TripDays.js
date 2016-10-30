import React, { PropTypes } from 'react'
import { Accordion } from 'react-bootstrap';

import DayCard from './DayCard'

class TripDays extends React.Component {
  constructor(props) {
    super(props)
  }

  getDayEvents = (events, dayCheck) => {
    return events.filter((event) => {
      return event.day_id === dayCheck
    });
  }


  render() {
    return (
      <div className="days-container">
      {this.props.days.map((item, i) =>
        <DayCard key={i} index={i} day={item} events={this.getDayEvents(this.props.events, item.id)}/>
      )}
      </div>
    )
  }
}

TripDays.propTypes = {
  days: PropTypes.array.isRequired
}


export default TripDays
