import React from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import Marker from './Marker.js';
import locations from '../locations.js';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const GoogleMapContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100%;
`;

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }
 
  markerClick = (e) => {
    console.log(e);
  };

  handleApiLoaded = (map, maps) => {
    // console.log(map, maps);

    // use map and maps objects
  };

  render() {
    const style = {
    }

    return (
      <GoogleMapContainer>
          <GoogleMapReact
            bootstrapURLKeys={{ key: API_KEY }}
            defaultCenter={locations[0].geometry.location}
            defaultZoom={12}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
            onChildClick={this.markerClick}
          >
          { locations.map((location) => {
            return(
              <Marker
                key={location.id}
                lat={location.geometry.location.lat}
                lng={location.geometry.location.lng}
                location={location}
                >
              </Marker>
            )
          }) }
        </GoogleMapReact>
      </GoogleMapContainer>
    )
  }
}
  
export default MapContainer