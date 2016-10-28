import React from 'react';
import { withRouter } from 'react-router'


class InviteFriend extends React.Component {

  handleClick = () => {
    const user_id = this.refs.friend
    const notification_type = 'invitation'
    const notification_message = 'has invited you to join their trip'
    const deets = {
      user_id: user_id.value,
      notification_type: notification_type,
      notification_message: notification_message
    }

    this.props.onInviteClick(deets)

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
        <button onClick={this.handleClick}>
        Invite!
        </button>

        {errorMessage &&
          <p className="error-message">{errorMessage}</p>
        }
      </div>
    )
  }
}

export default withRouter(InviteFriend);
