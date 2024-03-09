import React from 'react'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'


const city = 'Paris'
function Weekend() {
    const weekendWeather = [
        {
            day: 'Friday',
            temp:'10',
            weatherimg: '*',
        },
        {
            day: 'Saturday',
            temp:'10',
            weatherimg: '*',
        },
        {
            day: 'Sunday',
            temp:'10',
            weatherimg: '*',
        },
        {
            day: 'Sunday',
            temp:'10',
            weatherimg: '*',
        },
    ]
  return (
    <div>
        <h2>Weekend Sky Forecast</h2>
        <p>{city}</p>
        {weekendWeather.map((data, index) => (
            <WeatherDisplay
            key={index}
            currentTemp={`${data.currentTemp}`} />
        ))}
        
        </div>
  )
}

export default Weekend