import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = (event) => {
    event.preventDefault()
    const email = this.refs.email
    const password = this.refs.password
    const creds = {
      email: email.value.trim(),
      password: password.value.trim()
    }

    this.props.onLoginClick(creds)
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
          <button onClick={(event) => this.handleClick(event)}>
          </button>

          {errorMessage &&
            <p className="error-message">{errorMessage}</p>
          }
        </div>
      </div>
    )
  }
}

export default Login;
