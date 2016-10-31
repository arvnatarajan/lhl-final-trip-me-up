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


  render() {

    return (
      <div className="logout">
        <button className="logout-button" onClick={this.handleLogout}>logout</button>
      </div>
    )
  }
}

export default withRouter(Logout);
