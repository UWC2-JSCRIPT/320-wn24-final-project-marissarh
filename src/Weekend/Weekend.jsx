import React from 'react'
import './Weekend.css'
import FetchedData from'../FetchedData/FetchedData'


function Weekend({ weather:
    {details, temp, icon, temp_min, temp_max, name, timezone, dt, country}}){
  return (
    <div>
        <h2>Weekend Sky Forecast</h2>
        <p className='city'>{city}</p>
        <div className='weekendCardTop'>
            <img src="https://img.icons8.com/ios-filled/50/sun--v1.png"></img>
            <p>18°C</p>
            <p>Cloudy</p>
            <p>High 20°C</p>
            <p>Low°C</p>
        </div>
        <div className='weekendCard'>
        
    
        </div>
        </div>
  )
}

export default Weekend