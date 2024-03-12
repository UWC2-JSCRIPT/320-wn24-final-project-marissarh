import React from 'react'
import './WeatherDisplay.css'

function WeatherDisplay() {
  return (
    <div><div className='current-weather'>
    <h2>Current Sky Forecast</h2>
    <h3 className='date'>May 12, 2024</h3>
    <h3>{weather.name} </h3>
    <div className='current-data'>
    <h3 className='current-temp'>75°C</h3>
    <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
    <h3 className='current-condition'>Cloudy</h3>
    <ul>
        <li>High <span>80°</span></li>
        <li>Low <span>70°</span></li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default WeatherDisplay