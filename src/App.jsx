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
          
      }
    
        };
        searchWeather();
      }, [search, units]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} >
            </Route>
          <Route path="/hourly" Component={Hourly}>
            </Route>     
          <Route path="/eight-day" Component={EightDay} >
            </Route>
          <Route path="/weekend" Component={Weekend}>
            </Route>
          
        </Routes>
      </div>
    </Router>
    
  )
}


export default App;
