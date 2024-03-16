import { useState } from 'react'
import PropTypes from 'prop-types'

import './NavBar.css'

function NavBar({setQuery, units, setUnits}) {

  const [city, setCity] = useState(''); 
  const handleUnitsChange = (e) =>{
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit) setUnits(selectedUnit);
  }
  const handleSearchClick = () =>{
    if (city !== '') setQuery({q: city})
  }
  return (
    <div>  
<nav>
    <div className='navbar'>
     <div className='nav-logo'>
      
      <div className='tempUnits'>
<button name="metric"   onClick={handleUnitsChange}>°C</button>
<button name="imperial" onClick={handleUnitsChange}>°F</button>
</div> </div>
<div className='container'>
    <div className='search-box'> 
    <div className='header'>
<h2 >Sky Forecast</h2>
<div className='search'>
<input 
type="text" 
placeholder="Enter Location" 
value={city}
onChange= {(e) =>
    setCity(e.currentTarget.value)} className='location-bar'/></div> <br/>
    <button className='search-btn' data-testid='searchButton'  onClick={handleSearchClick}>Search</button>
</div> </div>
</div>
    </div>
    </nav>
    </div>
    
    );}
    NavBar.propTypes = {
      setQuery: PropTypes.func.isRequired,
      units: PropTypes.string.isRequired,
      setUnits: PropTypes.func.isRequired
    };
    export default NavBar