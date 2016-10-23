import React, {PropTypes} from 'react';
import moment from 'moment';

const TripCard = ({ trip, index }) => {
  let tripStart = moment.utc(trip.trip_start).format("DD MMM YYYY");
  let tripEnd = moment.utc(trip.trip_end).format("DD MMM YYYY");
  return (
    <div className="trip-card" >
      <div className="trip-card-container">
        <header className="trip-card-header">
          <img className="trip-card-img" src={trip.trip_img_url}/>
        </header>
        <div className="trip-card-details">
          <h1>{trip.trip_start_location}</h1>
          <div>to</div>
          <h1>{trip.trip_destination}</h1>
          <div>{tripStart}  -  {tripEnd}</div>
        </div>
        <footer className="trip-card-footer">
          <p>Click here for trip details</p>
        </footer>
      </div>
    </div>
  )
}

TripCard.propTypes = {
  trip: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default TripCard;
