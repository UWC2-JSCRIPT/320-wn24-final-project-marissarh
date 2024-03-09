import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Hourly from "./Hourly/Hourly";
import EightDay from "./EightDay/EightDay";
import Weekend from "./Weekend/Weekend";
import getFormattedWeatherData from "./FetchedData/FetchedData";
import { useEffect, useState } from "react";



function App() {

  const [search, setSearch] = useState({q:'paris'})
  const [units, setUnits] = useState('metric')
  const[weather, setWeather] = useState(null)
  useEffect(()=> {
    const searchWeather = async () => {
      try {
          await getFormattedWeatherData(...search, units)
          .then((data) =>{
            setWeather(data);
          });
      } catch (error) {
          console.log('Error fetching weather data', error);
          console.log(data);
      }
    
        };
        searchWeather();
      }, [search, units]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        {weather && (<div>
          <Route path="/hourly" Component={Hourly} weather={weather}>
            </Route>
          <Route path="/eight-day" Component={EightDay} weather={weather}>
            </Route>
          <Route path="/weekend" Component={Weekend} weather={weather}>
            </Route></div>)}
          <Route path="/" Component={Home} >
            </Route>
        </Routes>
      </div>
    </Router>
    
  )
}


export default App;
