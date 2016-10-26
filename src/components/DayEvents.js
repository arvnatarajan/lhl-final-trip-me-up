import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap';

import NewEventForm from './NewEventForm'
import EventCard from './EventCard'
import { showModal } from '../actions/forms'


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

  handleEventSubmit = (activity) => {

  }

  render() {
    let newClassName = `${this.props.className} events-container`
    return (
      <div className={newClassName} >

      <Button
        bsStyle="primary"
        bsSize="small"
        className="event-new-trip-button"
        onClick={this.openNewEventForm}
        >Add a new activity!
      </Button>

      <Modal
        show={ this.props.day.id === this.props.modalID }
        onHide={this.closeNewEventForm} bsSize="large"
        aria-labelledby="contained-modal-title-lg"
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
        <EventCard key={i} index={i} event={event}/>
      )}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalID: state.modalID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (id) => dispatch(showModal(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayEvents)
