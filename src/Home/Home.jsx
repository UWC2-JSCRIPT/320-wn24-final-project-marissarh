import { iconCode } from '../FetchedData/FetchedData';
import './Home.css'
import React from 'react'

function Home({title, items}){
    console.log(items);
    return (
    <div>
        
            <div>
        <div className='hourly-weather'>
        <h2>{title}</h2>
        {items.map((item,index)=>(
            <div key={index}>
        <ul className='weather-cards'>
            <li className='card'>
            <h3 className='time'>{item.title}</h3>
        <div><img src={iconCode(item.icon)} alt="weather-icon"></img></div>
        <h3 className='currentTemp'>{`${item.temp.toFixed()}`}°</h3>
        </li>
        
        
        </ul>
       </div>
       ))}
        </div></div>
        
      
        
        
        </div>
       
  );
        }
export default Home