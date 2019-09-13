import React from 'react';
//Passed props
const Villager = props => {
    return(
    <div>
        //in Product I recall an image. I don't need an image
        {/* //Title was called here {props.product.title} */}
        <h1>{props.smurf.name}</h1>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>

        //button called here but I don't need a button
    </div>)
}

export default Villager;

//Product.js