import React from 'react';
import { usePlacesWidget } from "react-google-autocomplete";


const SearchBar = ({ panMap }) => {
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        onPlaceSelected: (place) => {
            panMap(place);
        }
      });

    return(
        <div>
            <input ref={ref}></input>
            <button>Add Marker</button>
        </div>
    )
}
export default SearchBar