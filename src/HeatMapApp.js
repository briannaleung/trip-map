import React, { useState } from 'react';
import { MapContainer } from './components/MapContainer.js';
import List from './components/List.js';
import styled from 'styled-components';
import SearchBar from './components/SearchBar.js';
import locations from './locations.js';

const HeatMapAppContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
`;

const SideBar = styled.div`
    width: 40vw;
    height: 100vh;
`;


const HeatMapApp = () => {
    // const [latLng, setLatLng] = useState({
    //     lat: items[0].lat,
    //     lng: items[0].lng
    // });

    // const panMap = (place) => {
    //     setLatLng({
    //         lat: place.geometry.location.lat(),
    //         lnt: place.geometry.location.lng()
    //     }) 
    // }
    // <SearchBar panMap={panMap} ></SearchBar>

    return (
        <HeatMapAppContainer>
            <SideBar>
                <List items={locations}></List>
            </SideBar>
            <MapContainer places={locations}>
            </MapContainer>
        </HeatMapAppContainer>
    );
  }

  export default HeatMapApp