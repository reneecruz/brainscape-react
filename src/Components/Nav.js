import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {

const [none, setNoneState] = useState("none")     
const [toggleState, setToggleState] = useState("none");

const toggle = () => {
    setToggleState(toggleState === "none" ? "block" : "none");
  }

    return (
    <>
    <nav>

    <ul>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        
        <li class="dropdown">

        <Link to="/the-experience" onClick={toggle} >The Experience</Link>

        {/* <a href="javascript:void(0)" class="dropbtn">The Experience</a> */}
            <div class="dropdown-content" style={{ display: toggleState }}>
                <NavLink to="/">Aurora Borealis</NavLink>
                <NavLink to="/constellation" onClick={toggle}>Constellation</NavLink>
                <NavLink to="/">Earth Orbit</NavLink>
                <NavLink to="/">EVA</NavLink>
            </div>
        </li>

        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>

    </ul>

    </nav>
    </>
    )
}

export default Nav;