import React from 'react';
import { withRouter } from 'react-router';

class Logout extends React.Component {
  constructor(props) {
    super(props)
  }

  handleLogout = () => {
    this.props.onLogoutClick()
    this.props.router.push('/')
  }

  handleBack = () => {
    this.props.router.push(`/user/${localStorage.getItem('user_id')}`)
  }

  render() {

    return (
      <div className="logout">
        <button className="back-to-trips"
                onClick={this.handleBack}
                >
                back to trips
        </button>
        <button className="logout-button"
                onClick={this.handleLogout}
                >
                logout
        </button>
      </div>
    )
  }
}

export default withRouter(Logout);
