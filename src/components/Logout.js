import React from 'react';

class Logout extends React.Component {

  handleLogout = () => {
    this.props.onLogoutClick()
  }


  render() {

    return (
      <div className="logout">
        <button onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    )
  }
}

export default Logout;
