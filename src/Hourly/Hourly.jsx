import React from 'react'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'
import './Hourly.css'

function Hourly({weather:{dt, timezone, temp_min, temp_max, details, icon}}) 
{
    
  return (
    <div>
        <h2>Hourly Sky Forecast</h2>
        <WeatherDisplay/>
        <div className='hourly'>
            <div className='weekendCardTop'>
            <img src={iconUrl(icon)} alt="weather-icon"></img>
            <p>{`${temp.toFixed()}°`}</p>
            <p>{`${details}`}</p>
            <p>High {`${temp_max.toFixed()}°`}</p>
            <p>Low {`${temp_min.toFixed()}°`}</p>
        </div>
           
        </div>
        </div>
        
  );
}

export default Hourly