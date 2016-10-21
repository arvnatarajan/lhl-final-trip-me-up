import React from 'react';

let style = {
    'display': 'inline-flex',
    'justify-content': 'space-around',
    'width': '100%'
}

class Login extends React.Component {
  handleFormSubmit = (e) => {
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} style={style}>
          <span>E-mail <input type="text"/></span>
          <span>Password <input type="text"/></span>
        </form>
      </div>
    )
  }
}

export default Login;
