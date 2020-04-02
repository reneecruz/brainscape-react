import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    
    return (
    <>
    <nav>

    <ul>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        
        <li class="dropdown">

        <a href="javascript:void(0)" class="dropbtn">The Experience</a>
            
            <div class="dropdown-content">
                <NavLink to="/">Aurora Borealis</NavLink>
                <NavLink to="/constellation">Constellation</NavLink>
                <NavLink to="/">Earth Orbit</NavLink>
                <NavLink to="/">EVA</NavLink>
            </div>
        </li>

        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/login" onClick={null}>Login</NavLink></li>
        
    </ul>

    </nav>
    </>
    )
}

export default Nav;