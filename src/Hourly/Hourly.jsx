import React from 'react'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'
import './Hourly'

const city= 'Paris'

function Hourly() {
    const weather = [
        { time: '12:00 PM', temperature: 20, condition: 'Sunny'},
        { time: '1:00 PM', temperature: 20, condition: 'Sunny'},
        { time: '2:00 PM', temperature: 20, condition: 'Sunny'},
        
    ];

    
  return (
    <div>
        <div className='container'>
            <h2>{city} Hourly Forecast</h2>
            {weather.map((data, index)=>(
                <WeatherDisplay
                key={index}
                cityName={data.name}
                currentTemp={data.main[0].temp}
                weatherCondition={data.weather[1]}
                highTemp={data.main[3]}
                lowTemp={data.main[2]}  
                />             
                ))}
        </div>
        </div>
  );
}

export default Hourly