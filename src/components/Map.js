import React from 'react';
import { withRouter, Link } from 'react-router'


class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Link to={"trip/" + this.props.params.trip_id}> Back </Link>
        map
      </div>
    )
  }
}

export default Map