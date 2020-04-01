import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    
    return (
        <>
        <nav className="navbar">
        {/* style={{ display: 'flex', justifyContent: 'center', position: 'sticky' }} */}
            <Link to="/">Home</Link>  
            <div className="dropdown">
            <Link to="/the-experience" className="dropbtn">The Experience</Link>
            </div>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/login" onClick={null}>Login</Link>   
        </nav> 
        </>
    )
}

export default Nav;