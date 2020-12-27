import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import ProductDropdown from './ProductDropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* Home */}
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {/* About */}
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          {/* Services */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          {/* Products & Solutions */}
          <li className='nav-item'
              onMouseEnter={onMouseEnter1}
              onMouseLeave={onMouseLeave1} 
          >
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products & Solutions <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <ProductDropdown />}
          </li>
          {/* Our Team */}
          <li className='nav-item'>
            <Link
              to='/our-team'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Our Team
            </Link>
          </li>
          {/* Career */}
          <li className='nav-item'>
            <Link
              to='/career'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Career
            </Link>
          </li>
        </ul>
        {/* Get In Touch */}
        <Button />
      </nav>
      
    </>
  );
}

export default Navbar;
