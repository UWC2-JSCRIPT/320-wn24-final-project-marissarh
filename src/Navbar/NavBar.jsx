import React, { useState } from 'react'
import { Link } from "react-router-dom";
import HomeIcon from '../Img/HomeIcon.png'
import './NavBar.css'

function NavBar({setQuery, units, setUnits}) {

  const [cityName, setCityName] = useState(''); 
  const handleUnitsChange = (e) =>{
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit) setUnits(selectedUnit);
  }
  const handleSearchClick = () =>{
    if (cityName !== '') setQuery({q: cityName})
  }
  return (
    <div>  
<nav>
    <div className='navbar'>
     <div className='nav-logo'>
        <Link to ="/"><img src={HomeIcon} alt='sky-forecast weather-icon'/></Link>
      <div className='tempUnits'>
<button name="metric"  onClick={handleUnitsChange}>°C</button>
<button name="imperial" onClick={handleUnitsChange}>°F</button>
</div> </div>
<div className='container'>
    <div className='search-box'> 
    <div className='header'>
<h2>Sky Forecast</h2></div>
<div className='search'>
<input 
type="text" 
placeholder="Enter Location" 
value={cityName}
onChange= {(e) =>
    setCityName(e.currentTarget.value)} className='location-bar'/></div> <br/>
    <button className='search-btn' onClick={handleSearchClick}>Search</button>
</div>
</div>
    </div>
    
    </nav>
    </div>
    )}
export default NavBar