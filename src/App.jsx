import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import TimeandLocation from "./TimeandLocation";
import Home from "./Home/Home";
import WeatherDisplay from "./WeatherDisplay/WeatherDisplay";

import getFormattedWeatherData from "./FetchedData/FetchedData";




function App() {
 const fetchWeather = async() => {
    const data = await getFormattedWeatherData({q:'Berlin'});
    console.log(data);
  };
  fetchWeather();
   
  return (
  <>
    <NavBar/>
    
    <TimeandLocation />
    <WeatherDisplay />
    <Home title="Hourly Sky Forecast"/>
    <Home dayTitle="Five-Day Sky Forecast"/>
    </>
  )
}


export default App;
