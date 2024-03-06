import React, { useState} from 'react'

function TempConverter({ temperature }) {
const [isCelsius, setIsCelsius] = useState(true);

const unitTemp = () => {
  setIsCelsius(!isCelsius);
};
const convertedTemp = isCelsius ? temperature : Math.round((temperature - 32) * 5/9);
return(
  <span onClick={ {unitTemp} }>
    {convertedTemp}°{isCelsius ? 'C' : 'F'}
  </span>
)
}

const WeatherCard = ({ data }) => {
  const tempCelsius = Math.round(data.main.temp);
  const tempFahrenheit = Math.round((data.main.temp * 9/5 + 32));
  const roundedTemp = tempFahrenheit + (tempFahrenheit % 2);
  return (
    <div>
        <h3>{data.name}</h3>
        <p>Temperature: {data.main.temp}°F</p>
        <p>Conditions: {data.weather[0].description}</p>
    </div>
  )
}

export default WeatherCard