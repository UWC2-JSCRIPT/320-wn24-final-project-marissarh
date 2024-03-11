import React, { useState } from 'react'
import './Home.css'

function Home({}) {
    const [search, setsearch] = useState({q:''})
    const [city, setCity] = useState("");
   const handleSearchClick = () =>{
    if (city !=="") setsearch({q:city});
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
        value={city}
        onChange= {(e) => 
            setCity(e.currentTarget.value)} /> </div> <br/>
            <div className='btn'>
            <button onClick={handleSearchClick}>Search</button>
            
       </div>
        </div>
        
        </div>
        </div>
  );
}

export default Home