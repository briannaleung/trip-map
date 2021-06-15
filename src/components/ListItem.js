import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Item = styled.li`
    padding: 10px;
    border-bottom: 1px solid grey;
    text-align: left;
    display: flex;
    flex-direction: row;
`;

const Title = styled.p`
    margin: auto;
`;

const Description = styled.p`
    color: grey;
    font-size: 12px;
    margin: auto;
`;

const Icon = styled.div`
    margin: 10px;
`;

const ListItem = ({ item }) => {
    const handleClick = (e) => {
        console.log(e.target);
    }
    return(
        <Item onClick={handleClick}>
            <Icon>
                <FaMapMarkerAlt></FaMapMarkerAlt>
            </Icon>
            <div>
                <Title>{item.name}</Title>
                <Description><em>{item.description}</em></Description>
            </div>
        </Item>
    )
}

export default ListItem