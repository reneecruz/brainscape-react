import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    
    return (
        <>
        <nav id="nav" style={{ display: 'flex', justifyContent: 'center', position: 'sticky' }}>

            <Link to="/">Home</Link>
            <Link to="/the-experience">The Experience</Link>
            <Link to="/pricing">Pricing</Link>

            <Link to="/about-us">About Us</Link>
            <Link to="/login" onClick={null}>Login</Link>          

        </nav>
       
        </>
    )
}

export default Nav;