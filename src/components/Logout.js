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
      <div className="side-nav-buttons">
        <button className="back-to-trips"
                onClick={this.handleBack}
                  >

          <i className="fa fa-home fa-inverse fa-2x"
             aria-hidden="true"></i>

        </button>

        <button className="logout-button"
                onClick={this.handleLogout}
                >
          <i className="fa fa-sign-out fa-inverse fa-2x"
             aria-hidden="true">

             </i>
        </button>
      </div>
    )
  }
}

export default withRouter(Logout);
