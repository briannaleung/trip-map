import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
`;

const ListItem = ({ item }) => {
    const handleClick = (e) => {
        console.log(e.target);
    }
    return(
    <Item
        onClick={handleClick}
        key={item.id}
    >
        <button>
            {item.title}
        </button>
    </Item>)
}

export default ListItem