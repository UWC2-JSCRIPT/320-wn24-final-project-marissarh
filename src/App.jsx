import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import HomeIcon from './Img/HomeIcon.png'
import Home from './Home/Home'
import Hourly from "./Hourly/Hourly";
import EightDay from "./EightDay/EightDay";
import FetchedData from './FetchedData/FetchedData';
import getFormattedWeatherData from "./FetchedData/FetchedData";
import { useEffect, useState } from "react";




function App() {

  const [search, setSearch] = useState({q:'berlin'})
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
        <nav>
            <div className='navbar'>
             <div className='nav-logo'>
                <Link to ="/"><img src={HomeIcon} alt='sky-forecast weather-icon'/></Link>
              <div className='tempUnits' setSearch={setSearch} units={units} setUnits={setUnits}>
    <button name="metric"  onClick={handleUnitsChange}>°C</button>
    <button name="imperial" onClick={handleUnitsChange}>°F</button>
    </div> 
                </div>
                <ul className='nav-menu'>
                <li>
                <Link to ="/hourly">Hourly</Link>
                </li>
                <li>
                <Link to ="/eight-Day">8-Day</Link>
                </li>
            </ul>
            </div>
        </nav>
          
          </div>
        
          <div>
            
            
        <Routes>
          <Route path="/" Component={Home} setSearch={setSearch} element={<FetchedData />}>
            </Route>
          <Route path="/hourly" Component={Hourly} title="hourly forecas"element={<FetchedData  />}>
            </Route>     
          <Route path="/eight-day" Component={EightDay} title="daily forecast" element={<FetchedData />}>
            </Route>
         
        </Routes> </div>
      </div>
    </Router>
    
  )
}


export default App;
