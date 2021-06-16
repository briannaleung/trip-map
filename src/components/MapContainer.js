import React from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import styled from 'styled-components';
import locations from '../locations';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: locations
     };
  }

  render() {
    const style = {
      height: '100vh',
      width: '70vw'
    }
    return (
          <Map
            ref={this.props.mapRef}
            google={this.props.google}
            zoom={15}
            initialCenter={this.props.center}
            style={style}
        >
          { this.state.places.map((place, i) => {
            return (
              <Marker
                title={place.name}
                name={place.name}
                key={i}
                position={place.geometry.location}
              >
                <InfoWindow
                  visible
                  >
                    <div>
                      <p>Click on the map or drag the marker to select location where the incident occurred</p>
                    </div>
                </InfoWindow>
              </Marker>
            );
          }) }
        </Map>
    )
  }
}
  
export default GoogleApiWrapper({
  apiKey: API_KEY,
  libraries: ["places"]
})(MapContainer);
