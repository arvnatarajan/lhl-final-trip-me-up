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
        <i className="fa fa-home fa-3x"></i>
        <button className="back-to-trips"
                onClick={this.handleBack}
                  >
                  home
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
