import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { GoogleApiWrapper } from "google-maps-react";
import styled from 'styled-components';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const AutoCompleteDropDownContainer = styled.div`
  width: 30vw;
  font-size: 12px;
`;

const LoadingContainer = styled.div`
  background: white;
`;

const Button = styled.button`
  width: 100px;
  margin-bottom: 10px;
`;

const SearchContainer = styled.div`
`;

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = (newAddress) => {
    this.setState({
      address: newAddress
    });
  };

  addTempMarker = (latLng) => {
    let marker = new this.props.google.maps.Marker({
        position: latLng,
        map: this.props.mapRef.current.map
    });
  }

  moveCenterSearch = (latLng) => {
    let pos = this.props.mapRef.current.map.getZoom();
    this.props.mapRef.current.map.setZoom(12);
    this.props.mapRef.current.map.setCenter(latLng);
    window.setTimeout(() => {
        this.props.mapRef.current.map.setZoom(pos);
    },1000);
    this.addTempMarker(latLng);
  }
 
  handleSelect = (address) => {
    this.setState({
      address: address
    });

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.moveCenterSearch(latLng))
      .catch(error => console.error('Error', error));
    
  };

  getCoordinates = (address) => {
    if (address !== '') {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => this.props.addPermenantMarker(address, latLng))
        .catch(error => console.error('Error', error));
    }
  }

  render() {
    return (
      <SearchContainer>
        <Button onClick={() => this.getCoordinates(this.state.address)}>Add Marker</Button>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />

              <AutoCompleteDropDownContainer>
                { loading && <LoadingContainer>Loading...</LoadingContainer> }
                { suggestions.map((suggestion, i) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';

                  const activeSuggestion = {
                    backgroundColor: '#fafafa',
                    cursor: 'pointer',
                    padding: '2px'
                  };

                  const inactiveSuggestion = {
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                    padding: '2px'
                  }

                  const style = suggestion.active
                    ? activeSuggestion : inactiveSuggestion;

                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                      key={i}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                }) }
              </AutoCompleteDropDownContainer>
            </div>
          )}
        </PlacesAutocomplete>
      </SearchContainer>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: API_KEY,
    libraries: ["places"]
  })(LocationSearchInput);
  