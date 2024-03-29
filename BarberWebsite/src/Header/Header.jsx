import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'; // Import animateScroll function
import { useRef } from 'react';
import './Header.css';
import logo from '../assets/logo2.png';

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const closeNavbar = () => {
    navRef.current.classList.remove('responsive_nav');
  };

  const scrollToTop = () => {
    scroll.scrollToTop(); // Scroll to the top of the page
  };

  return (
    <div>
      <header>
      <Link to="/">
        <h3>
          <img className="logo" src={logo} alt="Logo" onClick={scrollToTop} />
        </h3>
      </Link>
        <nav ref={navRef}>

          <div className="navitems">
            <Link to="/" onClick={closeNavbar}>
              <button onClick={scrollToTop}>Home</button>
            </Link>
          </div>


          <div className="navitems">
            <Link to="/services" onClick={closeNavbar}>
              <button onClick={scrollToTop}>Services</button>
            </Link>
          </div>
          

          <div className="navitems">
          <a href="https://maps.app.goo.gl/PXCEqY5UhR7DVczZ6" target="_blank" rel="noopener noreferrer" onClick={closeNavbar}>
          <button>Location</button>
          </a>
          </div>


          <div className="navitems">
          <a href="https://calendar.app.google/zK3Lm84F3NqSNaXb7" target="_blank" rel="noopener noreferrer" onClick={closeNavbar}>
          <button>Book Now</button>
        </a>
          </div>


          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Header;
