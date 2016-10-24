import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips, showModal } from '../actions/index'
import UserTrips from '../components/UserTrips'
import NewTripForm from '../components/NewTripForm'
import { Button, Modal } from 'react-bootstrap';

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { store } = this.context
    const { dispatch } = this.props
    store.dispatch(fetchTrips(1, 'trips'))
  }

  openNewTripForm = () => {
    const { store } = this.context
    const { dispatch } = this.props
    store.dispatch(showModal(true))
    console.log('clicked')
    console.log(store.getState(), 'open')
  }

  closeNewTripForm = () => {
    const { store } = this.context
    const { dispatch } = this.props
    store.dispatch(showModal(false))
    console.log('clicked')
    console.log(store.getState(), 'close')
  }

  handleSubmit = (values) => {
    const { store } = this.context
    const { dispatch } = this.props

    fetch(`http://localhost:8080/api/users/1/trips/new`, {
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        trip_start: values.trip_start,
        trip_end: values.trip_end,
        trip_title: values.trip_title,
        trip_start_location: values.start_location,
        trip_destination: values.destination
      })
    })
    .then(response => response.json())
    .catch(err => console.log(err))

    store.dispatch(showModal(false))
  }

  render() {
    const { trips, user, modal } = this.props
    return (
      <div>
        <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.openNewTripForm}
          >Create your next trip!
        </Button>
        <Modal {...this.props} show={ modal } onHide={this.closeNewTripForm} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Create a trip</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewTripForm
              onSubmit={this.handleSubmit}
              user={user ? user[0] : { 'status': 'Please log in!' }}
            />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        <UserTrips trips={trips ? trips : [{title: 'Loading..'}]}/>
      </div>
    )
  }
}

User.contextTypes = {
  store: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips,
    user: state.user,
    showModal: state.showModal
  }
}

export default connect(mapStateToProps)(User)
