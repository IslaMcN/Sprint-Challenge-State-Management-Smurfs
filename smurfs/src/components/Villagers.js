import React, { useContext } from 'react';
import smurf from './apicall';
import VillageContext from './context/village';
import Villager from './Villager';


const Villagers = () => {
   const {smurf} = useContext(VillageContext);
    return (
        <div className="Smurf-Villager">
            {smurf.map(smurfs => {
                    return(
                    <Villager key={smurfs.id}
                        name= {smurfs.name}
                        age= {smurfs.age}
                        height= {smurfs.height}
                    />
                )})}
            
        </div>
    );
};

export default Villagers;