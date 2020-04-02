import React from 'react';
import { NavLink } from 'react-router-dom';

const TheExperience = () => {
        
    return (
        <>
      <div className="drop-content">
        <NavLink to="/">Aurora Borealis</NavLink>
        <NavLink to="/constellation">Constellation</NavLink>
        <NavLink to="/">Earth Orbit</NavLink>
        <NavLink to="/">EVA</NavLink>
      </div>        
        </>
    )
}

export default TheExperience;


