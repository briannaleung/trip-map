import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';

const StyledMarker = styled.div`
    width: 10px;
    height: 10px;
`;

const Marker = ({ location, handleClick }) => {
    return(
        <StyledMarker onClick={() => handleClick}>
            <FaMapMarkerAlt size={'2em'} color={'red'}></FaMapMarkerAlt>
            {location.name}
        </StyledMarker>
    )
}

export default Marker