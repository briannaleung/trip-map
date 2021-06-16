import React from 'react';
import Map from './components/MapContainer.js';
import List from './components/List.js';
import styled from 'styled-components';
import SearchBar from './components/SearchBar.js';
import locations from './locations.js';

const HeatMapAppContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
`;

const SideBar = styled.div`
    width: 30vw;
    height: 100vh;
`;

const MapContainer = styled.div`
    height: 100vh;
    width: 70vw;
    box-sizing: border-box;
    overflow: hidden;
`;

const SearchContainer = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    padding: 10px 0 0 0;
    box-sizing: border-box;
    width: 30vw;
    height: auto;
`;


class HeatMapApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          places: locations
         };
        this.mapRef = React.createRef();
    }
       
    setMapCenter = (place) => {
        console.log(place);
        this.moveCenterSearch(place.geometry.location);
    }

    addTempMarker = (latLng) => {
        console.log(this.mapRef.current.map);
        // let marker = new google.maps.Marker({
        //     position: latLng,
        //     map: this.mapRef.current.map
        //   });
        // this.moveCenter(latLng);
    }

    moveCenterSearch = (latLng) => {
        let pos = this.mapRef.current.map.getZoom();
        this.mapRef.current.map.setZoom(12);
        this.mapRef.current.map.setCenter(latLng);
        window.setTimeout(() => {
            this.mapRef.current.map.setZoom(pos);
        },1000);
    }

    render() {
        return (
            <HeatMapAppContainer>
                <SideBar>
                    <SearchContainer>
                        <SearchBar handleSearch={this.moveCenterSearch}></SearchBar>
                    </SearchContainer>
                    <List items={locations} handleItemClick={this.setMapCenter}></List>
                </SideBar>
                <MapContainer>
                    <Map mapRef={this.mapRef} center={locations[1].geometry.location}>
                    </Map>
                </MapContainer>
            </HeatMapAppContainer>
        );
    }
    
    
  }

  export default HeatMapApp