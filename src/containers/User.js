import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips, showModal, fetchNotifications, deleteNotifications } from '../actions/index'
import UserTrips from '../components/UserTrips'
import NewTripForm from '../components/NewTripForm'
import { Button, Modal } from 'react-bootstrap'
import NotificationSystem from 'react-notification-system'

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
    this.props.fetchTrips(localStorage.getItem('user_id'), 'trips')
    this.props.fetchNotifications(localStorage.getItem('user_id'))

    setTimeout(() => {
      this.props.notifications.forEach((msg) => {
        this._notificationSystem.addNotification({
          message: `${msg.notification_message}`,
          level: 'success'
        })
      })
      this.props.deleteNotifications(localStorage.getItem('user_id'))
    }, 500);

  }


  openNewTripForm = () => {
    this.props.showModal(localStorage.getItem('user_id'))
  }

  closeNewTripForm = () => {
    this.props.showModal(null)
  }

  handleSubmit = (tripInfo) => {
    const tripPicList = ['http://i64.tinypic.com/2mq7wya.jpg',
                         'http://i64.tinypic.com/5dmipj.jpg',
                         'http://i64.tinypic.com/2i8c4za.jpg',                     
                         'http://i64.tinypic.com/2mq7wya.jpg',
                         'http://i65.tinypic.com/34i332x.jpg']

    let tripPic = tripPicList[Math.floor(Math.random()*tripPicList.length)];


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
        trip_destination: tripInfo.destination,
        trip_img_url: tripPic
      })
    })
    .then(response => {
      response.json()
      this.props.showModal(null)
      this.props.fetchTrips(localStorage.getItem('user_id'), 'trips')
    })
    .catch(err => console.log(err))
  }

  render() {
    const { trips, user, modalID } = this.props
    return (
      <div>
        <div>
          <NotificationSystem ref="notificationSystem" />
        </div>
        <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.openNewTripForm}
          >Create your next trip!
        </Button>
        <Modal show={ localStorage.getItem('user_id') === this.props.modalID  } onHide={this.closeNewTripForm} bsSize="large" aria-labelledby="contained-modal-title-lg">
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
    modalID: state.modalID,
    isAuthenticated: state.auth.isAuthenticated,
    notifications: state.notification.notifications
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrips: (trip_id, trips) => dispatch(fetchTrips(trip_id, trips)),
    showModal: (status) => dispatch(showModal(status)),
    fetchNotifications: (user_id) => dispatch(fetchNotifications(user_id)),
    deleteNotifications: (user_id) => deleteNotifications(user_id)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
