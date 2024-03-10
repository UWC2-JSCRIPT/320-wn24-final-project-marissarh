import React from 'react'

import './Hourly.css'

function Hourly({weather:{dt, temp,timezone, temp_min, temp_max, details, icon}}) 
{
    
  return (
    <div>
        <h2>Hourly Sky Forecast</h2>
        
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