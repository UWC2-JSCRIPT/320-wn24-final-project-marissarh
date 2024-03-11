import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Hourly from "./Hourly/Hourly";
import EightDay from "./EightDay/EightDay";
import Weekend from "./Weekend/Weekend";
import FetchedData from './FetchedData/FetchedData';
import getFormattedWeatherData from "./FetchedData/FetchedData";
import { useEffect, useState } from "react";




function App({}) {

  const [search, setSearch] = useState({q:''})
  const [units, setUnits] = useState('metric')
  const[weather, setWeather] = useState(null)

  const handleUnitsChange = (e) =>{
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit) setUnits(selectedUnit);
};
  useEffect(()=> {
    const searchWeather = async () => {
      const message = search.q ? search.q :"current location.";
      alert(`Retrieving weather for ` + message);
          await getFormattedWeatherData({...search, units})
          .then((data) =>{
            alert(`Weather data retrieved fro ${data.name}, ${data.country}.`);
            setWeather(data);
          });
        };
        searchWeather();
      }, [search, units]);
   
        

  return (
    <Router>
      <div>
        <div>
          <Navbar />
          <div className='tempUnits' setSearch={setSearch} units={units} setUnits={setUnits}>
    <button name="metric"  onClick={handleUnitsChange}>°C</button>
    <button name="imperial" onClick={handleUnitsChange}>°F</button>
    </div> 
          </div>
        
        <Routes>
          <Route path="/" Component={Home} setSearch={setSearch} element={<FetchedData  weather={weather}/>}>
            </Route>
          <Route path="/hourly" Component={Hourly} element={<FetchedData  weather={weather}/>}>
            </Route>     
          <Route path="/eight-day" Component={EightDay} element={<FetchedData weather={weather}/>}>
            </Route>
          <Route path="/weekend"  Component={Weekend} element={<FetchedData weather={weather}/>}>
            </Route>
          
        </Routes>
      </div>
    </Router>
    
  )
}


export default App;
