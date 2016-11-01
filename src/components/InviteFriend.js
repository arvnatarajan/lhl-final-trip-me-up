import React from 'react';
import { withRouter } from 'react-router'
import NotificationSystem from 'react-notification-system'

class InviteFriend extends React.Component {

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  handleClick = () => {
    const name = this.refs.friend
    const notification_type = 'invitation'
    const notification_message = 'Tintin has invited you to join their trip'
    const deets = {
      name: name.value,
      notification_type: notification_type,
      notification_message: notification_message
    }

    this.props.onInviteClick(deets)

    this._notificationSystem.addNotification({
      message: 'You\'ve tripped up Dora!',
      level: 'success'
    });

    name.value = ''
  }



  render() {
    const { errorMessage } = this.props

    return (
      <div className="invite-friend">
        <span className="col">
          <input
            style={{"textAlign": "center"}}
            type="text"
            placeholder="Trip up a friend"
            ref="friend"
          />
        </span>
        <button onClick={this.handleClick} >
          <i className="fa fa-share-square-o sign-in" aria-hidden="true"></i>
        </button>
        <div>
          <NotificationSystem ref="notificationSystem" />
        </div>

        {errorMessage &&
          <p className="error-message">{errorMessage}</p>
        }
      </div>
    )
  }
}

export default withRouter(InviteFriend);
