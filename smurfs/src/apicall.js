//call server and make post request from your form using POST
import axios from 'axios';
import React from 'react';

const smurf = (props) => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        console.log(response.data)
        return(
          <>
           <div> {response.name} </div>
           <div> {response.age}</div>
            <div>{response.height}</div>
            </>
        )
    })
}

export default smurf;

//data