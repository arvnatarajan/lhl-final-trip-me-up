import React from 'react';

class Logout extends React.Component {
  render() {
    const { onLogoutClick } = this.props

    return (
      <div className="logout">
        <button onClick={() => onLogoutClick()}>
          Logout
        </button>
      </div>
    )
  }
}

export default Logout;
