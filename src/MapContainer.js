import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const vancouverLatLong = {
  lat: 49.235910949231254,
  lng: -123.1026250965505
}
export class MapContainer extends React.Component {
  
  render() {
    const style = {
      width: '70%',
      height: '100vh',
      right: 0
    }
    return (
      <Map
        google={this.props.google} 
        initialCenter={vancouverLatLong}
        zoom={12}
      />
    )
  }
  }
  
  export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapContainer)