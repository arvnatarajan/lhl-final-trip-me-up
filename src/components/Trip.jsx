import React, {Component} from 'react';
// import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Trip extends Component {

  render() {
    return (
      <card>
        <h2>{this.props.tripdeets.title} </h2>
        <h2>{this.props.tripdeets.} </h2>
        <h2>{this.props.tripdeets.title} </h2>
        <h2>{this.props.tripdeets.destination} </h2>
        <h2>{this.props.tripdeets.destination} </h2>
      </card>
    )
  }
}
export default Trip;




// Class Trip extends Card {
//   render(){
//     return (
//       <Card>
//         <CardHeader
//           title="Without Avatar"
//           subtitle="Subtitle"
//         />
//         <CardText>
//           {this.props.tripdeets.title}
//         </CardText>
//       </Card>
//     )
//   }
// }

// export default Trip;