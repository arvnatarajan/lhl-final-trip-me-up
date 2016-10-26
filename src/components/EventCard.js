import React, {PropTypes} from 'react';
import moment from 'moment';

const EventCard = ({ event, del }) => {
console.log(event.id)
console.log(del)
  return (
    <div className="event-card" >
      <div className="event-details">
        {event.event_type}: {event.event_title} - {event.event_description}
        <button onClick= {() => { del(event.id) } } > Delete </button>
      </div>

    </div>
  )
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventCard;
