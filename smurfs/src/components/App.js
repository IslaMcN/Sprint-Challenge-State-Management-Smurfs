//take data from api and render here
//form input should be here as well <Form />
import SmurfContext from './context/smurf';
import React, {  useState } from "react";
import "./App.css";
import VillageContext from './context/village';
import data from './apicall';
import SmurfVillage from './SmurfVillage';
function App(){
  const [smurfs] = useState(data);
  const [village, setVillage] = useState([]);

  const addSmurf = smurf => {
    setVillage([...village, smurf]);
  };

  return(
    <SmurfContext.Provider value={{smurfs, addSmurf}}>
      <VillageContext.Provider value={{village}}>
        <div className="App">
          <SmurfVillage />
        </div>
      </VillageContext.Provider>
    </SmurfContext.Provider>
  )
}

export default App;
