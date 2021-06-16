import React from 'react';
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import styled from 'styled-components';
import locations from '../locations';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const GoogleMapContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 70vw;
`;

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: locations
     };
  }

  render() {
    return (
      <GoogleMapContainer>
          <Map
            ref={this.props.mapRef}
            google={this.props.google}
            zoom={13}
            initialCenter={this.props.center}
        >
          {this.state.places.map((place, i) => {
            return (
              <Marker
                key={i}
                position={place.geometry.location}
              />
            );
          })}
        </Map>
      </GoogleMapContainer>
    )
  }
}
  
export default GoogleApiWrapper({
  apiKey: API_KEY,
  libraries: ["places"]
})(MapContainer);
