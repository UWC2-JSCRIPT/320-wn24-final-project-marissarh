import './Home.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../Img/HomeIcon.png'

const API_KEY = process.env.WEATHER_API_KEY


const API_URL = process.env.WEATHER_APP_API_URL 


const [lat, setLat] = useState([]);
const [long, setLong]= useState([]);
useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    
});
console.log("Latitude is:", lat)
console.log("Longitude is:", long)}, [lat,long]);

 await fetch(`${API_URL}/weather/?lat=${lat}&lon=${lon}&exclude=alerts,minutely&units=imperial&appid=${API_KEY}`)
        .then(res =>res.json()).then(result =>{
             
            showWeatherData(data);
            console.log(data)});
           
{/*function Home() {
    const [search, setSearch] = useState({q:'berlin'})
    const [units, setUnits] = useState('metric')
    const [city, setCity] = useState("");
  
    const handleSearchClick = () =>{
      if (city !=="") ({q:city});
     };
  
    const handleUnitsChange = (e) =>{
      const selectedUnit = e.currentTarget.name
      if(units !== selectedUnit) setUnits(selectedUnit);
  };
    const [weather, setWeather] = useState({});
   
        let {lat, lon} = success.coords;
        
            
        },[lat, lon])*/}

    return (
    <div>
          <div>
        <nav>
            <div className='navbar'>
             <div className='nav-logo'>
                <Link to ="/"><img src={HomeIcon} alt='sky-forecast weather-icon'/></Link>
              <div className='tempUnits'  units={units}>
    <button name="metric"  onClick={handleUnitsChange}>°C</button>
    <button name="imperial" onClick={handleUnitsChange}>°F</button>
    </div> 
    <div className='container'>
            <div className='search-box'> 
            <div className='header'>
        <h2>Sky Forecast</h2></div>
        <div className='search'>
        <input 
        type="text" 
        placeholder="Enter Location" 
        value={city}
        onChange= {(e) =>
            setCity(e.currentTarget.value)} /> </div> <br/>
            <div className='search-btn'>
            <button onClick={handleSearchClick}>Search</button>
            
       </div>
            </div>
            </div>
            </div>
            </div>
        </nav>
          </div>
        <div className='current-weather'>
            <h2>Current Sky Forecast</h2>
            <h3 className='date'>May 12, 2024</h3>
            <h3>{weather.name} </h3>
            <div className='current-data'>
            <h3 className='current-temp'>75°C</h3>
            <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
            <h3 className='current-condition'>Cloudy</h3>
            <ul>
                <li>High 80°C</li>
                <li>Low 70°C</li>
            </ul>
            </div></div>
            <div>
        <div className='hourly-weather'>
        <h2>Hourly Sky Forecast</h2>
        <ul className='weather-cards'>
            <li className='card'>
            <h3 className='time'>4:00<span>pm</span></h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3></li>
        <li className='card'>
            <h3 className='time'>5:00<span>pm</span></h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3></li>
        <li className='card'>
            <h3 className='time'>6:00<span>pm</span></h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3></li>
        <li className='card'>
            <h3 className='time'>7:00<span>pm</span></h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3></li>
        <li className='card'>
            <h3 className='time'>8:00<span>pm</span></h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3></li>
        
       </ul>
        </div></div>
        
        <div className='day-forecast'>
            <h2> Five-Day Sky Forecast</h2>
                <div className='five-day-forecast'>
        <ul className='five-day-cards'>
            <li className='day-card'>
            <h3>Monday</h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3>
        <h3>High 80°C</h3>
        <h3>Low 70°C</h3>
        </li>
        <li className='day-card'>
            <h3>Tuesday</h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3>
        <h3>High 80°C</h3>
        <h3>Low 70°C</h3>
        </li>
        <li className='day-card'>
            <h3>Wednesday</h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3>
        <h3>High 80°C</h3>
        <h3>Low 70°C</h3>
        </li>
        <li className='day-card'>
            <h3>Thursday</h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3>
        <h3>High 80°C</h3>
        <h3>Low 70°C</h3>
        </li>  
        <li className='day-card'>
            <h3>Friday</h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3>
        <h3>High 80°C</h3>
        <h3>Low 70°C</h3>
        </li>

        </ul>
        </div>
                     
        
               </div>
        
        
        </div>
       
  );
        }

export default Home