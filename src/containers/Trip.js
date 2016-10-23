import React from 'react';

class Trip extends React.Component {
  render(){
    console.log(this.props)
    const { params } = this.props
    return(
      <div>
      Trip id: {params.trip_id}
      </div>
    )
  }
}

export default Trip