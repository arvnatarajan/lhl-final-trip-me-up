import React, {PropTypes} from 'react';
import moment from 'moment';
import { toDeleteEvent } from '../actions/events'

const EventCard = ({ event }) => {
  return (
    <div className="event-card" >
      <div className="event-details">
        {event.event_type}: {event.event_title} - {event.event_description}
      </div>
      <button > Delete </button>
    </div>
  )
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  del: PropTypes.func.isRequired
}



export default EventCard;
