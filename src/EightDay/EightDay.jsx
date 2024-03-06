import React from 'react'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'

function EightDay() {
    const weather = {
        cityName:'London',
        currentTemp: '10',
        weatherCondition:'Cloudy',
        highTemp: 12,
        lowTemp: 5,
    }
  return (
    <div>
        <WeatherDisplay{...weather} />
        </div>
  )
}

export default EightDay