import React, {PropTypes} from 'react';

const DayCard = ({ trip, index }) => (
  <div className="card" >
    <div className="card-container">
      <header className="card-header">
        <div className="card-trip-start-location">{trip.start_location}</div>
        <div className="card-trip-destination">{trip.destination}</div>
      </header>
      <footer className="card-footer">
        <div>day {index + 1}</div>
      </footer>
    </div>
  </div>
);

DayCard.propTypes = {
  trip: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default DayCard;
