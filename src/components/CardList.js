import React from 'react';
import Card from './Card';

const CardList = ({ robots })=> {
    if(1){
        throw new Error('Noooooo')
    }
    const cardComponent = robots.map((robot)=>{
        return  <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
    });
    return (
        <div>
           {cardComponent}
        </div>
    );
}

export default CardList;