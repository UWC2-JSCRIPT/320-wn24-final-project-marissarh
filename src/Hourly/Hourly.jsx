import React from 'react'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'

function Hourly() {
    const weather = {
        cityName:'Paris',
        currentTemp: '20',
        weatherCondition:'Cloudy',
        highTemp: 25,
        lowTemp: 5,
    }
  return (
    <div>
        <WeatherDisplay{...weather} />
        </div>
  )
}

export default Hourly