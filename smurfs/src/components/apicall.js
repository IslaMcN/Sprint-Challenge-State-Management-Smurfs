//call server and make post request from your form using POST
import axios from 'axios';

const data = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        return(
            response.name,
            response.age,
            response.height
        )
    })
}

export default data;