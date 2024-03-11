import React from 'react'
import { formatToLocalTime }  from '../FetchedData/FetchedData';

import './Hourly.css'

function Hourly({weather:
    {details, temp, icon, name, timezone, dt, country}}) 
{
    
  return (
    <div>
        <h2>Hourly Sky Forecast</h2>
        <div>
        <div>
        <p className='city'>{`${name}, ${country}`}</p>
        <div className='displayData'>
        <div className='date'>
        <h3>{formatToLocalTime(dt, timezone)}</h3>
        </div>
        <div className='display'>
        <p className='tempImg'><img src={iconUrl(icon)} alt="weather-icon"></img></p>
        <p className='currentTemp'>{`${temp.toFixed()}`}°</p>
        </div>
        </div>
        </div>
        </div>
        
        <div className='hourly'>
                {items.map((item)=>
                (<div className='weekendCardTop'>
                     <p>{item.title}</p>
                        <img src={iconUrl(icon)} alt="weather-icon"></img>
                        <p>{`${item.temp.toFixed()}°`}</p>
                        <p>{`${item.details}`}</p>
                        </div>
                ))}
               
        
           
        </div>
        </div>
        
  );
}

export default Hourly