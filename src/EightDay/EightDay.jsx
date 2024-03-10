import React from 'react'

import './EightDay.css'
import { formatToLocalTime, iconUrl } from '../FetchedData/FetchedData'



function EightDay({ weather:
    {details, temp, icon, temp_min, temp_max, name, timezone, dt, country}})
    
    {
    
  return (
    <div>
        <div>
        <div>
        <h2>8-Day Sky Forecast</h2>
        {items.map((item))=> (
        <p className='city'>{`${name}`}</p>
        <div className='displayData'>
        <div className='date'>
        <h3>{formatToLocalTime(dt, timezone)}</h3>
        </div>
        <div className='display'>
        <p className='tempImg'><img src={iconUrl(icon)} alt="weather-icon"></img></p>
        <p className='currentTemp'>{`${temp.toFixed()}`}°</p>
        </div></div>
        
        ))}
        {items.map((item, index) =>(
            <p className='condition'>{details}</p>
        <div className='temp'>
        <p className='highTemp'>High{`${temp_max.toFixed()}`}°C</p>
        <p className='lowTemp'>Low{`${temp_min.toFixed()}`}°C</p>
        </div> 
        </div>
        ))}
        </div>
        
   
        <div className='weekendCardTop'>
            <img src="https://img.icons8.com/ios-filled/50/sun--v1.png"></img>
            <p>18°C</p>
            <p>Cloudy</p>
            <p>High 20°C</p>
            <p>Low°C</p>
        </div>}
        
export default EightDay