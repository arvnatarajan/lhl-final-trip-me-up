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
    const notification_message = 'has invited you to join their trip'
    const deets = {
      name: name.value,
      notification_type: notification_type,
      notification_message: notification_message
    }

    this.props.onInviteClick(deets)

    this._notificationSystem.addNotification({
      message: 'You\'ve tripped up a friend!',
      level: 'success'
    });

    name.value = ''
  }



  render() {
    const { errorMessage } = this.props

    return (
      <div className="invite-friend">
        <span className="col">
          <p>Invite your friend to your trip!</p>
          <input
            type="text"
            ref="friend"
          />
        </span>
        <button onClick={this.handleClick} >
        Invite!
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
