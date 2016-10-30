import React from 'react';
import { withRouter, Link } from 'react-router'
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps'
import _ from 'lodash'


const MapAPI = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: 41.8507300, lng: -87.6512600 }}
  >
  {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>

))


export default class Map extends React.Component {

  state = {
    origin: new google.maps.LatLng(41.8507300, -87.6512600),
    destination: new google.maps.LatLng(40.65, -73.95),
    directions: null
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }




  handleMapLoad = (map) => {
    this._mapComponent = map
    if (map){
      console.log(map.getZoom())
    }
  }

  render(){
    return(
      <div style={{height: '450px'}}>
        <Link to={"trip/" + this.props.params.trip_id}> Back </Link>
        <MapAPI
          containerElement={
            <div style={{ height: '100%'}} />
          }
          mapElement={
            <div style={{ height: '100%'}} />
          }
          center={this.state.origin}
          directions={this.state.directions}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

    user: state.user,
    notifierMessage: state.notification.notifier_message
  }
}

