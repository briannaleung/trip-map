import React from 'react';
import MapContainer from './components/MapContainer.js';
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
    width: 30vw;
    height: 100vh;
`;


class HeatMapApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          places: locations
         };
        this.mapRef = React.createRef();
      }
       
    handleItemClick = (item) => {
        let pos = this.mapRef.current.map.getZoom();
        this.mapRef.current.map.setZoom(11);
        this.mapRef.current.map.setCenter(item.geometry.location);
        window.setTimeout(() => {this.mapRef.current.map.setZoom(pos);},1000);
    }

    render() {
        return (
            <HeatMapAppContainer>
                <SideBar>
                    <SearchBar></SearchBar>
                    <List items={locations} handleItemClick={this.handleItemClick}></List>
                </SideBar>
                <MapContainer mapRef={this.mapRef} center={locations[1].geometry.location}>
                </MapContainer>
            </HeatMapAppContainer>
        );
    }
    
    
  }

  export default HeatMapApp