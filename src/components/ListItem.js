import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Item = styled.li`
    padding: 10px;
    border-bottom: 1px solid grey;
    text-align: left;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: flex-start;

    &:hover {
        background-color: #fafafa;
    }
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
    margin: 5px 5px 0 0;
    color: red;
`;

const Tag = styled.span`
    background-color: grey;
    border-radius: 3px;
    padding: 3px;
    font-size: 0.6em;
    margin-right: 2px;
    color: white;
    text-transform: capitalize;
`;

const ListItem = (props) => {
    return(
        <Item onClick={() => props.handleItemClick(props.item)}>
            <Icon>
                <FaMapMarkerAlt></FaMapMarkerAlt>
            </Icon>
            <div>
                <Title>{props.item.name}</Title>
                <Description><em>{props.item.description}</em></Description>
                { props.item.tags.map((tag, i) => {
                    return(<Tag key={i}>{tag}</Tag>)
                })
                 }
            </div>
        </Item>
    )
}

export default ListItem