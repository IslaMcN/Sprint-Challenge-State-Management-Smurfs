import React, {useContext} from 'react';
import VillageContext from './context/village';
import Villagers from './Villagers';

const SmurfVillage = () => {
    const Village = useContext(VillageContext);
    
    return(
        <div className = "Smurf-Village">
            {/* {Village.map(smurf => {
                return(
                <Villagers key={smurf.id} {...smurf} />
            )})} */}
        </div>
    );
};

export default SmurfVillage;