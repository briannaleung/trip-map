import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const vancouverLatLong = {
  lat: 49.235910949231254,
  lng: -123.1026250965505
}

const home = {
  lat: 49.25741372437692,
  lng: -123.18623740197364
}
// 3668 W 17th ave
// 49.25741372437692, -123.18623740197364
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
 
    this.locations = [
      {
        id: 1,
        title: 'home',
        lat: 49.25741372437692,
        lng: -123.18623740197364
      },
      {
        id: 2,
        title: 'vancouverLatLong',
        lat: 49.235910949231254,
        lng: -123.1026250965505
      }
    ]
  }

  onClick(e) {
    console.log(e);
  }

  render() {
    const style = {
      width: '70%'
    }
    return (
      <Map
        google={this.props.google} 
        initialCenter={vancouverLatLong}
        zoom={12}
        style={style}
      >
        { this.locations.map((location) => {
          return (
            <Marker
              onClick={this.onClick}
              title={location.title}
              name={'SOMA'}
              position={{
                lat: location.lat,
                lng: location.lng
                }}
            />
          )
        }) }
      </Map>
    )
  }
  }
  
  export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapContainer)