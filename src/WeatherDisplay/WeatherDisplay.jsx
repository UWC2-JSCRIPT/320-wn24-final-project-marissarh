import React from 'react'

function WeatherDisplay({cityName, currentTemp, weatherCondition, highTemp, lowTemp}) {
  return (
    <div>
        <h2>
            {cityName}
        </h2>
        <p>{currentTemp}°C</p>
        <p>Current Temperature</p>
        <p>{weatherCondition}</p>
        <p>High{highTemp}°C</p>
        <p>Low{lowTemp}°C</p>
    </div>
  )
}

export default WeatherDisplay