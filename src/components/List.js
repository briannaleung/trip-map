import { render } from "@testing-library/react";
import reactDom from "react-dom";
import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem.js'

const ListComponent = styled.ul`
    list-style: none;
    padding-left: 0;
    overflow-y: scroll;
    height: 94%;
    margin-top: 40px;
    border-top: 1px solid grey;
`;
    
const List = (props) => {
    return(
        <ListComponent>
            { props.items.map((item) => {
                return <ListItem key={item.id} item={item} handleItemClick={props.handleItemClick}></ListItem>
            }) }
        </ListComponent>
    )
}
export default List

