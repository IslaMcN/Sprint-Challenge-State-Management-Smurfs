import React from 'react';

const Villagers = smurf => {
    return (
        <div className="Smurf-Villager">
            {smurf.map(smurf => {
                    return(
                    <ul key={smurf.id}>
                        <li>Name: {smurf.name}</li>
                        <li>Age: {smurf.age}</li>
                        <li>Height: {smurf.height}</li>
                    </ul>
                )})}
            
        </div>
    );
};

export default Villagers;