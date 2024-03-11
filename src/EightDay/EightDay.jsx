import React from 'react'
import FetchedData from '../FetchedData/FetchedData'
import './EightDay.css'
import { formatToLocalTime, iconUrl } from '../FetchedData/FetchedData'



function EightDay({ weather:
    {details, temp, icon, temp_min, temp_max, name, timezone, dt, country}})
    
    {
    
  return (
    <div>
        <FetchedData />
        <div>
        <div>
        <h2>8-Day Sky Forecast</h2>
        <p className='city'>{`${name}, ${country}`}</p>
        <div className='displayData'>
        <div className='date'>
        <h3>{formatToLocalTime(dt, timezone)}</h3>
        </div>
        <div className='display'>
        <p className='tempImg'><img src={iconUrl(icon)} alt="weather-icon"></img></p>
        <p className='currentTemp'><span>{`${temp.toFixed()}°`}</span></p>
        </div>
        </div>
        </div>
        </div>

   
        <div className='weekendCardTop'>
            <img src={iconUrl(icon)} alt='weather-icon'></img>
            <p>{`${temp.toFixed()}°`}</p>
            <p>{details}</p>
            <p>High <span>{`${temp_max.toFixed()}°`}</span></p>
            <p>Low <span>{`${temp_min.toFixed()}}°`}</span></p>
       </div>
       </div>
       )}
        
export default EightDay