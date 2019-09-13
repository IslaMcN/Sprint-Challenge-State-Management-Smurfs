//create the form for user to create new smurf 
import {useForm} from './hooks/useform';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Villagers from './Villagers';

function SmurfForm() {
    const [smurf, setSmurf] = useState([])
    
   useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => setSmurf(response.id))
   },[]);

   const [inputValues, handleChanges, handleSubmit] = useForm('SmurfForm', {name: '', age:'', height:'', id: Date.now()});
   
    return(
        <div className="Smurf-Form">
            {console.log(smurf)}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                    name="name"
                    type="text"
                    value={inputValues.name}
                    onChange={handleChanges}/>
                    
                </label>
                <label>
                    Age:
                    <input
                    type="text"
                    name="age"
                    value={inputValues.age}
                    onChange={handleChanges}/>
                </label>
                <label>
                    Height:
                    <input
                    value={inputValues.height}
                    type="text"
                    name="height"
                    onChange={handleChanges}/>
                </label>
                <button type="submit">Submit</button>
                <Villagers smurf={smurf}/>
            </form>
        </div>
    );
}


export default SmurfForm;