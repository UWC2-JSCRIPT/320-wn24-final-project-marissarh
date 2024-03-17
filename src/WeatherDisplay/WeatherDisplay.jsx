import React from 'react'
import './WeatherDisplay.css'
import { iconCode } from '../FetchedData/FetchedData'
import PropTypes from 'prop-types'
function WeatherDisplay({
  weather:{ description, icon, temp, temp_min, temp_max, name, country}}) 
  {
  return (
    <div>
      <div className='current-weather'>
    <h2>Current Sky Forecast</h2>
    <h3 data-testid ="location" >{`${name}, ${country}`}</h3>
    <div className='current-data'>
      
    <h3 className='current-temp' >{`${temp.toFixed()}°`}</h3>
    <div className='tempImg'><img src={iconCode(icon)} alt="weather-icon"></img></div>
    
    <ul><li>{`${description}`}</li>
        <li>High <span>{`${temp_max.toFixed()}°`}</span></li>
        <li>Low <span>{`${temp_min.toFixed()}°`}</span></li>
        
    </ul>
    </div>
    </div>
    </div>
  )
}
WeatherDisplay.propTypes ={
  weather: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired

};

export default WeatherDisplay