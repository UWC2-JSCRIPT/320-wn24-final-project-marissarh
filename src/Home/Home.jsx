import React, { useState } from 'react'
import './Home.css'
import getFormattedWeatherData from '../FetchedData/FetchedData';


function Home() {


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
       
        onChange= {(e) => 
            setLocation(e.target.value)} /> </div> <br/>
            <div className='btn'>
            <button onClick={getFormattedWeatherData}>Search</button>
            
       </div>
        </div>
        </div>
        </div>
  );
}

export default Home