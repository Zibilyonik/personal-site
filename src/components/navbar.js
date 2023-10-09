import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../assets/css/navbar.css';

function Navbar() {
  return (
    <BrowserRouter>
        <nav className='nav-main'>
            <ul className='nav-cont'>
                <li className='nav-link'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav-link'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='nav-link'>
                    <Link to='/projects'>Contact</Link> 
                </li>
            </ul>
        </nav>
    </BrowserRouter>
  );
}

export default Navbar;