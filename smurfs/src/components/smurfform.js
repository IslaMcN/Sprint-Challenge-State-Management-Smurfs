//create the form for user to create new smurf 

import React, {useState} from 'react';
import axios from 'axios';

function SmurfForm() {
    const [smurf, setSmurf] = useState({smurfname: '', smurfage: '', smurfheight: '', id: Date.now()})
    
    const handleChange = e => {
    setSmurf({...smurf, [e.target.name]: e.target.value});
    };
    const handleSubmit = (value, {setSmurf}) => {
        axios.post('http://localhost:3333/smurfs', value)
        .then(response => {
            setSmurf(response.data)
        })
       
    }
        // console.log(smurf.smurfname);
        // console.log(smurf.smurfage);
        // console.log(smurf.smurfheight);
        // console.log(smurf.id);
    
    return(
        <div className="Smurf-Form">
            {console.log(smurf)}
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Name:
                    <input
                    type="text"
                    name="smurfname"
                    onChange={e => handleChange(e)}/>
                </label>
                <label>
                    Age:
                    <input
                    type="text"
                    name="smurfage"
                    onChange={e => handleChange(e)}/>
                </label>
                <label>
                    Height:
                    <input
                    type="text"
                    name="smurfheight"
                    onChange={e => handleChange(e)}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}


export default SmurfForm;