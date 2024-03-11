import React from 'react'
import FetchedData from '../FetchedData/FetchedData';
import { formatToLocalTime }  from '../FetchedData/FetchedData';

import './Hourly.css'

function Hourly({weather:
    {details, temp, icon, name, timezone, dt, country}}) 
{
    
  return (
    <div>
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
        
        
  );
}

export default Hourly