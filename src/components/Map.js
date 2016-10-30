import React from 'react';
import { withRouter, Link } from 'react-router'
import _ from 'lodash'

const ReactGoogleMaps = require('react-googlemaps')
const GoogleMapsAPI = window.google.map
const TripMap = ReactGoogleMaps.Map
const Marker = ReactGoogleMaps.Marker;
const OverlayView = ReactGoogleMaps.OverlayView;
const Polyline = ReactGoogleMaps.Polyline;


export default class Map extends React.Component {


  componentDidMount() {
    this.setState({
      linePath: [(41.879535, -87.624333), (-41.2864, 174.7762)]
    })
  }

  renderPolyline = () => {
    return (
      <Polyline
        path={this.state.linePath}
        strokeColor="#000000"
        strokeOpacity={1.0}
        strokeWeight={3} />
      );
  }


  handleMapLoad = (map) => {
    this._mapComponent = map
    if (map){
      console.log(map.getZoom())
    }
  }

  render(){
    return(
      <TripMap
        initialZoom={10}
        initialCenter={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>
        {this.renderPolyline()}
      </TripMap>
    );
  }
}

const mapStateToProps = (state) => {
  return {

    user: state.user,
    notifierMessage: state.notification.notifier_message
  }
}

