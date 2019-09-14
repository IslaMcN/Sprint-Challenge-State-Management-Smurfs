import React, { useContext } from 'react';
import smurf from '../apicall';
import VillageContext from './context/village';
import Villager from './Villager';

//Left it an empty parameter
const Villagers = () => {
    //Products does product, addItem and used ProductContext to define them
   const {smurf} = useContext(VillageContext);
    return (
        <div className="Smurf-Villager">
            //smurf is from line 9
            {smurf.map(smurfs => {
                    return(
                        //Villager is my Product
                    <Villager key={smurfs.id}
                    //smurfs is my product 
                        name= {smurfs.name}
                        age= {smurfs.age}
                        height= {smurfs.height}
                    />
                )})}
            
        </div>
    );
};

export default Villagers;

//Products.js