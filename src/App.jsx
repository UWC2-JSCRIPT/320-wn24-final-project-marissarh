import "./App.css"
import NavBar from '../src/Navbar/NavBar'
import TimeandLocation from "./TimeandLocation";
import Home from "./Home/Home";
import WeatherDisplay from "./WeatherDisplay/WeatherDisplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./404Page";
import getFormattedWeatherData from "./FetchedData/FetchedData";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({q:'Seattle'})
  const [units, setUnits] = useState('imperial')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
     const fetchWeather = async() => {
   await getFormattedWeatherData({...query, units})
   .then((data)=> {
    setWeather(data);
   });
    
  };
  fetchWeather();
  }, [query, units])

  return (
  <>
  
  <Router>
    <Routes>
      <Route exact 
      path="/" element={<NavBar setQuery={setQuery} units={units} setUnits={setUnits}/>}/>
  <Route path="/404"
      element={<PageNotFound/>}/>
      </Routes>
    {weather && (
      <div> 
        <TimeandLocation  weather={weather} />
    <WeatherDisplay weather={weather} />
    <Home title="Hourly Sky Forecast" items={weather.hourly} />
    <Home title="Five-Day Sky Forecast" items={weather.daily}/></div>
    )}
    </Router>
   
    </>
  )
}


export default App;
