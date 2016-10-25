import React, {PropTypes} from 'react';
import moment from 'moment';

class DayCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showChildren: false
    }
  }

  handleClick = () => {
    if (this.state.showChildren) {
      this.setState({showChildren: false});
    }
    else {
      this.setState({showChildren: true});
    }
  }

  getDayEvents = (events, dayCheck) => {
    return events.filter((event) => {
      return event.day_id === dayCheck
    });
  }

  render(){
    let date = moment.utc(this.props.day.date).format("DD MMM YYYY");
    let dayEndLoc;

    // console.log(this.getDayEvents(this.props.events, this.props.day.id));

    if (this.props.day.day_start_location === this.props.day.day_end_location) {
      dayEndLoc = '';
    } else {
      dayEndLoc = this.props.day.day_end_location
    }

    return (
      <div className="day-card" >
        <div className="day-card-container">
          <img className="day-card-img" src={this.props.day.day_img_url}/>
          <header className="day-card-header">
            <p>{this.props.day.day_start_location}</p>
            <p>{dayEndLoc}</p>
          </header>
          <div className="day-card-details">
            <div className="day-card-dates">
              <div>{date}</div>
            </div>
          </div>
          <footer className="day-card-footer" onClick={() => this.handleClick()}>
            <p>Click here for day details</p>
          </footer>
        </div>

      </div>
    )
  }
}
// DayCard.propTypes = {
//   day: PropTypes.object.isRequired,
//   index: PropTypes.number.isRequired
// }

export default DayCard;
