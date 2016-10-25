import React, {PropTypes} from 'react';
import moment from 'moment';

const EventCard = ({ event }) => {
  return (
    <div className="event-card" >
      <div className="event-details">
        {event.event_type}: {event.event_title} - {event.event_description}
      </div>
    </div>
  )
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventCard;
