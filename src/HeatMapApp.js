import React, { setState } from 'react';
import Map from './components/MapContainer.js';
import List from './components/List.js';
import styled from 'styled-components';
import SearchBar from './components/SearchBar.js';
import locations from './locations.js';
import { GoogleApiWrapper } from "google-maps-react";


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
    position: absolute;
    padding: 20px 0 0 0;
`;

class HeatMapApp extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
        this.state = {
            places: locations
        };
    }

    setMapCenter = (place) => {
        this.moveCenterSearch(place.geometry.location);
    }

    moveCenterSearch = (latLng) => {
        let pos = this.mapRef.current.map.getZoom();
        this.mapRef.current.map.setZoom(12);
        this.mapRef.current.map.setCenter(latLng);
        window.setTimeout(() => {
            this.mapRef.current.map.setZoom(pos);
        },1000);
      }

    addListItem = (address, latLng) => {
        let old = this.state.places;
        let location = {
            id: this.state.places.length + 2,
            name: address,
            description: '',
            tags: ['New'],
            geometry: {
            location: latLng
            }
        }
        this.setState({
            places: old.concat([location])
        });
    }

    render() {
        return (
            <HeatMapAppContainer>
                <SideBar>
                    <SearchContainer>
                        <SearchBar
                            addPermenantMarker={this.addListItem}
                            mapRef={this.mapRef}
                            handleSearch={this.moveCenterSearch}
                        ></SearchBar>
                    </SearchContainer>
                    <List items={this.state.places} handleItemClick={this.setMapCenter}></List>
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
