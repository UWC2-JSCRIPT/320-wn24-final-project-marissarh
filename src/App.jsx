import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../src/Navbar/NavBar'
import TimeandLocation from "./TimeandLocation";
import Home from "./Home/Home";
import WeatherDisplay from "./WeatherDisplay/WeatherDisplay";

import getFormattedWeatherData from "./FetchedData/FetchedData";
import { useEffect, useState } from "react";




function App() {
  const [query, setQuery] = useState({q:'paris'})
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
    <NavBar setQuery={setQuery} units={units} setUnits={setUnits}/>
    {weather && (
      <div> 
        <TimeandLocation  weather={weather} />
    <WeatherDisplay weather={weather} />
    <Home title="Hourly Sky Forecast" items={weather.hourly}/>
    <Home dayTitle="Five-Day Sky Forecast" items={weather.daily}/></div>
    )}
   
    </>
  )
}


export default App;
