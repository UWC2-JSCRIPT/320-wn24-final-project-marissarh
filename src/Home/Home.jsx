import { iconCode } from '../FetchedData/FetchedData';
import './Home.css'
import React from 'react'

function Home({title, dayTitle, items}){
    return (
    <div>
        
            <div>
        <div className='hourly-weather'>
        <h2>{title}</h2>
        <ul className='weather-cards'>
            <li className='card'>
            <h3 className='time'>{items.title}</h3>
        <div className='tempImg'><img src={iconCode(items.icon)} alt="weather-icon"></img></div>
        <h3 className='currentTemp'>{`${items.temp.toFixed()}`}°</h3>
        <h3>Cloudy</h3></li>
        <li className='card'>
            <h3 className='time'>5:00<span>pm</span></h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3></li>
        <li className='card'>
            <h3 className='time'>6:00<span>pm</span></h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3></li>
        <li className='card'>
            <h3 className='time'>7:00<span>pm</span></h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3></li>
        <li className='card'>
            <h3 className='time'>8:00<span>pm</span></h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3></li>
        
       </ul>
        </div></div>
        
        <div className='day-forecast'>
            <h2>{dayTitle}</h2>
                <div className='five-day-forecast'>
        <ul className='five-day-cards'>
            <li className='day-card'>
            <h3>Monday</h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3>
        <h3>High 80°C</h3>
        <h3>Low 70°C</h3>
        </li>
        <li className='day-card'>
            <h3>Tuesday</h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3>
        <h3>High 80°C</h3>
        <h3>Low 70°C</h3>
        </li>
        <li className='day-card'>
            <h3>Wednesday</h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3>
        <h3>High 80°C</h3>
        <h3>Low 70°C</h3>
        </li>
        <li className='day-card'>
            <h3>Thursday</h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3>
        <h3>High 80°C</h3>
        <h3>Low 70°C</h3>
        </li>  
        <li className='day-card'>
            <h3>Friday</h3>
        <div className='tempImg'><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon"></img></div>
        <h3 className='currentTemp'>75°</h3>
        <h3>Cloudy</h3>
        <h3>High 80°C</h3>
        <h3>Low 70°C</h3>
        </li>

        </ul>
        </div>
                     
        
               </div>
        
        
        </div>
       
  );
        }

export default Home