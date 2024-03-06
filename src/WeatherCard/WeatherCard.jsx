import React, { useState} from 'react'

function TempConverter({ temperature }) {
  const [isFahrenheit, setIsFahrenheit] = useState(true);
}

const WeatherCard = ({ weatherData }) => {

  return (
    <div>
        <h3>{weatherData.name}</h3>
        <p>Temperature: {weatherData.main.temp}°F</p>
        <p>Conditions: {weatherData.weather[0].description}</p>
    </div>
  )
}

export default WeatherCard