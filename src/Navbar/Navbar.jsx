import React from 'react';
import { Link } from 'react-router-dom'
import HomeIcon from '../Img/HomeIcon.png'
import './Navbar.css'


function Navbar({units, setUnits}){
    const handleUnitsChange = (e) =>{
        const selectedUnit = e.currentTarget.name
        if(units !== selectedUnit) setUnits(selectedUnit);
    };

    return (
        <nav>
            <div className='navbar'>
             <div className='nav-logo'>
                <Link to ="/"><img src={HomeIcon}/></Link>
              
                </div>
                <ul className='nav-menu'>
                <li>
                <Link to ="/hourly">Hourly</Link>
                </li>
                <li>
                <Link to ="/eight-Day">8-Day</Link>
                </li>
                <li>
                <Link to ="/weekend">Weekend</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};
export default Navbar;