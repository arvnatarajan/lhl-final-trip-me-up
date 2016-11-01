import React, {PropTypes} from 'react';
import moment from 'moment';
import { Link } from 'react-router'

const TripCard = ({ trip, index }) => {
  let tripStart = moment.utc(trip.trip_start).format("DD MMM YYYY");
  let tripEnd = moment.utc(trip.trip_end).format("DD MMM YYYY");
  return (
    <Link to={"trip/" + trip.id}>
      <div className="trip-card" >
        <div className="trip-card-container">
          <header className="trip-card-header">
            <img className="trip-card-img" src={trip.trip_img_url}/>
          </header>
          <div className="trip-card-details">
            <h1>{trip.trip_start_location}</h1>
            <div>to</div>
            <h1>{trip.trip_destination}</h1>
            <div className="trip-dates">{tripStart}  -  {tripEnd}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

TripCard.propTypes = {
  trip: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default TripCard;
