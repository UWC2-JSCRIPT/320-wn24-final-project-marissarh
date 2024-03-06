import React, { useState} from 'react'

function TempConverter({ temperature }) {
const [isCelsius, setIsCelsius] = useState(true);

const unitTemp = () => {
  setIsCelsius(!isCelsius);
};
const convertedTemp = isCelsius ? temperature : Math.round((temperature - 32) * 5/9);
return(
  <span onClick={{unitTemp}}>
    {convertedTemp}°{isCelsius ? 'C' : 'F'}
  </span>
)
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