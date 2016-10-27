import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips, showModal} from '../actions/index'
import UserTrips from '../components/UserTrips'
import NewTripForm from '../components/NewTripForm'
import { Button, Modal } from 'react-bootstrap';

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTrips(1, 'trips')
  }

  openNewTripForm = () => {
    this.props.showModal(this.props.user[0].id)
    console.log('clicked')
  }

  closeNewTripForm = () => {
    this.props.showModal(null)
    console.log('clicked')
  }

  handleSubmit = (tripInfo) => {
    fetch(`http://localhost:8080/api/users/1/trips/new`, {
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        trip_start: tripInfo.trip_start,
        trip_end: tripInfo.trip_end,
        trip_title: tripInfo.trip_title,
        trip_start_location: tripInfo.start_location,
        trip_destination: tripInfo.destination
      })
    })
    .then(response => {
      response.json()
      this.props.showModal(null)
      this.props.fetchTrips(1, 'trips')
    })
    .catch(err => console.log(err))
  }

  render() {
    const { trips, user, modalID } = this.props
    return (
      <div>
        <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.openNewTripForm}
          >Create your next trip!
        </Button>
        <Modal show={ this.props.user[0].id === this.props.modalID  } onHide={this.closeNewTripForm} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Create a trip</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewTripForm
              onSubmit={this.handleSubmit}
              user={user ? user : [ 'status': 'Please log in!' ]}
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

const mapStateToProps = (state) => {
  return {
    trips: state.userTrips.trips,
    user: state.user,
    modalID: state.modalID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrips: (trip_id, trips) => dispatch(fetchTrips(trip_id, trips)),
    showModal: (status) => dispatch(showModal(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
