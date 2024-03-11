import React, { useState } from 'react'
import './Home.css'
import { formatToLocalTime }  from '../FetchedData/FetchedData';

function Home({weather:
    {  details, temp, icon, name, timezone, dt, country}}) {
    const [search, setsearch] = useState({q:''})
    const [city, setCity] = useState("");
   const handleSearchClick = () =>{
    if (city !=="") setsearch({q:city});
   };

    return (
    <div>
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
            <div className='btn'>
            <button onClick={handleSearchClick}>Search</button>
            
       </div>
        
    <div>
        <div className='current-weather'>
            <h2>Current Weather Forecast</h2>
            <h2>Paris</h2>
            <h3>75°C</h3>
            <h3>Conditions{`${details}`}</h3>
            </div>
        
        <h2>Hourly Sky Forecast</h2>
        <div>
        <div className='city'>
        <h2>{`${name}, ${country}`}</h2>
        <h3>{formatToLocalTime(dt, timezone)}</h3>
        <div className='tempImg'><img src={iconUrl(icon)} alt="weather-icon"></img></div>
        <h4 className='currentTemp'>{`${temp.toFixed()}`}°</h4>
        </div>
        </div>
        
        <div className='hourly'>
                <div className='weekendCardTop'>
                     <p>{item.title}</p>
                        <img src={iconUrl(icon)} alt="weather-icon"></img>
                        <p>{`${item.temp.toFixed()}°`}</p>
                        <p>{`${item.details}`}</p>
                        </div>
               </div>
        
        
        </div>
        </div>
        </div>
        </div>
  );
}

export default Home