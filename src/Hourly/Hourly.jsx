import React from 'react'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'
import './Hourly.css'

const city= 'Paris'

function Hourly() {
    const everyHour = [
        { time: '12:00 PM', temperature: 20, condition: 'Sunny'},
        { time: '1:00 PM', temperature: 20, condition: 'Sunny'},
        { time: '2:00 PM', temperature: 20, condition: 'Sunny'},
        { time: '3:00 PM', temperature: 20, condition: 'Sunny'},
        { time: '4:00 PM', temperature: 20, condition: 'Sunny'},
        { time: '5:00 PM', temperature: 20, condition: 'Sunny'},
        { time: '6:00 PM', temperature: 20, condition: 'Sunny'},
        
    ];

    
    
  return (
    <div>
        <div className='hourly'>
            <h2>Hourly Sky Forecast</h2>
            <div className='city'><p>{city}</p></div>
            <div className='weekendCardTop'>
            <img src="https://img.icons8.com/ios-filled/50/sun--v1.png"></img>
            <p>18°C</p>
            <p>Cloudy</p>
            <p>High 20°C</p>
            <p>Low°C</p>
        </div>
            <div className='hourly-card'>
            {everyHour.map((data, index) => (
                <WeatherDisplay
                key={index}
                currentTemp={`${data.currentTemp}`}
                weatherCondition={data.weatherCondition}
                highTemp={data.highTemp}
                lowTemp={data.lowTemp}  
                />             
                ))}
        </div>
        </div>
        </div>
  );
}

export default Hourly