import React from 'react';
import { withRouter } from 'react-router'


class Login extends React.Component {

  handleClick = () => {
    event.preventDefault()
    const email = this.refs.email
    const password = this.refs.password
    const creds = {
      email: email.value.trim(),
      password: password.value.trim()
    }

    this.props.onLoginClick(creds)

    setTimeout(() => {
      this.props.router.push(`/user/${localStorage.getItem('user_id')}`)
    }, 500);

  }

  render() {
    const { errorMessage } = this.props

    return (
      <div className="login">
        <div className="flex-grid">
          <span className="col">
            <p>E-mail</p>
            <input
              type="text"
              ref="email"
              placeholder="Email"
            />
          </span>
          <span className="col">
            <p>Password</p>
            <input
              type="text"
              ref="password"
              placeholder="Password"
            />
          </span>
          <button className="login-button col" onClick={this.handleClick}>login
          </button>

          {errorMessage &&
            <p className="error-message">{errorMessage}</p>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
