import React from 'react'
import './WeatherDisplay.css'
import { formatToLocalTime, iconUrl } from '../FetchedData/FetchedData'

function WeatherDisplay({ weather:{details, icon, temp_min, temp_max, name, timezone, dt, country} }) {
  return (
    <div>
        <h2>
            {`${name}`}
        </h2>
        <div className='displayData'>
        <div className='date'>
        <h3>{formatToLocalTime(dt, timezone)}</h3>
        </div>
        <div className='display'>
        <p className='tempImg'><img src={iconUrl(icon)} alt="weather-icon"></img></p>
        <p className='currentTemp'>{`${temp.toFixed()}`}°C</p>
        <p className='condition'>{details}</p>
        <div className='temp'>
        <p className='highTemp'>High{`${temp_max.toFixed()}`}°C</p>
        <p className='lowTemp'>Low{`${temp_min.toFixed()}`}°C</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default WeatherDisplay