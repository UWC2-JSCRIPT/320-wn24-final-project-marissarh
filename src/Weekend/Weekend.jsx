import React from 'react'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'
import './Weekend.css'


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
       
    ]
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
        {weekendWeather.map((data, index) => (
            <WeatherDisplay
            key={index}
            currentTemp={`${data.currentTemp}`} />
        ))}
        </div>
        </div>
  )
}

export default Weekend