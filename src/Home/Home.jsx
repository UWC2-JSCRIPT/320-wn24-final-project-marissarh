import React, { useState } from 'react'





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
        
        <h2>Home</h2>
        <input 
        type="text" 
        placeholder="Enter Location" 
        value={location} 
        onChange= {(e) => 
            setLocation(e.target.value)} />
            <button onClick={searchWeather}>Search</button>
            {weatherData && <WeatherCard data={weatherData}/>}
        </div>
  );
}

export default Home