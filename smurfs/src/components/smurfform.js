//create the form for user to create new smurf 

import React, {useState} from 'react';
import Axios from 'axios';

function SmurfForm() {
    const [smurf, setSmurf] = useState({name: '', age: '', height: '', id: Date.now()})
    
    const handleChange = e => {
    setSmurf({...smurf, [e.target.name]: e.target.value});
    };
    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:3333/smurfs')
        .then(response => setSmurf(response.name))
        console.log(smurf.name);
        console.log(smurf.age);
        console.log(smurf.height);
        console.log(smurf.id);
    };
    return(
        <div className="Smurf-Form">
            {console.log(smurf)}
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Name:
                    <input
                    type="text"
                    name="name"
                    onChange={e => handleChange(e)}/>
                </label>
                <label>
                    Age:
                    <input
                    type="text"
                    name="age"
                    onChange={e => handleChange(e)}/>
                </label>
                <label>
                    Height:
                    <input
                    type="text"
                    name="height"
                    onChange={e => handleChange(e)}/>
                </label>
                <button>Submit</button>
                {smurf.map(smurf => {
                    return(
                    <ul key={smurf.id}>
                        <li>Name: {smurf.name}</li>
                        <li>Age: {smurf.age}</li>
                        <li>Height: {smurf.height}</li>
                    </ul>
                )})}
            </form>
        </div>
    );
}


export default SmurfForm;