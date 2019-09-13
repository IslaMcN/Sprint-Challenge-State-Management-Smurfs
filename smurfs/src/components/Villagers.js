import React from 'react';

const Villagers = props => {
    return (
        <div className="Smurf-Villager">
            <div>
                <h1>{props.name}</h1>
                <p>{props.age}</p>
                <p>{props.height}</p>
            </div>
        </div>
    );
};

export default Villagers;