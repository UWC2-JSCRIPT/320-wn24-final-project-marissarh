import React from 'react'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'

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
        <p>{city}</p>
        {sevenDayWeather.map((data, index) => (
            < WeatherDisplay 
            key={index}
            day={data.day}
            date={data.date}
            currentTemp={`${data.currentTemp}`}
            highTemp={data.highTemp}
            lowTemp={data.lowTemp} 
             />
        ))}
        </div>
  );
  
        }
export default EightDay