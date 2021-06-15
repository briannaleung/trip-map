import { render } from "@testing-library/react";
import reactDom from "react-dom";
import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem.js'

const ListComponent = styled.ul`
    list-style: none;
    padding-left: 0;
    overflow: scroll;
    height: 98%;
`;
    
const List = ({ items }) => {
    return(
        <ListComponent>
            { items.map((item) => {
                return <ListItem key={item.id} item={item}></ListItem>
            }) }
        </ListComponent>
    )
}
export default List

