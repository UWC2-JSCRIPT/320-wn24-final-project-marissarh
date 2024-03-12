import React from 'react'
import { Link } from "react-router-dom";
import HomeIcon from '../Img/HomeIcon.png'
import './NavBar.css'

function NavBar() {
  return (
    <div> <nav>
    <div className='navbar'>
     <div className='nav-logo'>
        <Link to ="/"><img src={HomeIcon} alt='sky-forecast weather-icon'/></Link>
      <div className='tempUnits'  >
<button name="metric"  onClick={handleUnitsChange}>°C</button>
<button name="imperial" onClick={handleUnitsChange}>°F</button>
</div> 
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
    <button className='search-btn' onClick={handleSearchClick}>Search</button>

    </div>
    </div>
    </div>
    </div>
</nav></div>
  )
}

export default NavBar