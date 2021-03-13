import React from 'react';
import Card from './Card.js';

const CardList = ({robots}) => {

    // Cara testing dengan bikin ERROR yang DISENGAJA
    // if (true) {
    //     throw new Error ("noooooo !!!!")
    // }

    const cardComponent = robots.map((user, i) => {
        return (<Card 
        key = {robots[i].id} 
        id = {robots[i].id} 
        name = {robots[i].name} 
        email = {robots[i].email}
        />);
    })

    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;