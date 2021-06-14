import React from 'react';
import MapContainer from './components/MapContainer.js';
import List from './components/List.js';
import styled from 'styled-components';
import SearchBar from './components/SearchBar.js';

const HeatMapAppContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const SideBar = styled.div`
    width: 30%;
`;

const HeatMapApp = () => {
    const items = [
        {id: 1, title: 'niho'},
        {id: 2, title: 'sdfsdf'},
        {id: 3, title: 'nisffho'}
    ]
    return (
        <HeatMapAppContainer>
            <SideBar>
                <SearchBar></SearchBar>
                <List items={items}></List>
            </SideBar>
            <MapContainer>
            </MapContainer>
        </HeatMapAppContainer>
    );
  }

  export default HeatMapApp