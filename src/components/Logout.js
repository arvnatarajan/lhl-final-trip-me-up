import React from 'react';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';

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
        <Button onClick={this.handleLogout} bsStyle="link">Logout</Button>
      </div>
    )
  }
}

export default withRouter(Logout);
