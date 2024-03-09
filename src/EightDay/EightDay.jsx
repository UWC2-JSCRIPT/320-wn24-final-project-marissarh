import React from 'react'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'
import './EightDay.css'

const city = 'London'

function EightDay() {
    const sevenDayWeather = [
        {
            day: 'Monday',
            date: '12/12',
            highTemp: 25,
            lowTemp:10,
        },
        {
            day: 'Tuesday',
            date: '12/12',
            highTemp: 25,
            lowTemp:10,
        },
        {
            day: 'Wednesday',
            date: '12/12',
            highTemp: 25,
            lowTemp:10,
        },
        {
            day: 'Thursday',
            date: '12/12',
            highTemp: 25,
            lowTemp:10,
        },
        {
            day: 'Friday',
            date: '12/12',
            highTemp: 25,
            lowTemp:10,
        },
        {
            day: 'Saturday',
            date: '12/12',
            highTemp: 25,
            lowTemp:10,
        },
        {
            day: 'Sunday',
            date: '12/12',
            highTemp: 25,
            lowTemp:10,
        }
        
    ]
        
    
  return (
    <div>
        <h2>8-Day Sky Forecast</h2>
        <p className='city'>{city}</p>
        <div className='weekendCardTop'>
            <img src="https://img.icons8.com/ios-filled/50/sun--v1.png"></img>
            <p>18°C</p>
            <p>Cloudy</p>
            <p>High 20°C</p>
            <p>Low°C</p>
        </div>
        <div className='eightCard'>
        {sevenDayWeather.map((data, index) => (
            < WeatherDisplay 
            key={index}
            day={data.day}
            date={data.date}
            currentTemp={`${data.currentTemp}`}
            highTemp={data.highTemp}
            lowTemp={data.lowTemp} 
             />
        ))}</div>
        </div>
  );
  
        }
export default EightDay