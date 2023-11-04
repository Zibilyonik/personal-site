import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/Navbar.scss';

function Navbar() {
  return (
        <nav className='nav-main'>
            <ul className='nav-cont'>
                <li className='nav-link'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav-link'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='nav-link'>
                    <Link to='/contact'>Contact</Link> 
                </li>
            </ul>
        </nav>
  );
}

export default Navbar;