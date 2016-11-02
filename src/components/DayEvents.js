import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap';

import NewEventForm from './NewEventForm'
import EventCard from './EventCard'
import { showModal } from '../actions/forms'
import { deletedEvent, toDeleteEvent, fetchEvents } from '../actions/events'

class DayEvents extends React.Component {
  constructor(props) {
    super(props)
  }

  openNewEventForm = () => {
    this.props.showModal(this.props.day.id)
  }

  closeNewEventForm = () => {
    this.props.showModal(null)
  }

  handleSubmit = (dayInfo) => {
    fetch(`http://localhost:8080/api/users/events/new`, {
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        day_id: this.props.day.id,
        start_time: dayInfo.event_start,
        end_time: dayInfo.event_end,
        event_title: dayInfo.event_title,
        event_description: dayInfo.event_description,
        event_type: dayInfo.event_type
      })
    })
    .then(response => response.json())
    .then(newActivity => {
      console.log(newActivity[0], 'newActivity')
      this.props.dispatch({type: 'ADD_EVENT', newEvent: newActivity[0]})
      this.props.showModal(null)
    })
    .catch(err => console.log(err))
  }


  render() {
    let newClassName = `${this.props.className} events-container`
    return (
      <div className={newClassName} >

      <button
        className="event-new-trip-button"
        onClick={this.openNewEventForm}
        >+
      </button>

      <Modal
        show={ this.props.day.id === this.props.modalID }
        onHide={this.closeNewEventForm}
        dialogClassName="new-trip-modal"
      >
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
        <EventCard key={i} index={i} event={event} del={this.props.del} />
      )}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalID: state.modalID,
    deletedEventID: state.deletedEventID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (id) => dispatch(showModal(id)),
    del: (id) => dispatch(toDeleteEvent(id)),
    fetchEvents: (trip_id) => dispatch(fetchEvents(trip_id)),
    dispatch: (action) => dispatch(action)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayEvents)
