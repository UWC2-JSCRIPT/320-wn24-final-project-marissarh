import React, { useState } from 'react'
import './Home.css'

const API_KEY = '7649b28c3542d28d3b3866ddf149b2aa'

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=`


function Home() {

    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    
    const searchWeather = async () => {
        try {
            const response = await fetch (`${API_URL}${location}&appid=${API_KEY}`)
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.log('Error fetching weather data', error);
        }
        };

    return (
    <div>
        <div className='container'>
            <div className='search-box'> 
            <div className='header'>
        <h2>Sky Forecast</h2></div>
        <div className='search'>
        <input 
        type="text" 
        placeholder="Enter Location" 
        value={location} 
        onChange= {(e) => 
            setLocation(e.target.value)} /> </div> <br/>
            <div className='btn'>
            <button onClick={searchWeather}>Search</button>
            {weatherData && <WeatherCard data={weatherData}/>}
       </div>
        </div>
        </div>
        </div>
  );
}

export default Home