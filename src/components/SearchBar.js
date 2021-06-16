import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import { GoogleApiWrapper } from "google-maps-react";
import styled from 'styled-components';

const AutoCompleteDropDownContainer = styled.div`
  width: 30vw;
  font-size: 12px;
`;

const LoadingContainer = styled.div`
  background: white;
`;

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.handleSearch(latLng))
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
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
              {loading && <LoadingContainer>Loading...</LoadingContainer>}
              {suggestions.map(suggestion => {
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
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </AutoCompleteDropDownContainer>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: API_KEY,
    libraries: ["places"]
  })(LocationSearchInput);
  