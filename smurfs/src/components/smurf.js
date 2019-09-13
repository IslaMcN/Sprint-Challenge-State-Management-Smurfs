import React from 'react';

const BlueGuy = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </div>
    )
}

export default BlueGuy;