import React, {PropTypes} from 'react';

const Card = ({ trip}) => (
  <div>
    <ul>
      <li>{trip.title}</li>
      <li>From: {trip.start_location}</li>
      <li>To: {trip.destination}</li>
      <li>Dep: {trip.start_date}</li>
      <li>Dep: {trip.end_date}</li>
    </ul>
  </div>
);

Card.propTypes = {
  trip: PropTypes.object.isRequired
}

export default Card;
