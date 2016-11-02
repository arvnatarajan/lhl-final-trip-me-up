import React, {PropTypes} from 'react';
import moment from 'moment';

const EventCard = ({ event, del, deletedEvent }) => {
  return (
    <div className="event-card" >
      <div className="event-details">
        <div className="event-type">{event.event_type}</div> |
        <div className="event-title">{event.event_title}</div> | 
        <div className="event-description">{event.event_description}</div>
        <button className="event-delete" onClick= {() => { del(event.id) } } > delete </button>
      </div>

    </div>
  )
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventCard;
