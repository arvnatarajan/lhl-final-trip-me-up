import React, {PropTypes} from 'react';
import moment from 'moment';

const DayCard = ({ day, index }) => {
  let date = moment.utc(day.date).format("DD MMM YYYY");
  let dayEndLoc;
  if (day.day_start_location === day.day_end_location) {
    dayEndLoc = '';
  } else {
    dayEndLoc = day.day_end_location
  }

  return (
    <div className="day-card" >
      <div className="day-card-container">
        <img className="day-card-img" src={day.day_img_url}/>
        <header className="day-card-header">
          <p>{day.day_start_location}</p>
          <p>{dayEndLoc}</p>
        </header>
        <div className="day-card-details">
          <div className="day-card-dates">
            <div>{date}</div>
          </div>
        </div>
        <footer className="day-card-footer">
          <p>Click here for day details</p>
        </footer>
      </div>
    </div>
  )
}

DayCard.propTypes = {
  day: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default DayCard;
