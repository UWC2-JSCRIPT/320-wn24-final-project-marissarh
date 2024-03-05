import React from 'react';

const Navbar = () =>{
    return (
        <nav>
            <ul>
                <li>
                <Link to ="/">Home</Link>
                </li>
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
        </nav>
    );
};
export default Navbar;