import React from 'react'

function WeatherDisplay({cityName, currentTemp, weatherCondition, highTemp, lowTemp}) {
  return (
    <div>
        <h2>
            {cityName}
        </h2>
        <p className='currentTemp'>{currentTemp}°C</p>
        <p className='tempText'>Current Temperature</p>
        <p className='condition'>{weatherCondition}</p>
        <p className='highTemp'>High{highTemp}°C</p>
        <p className='lowTemp'>Low{lowTemp}°C</p>
    </div>
  )
}

export default WeatherDisplay