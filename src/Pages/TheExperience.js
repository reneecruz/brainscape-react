import React from 'react';
import { Link } from 'react-router-dom';

const TheExperience = () => {
        
    return (
        <>
      
       <div class="dropdown-content" id="myDropdown">
            <Link to="/" className="">Aurora Borealis</Link>
            <Link to="/constellation" className="">Constellation</Link>
            <Link to="/"className="">Earth Orbit</Link>
            <Link to="/"className="">EVA</Link>
        </div>
      
        </>
    )
}

export default TheExperience;


