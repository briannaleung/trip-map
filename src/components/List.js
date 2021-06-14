import { render } from "@testing-library/react";
import reactDom from "react-dom";
import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem.js'

const ListComponent = styled.ul`
 
`;


    
const List = ({ items }) => {
    console.log("here", items)

    return(
        <ListComponent>
            { items.map((item) => {
                return <ListItem item={item}></ListItem>
            }) }
        </ListComponent>
    )
}
export default List

