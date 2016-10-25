import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import { showModal } from '../actions/index'
import moment from 'moment';
import EventCard from './EventCard'
import NewEventForm from './NewEventForm'
import { Button, Modal } from 'react-bootstrap';

class DayCard extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEventSubmit = (activity) => {

  }

  openNewEventForm = () => {
    this.props.showModal(this.props.day.id)
    console.log('clicked')
  }

  closeNewEventForm = () => {
    this.props.showModal(null)
    console.log('clicked')
  }

  render(){
    let date = moment.utc(this.props.day.date).format("DD MMM YYYY");
    let dayEndLoc;

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
        <div className="events-container" >
          <Button
              bsStyle="primary"
              bsSize="small"
              className="event-new-trip-button"
              onClick={this.openNewEventForm}
            >Add a new activity!
          </Button>
          <Modal show={ this.props.day.id === this.props.modalID } onHide={this.closeNewEventForm} bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Add a new event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <NewEventForm
                onSubmit={this.handleSubmit}
              />
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
          {this.props.events.map((event, i) =>
            <EventCard key={i} index={i} event={event}/>
          )}
        </div>
      </div>
    )
  }
}
// DayCard.propTypes = {
//   day: PropTypes.object.isRequired,
//   index: PropTypes.number.isRequired
// }

const mapStateToProps = (state) => {
  return {
    modalID: state.modalID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (status) => dispatch(showModal(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayCard)
