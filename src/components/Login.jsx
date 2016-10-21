import React from 'react';

class Login extends React.Component {
  handleFormSubmit = (e) => {
  }

  render() {
    return (
      <div className="login">
        <form className="flex-grid" onSubmit={this.handleFormSubmit}>
          <span className="col">
            <p>E-mail</p>
            <input type="text"/>
          </span>
          <span className="col">
            <p>Password</p>
            <input type="text"/>
          </span>
        </form>
      </div>
    )
  }
}

export default Login;
