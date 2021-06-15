import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';

const StyledMarker = styled.div`
    width: 10px;
    height: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Tooltip = styled.div`
    height: 20px;
    width: auto;
    padding: 7px;
    background-color: black;
    border-radius: 3px;
    color: white;
    position: relative;
    display: inline-block;
    &:after {
        content: " ";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
      }

`;


const Marker = (props) => {
    // const style = props.$hover? showTooltip : hideTooltip;
    return(
        <StyledMarker onClick={() => props.handleClick}>
            <Tooltip>{ props.location.name }</Tooltip>
            <div>
                <FaMapMarkerAlt size={'2em'} color={'red'}></FaMapMarkerAlt>
            </div>
        </StyledMarker>
    )
}

export default Marker