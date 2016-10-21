import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
    <div>
      { this.props.user.length > 0 ? <h1>Logged in {this.props.user}</h1> : <h1>Log in please</h1> }
    </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
