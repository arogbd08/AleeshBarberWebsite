import React from 'react';
import './Mainpage.css'; // Import CSS file for component-specific styles
import { Link } from 'react-router-dom';

function Mainpage() {
  return (
    <div className="mainpage">
      <h1>Barber Aleesh</h1>
      <p>Are you dying in darwin by the heat? DO you want to get fresh and get all the girls? DO you wanna Become an alpha male?</p>
      <p>Visit me or make an appointment</p>
      <div className="navitems">
        <a href="https://calendar.app.google/zK3Lm84F3NqSNaXb7" target="_blank" rel="noopener noreferrer">
          <button>Book Now</button>
        </a>
      </div>
    </div>
  );
}

export default Mainpage;
