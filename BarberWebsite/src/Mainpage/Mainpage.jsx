import React from 'react';
import './Mainpage.css'; // Import CSS file for component-specific styles
import { Link } from 'react-router-dom';
import animationGif from '../assets/animation.gif';

function Mainpage() {
  return (
    <div className="mainpage">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='column'>
      <p><img className='animation' src={animationGif} alt="Animation" /></p>

  <div>
  <p> Your local home barber shop in Darwin, where style meets comfort. At Aleesh Barber, we focus on delivering personalized haircuts and grooming services tailored to your individual style. Whether you’re after a fresh fade, a classic cut, or a beard trim, we provide a welcoming and relaxed atmosphere where you can enjoy high-quality barber services right at home. Step into Aleesh Barber and step out with confidence!<br/> <br/><br/>Visit me or make an appointment</p>

  <div className="navitems">
        <a href="https://calendar.app.google/SiMJ3u6hrH8YVCew5" target="_blank" rel="noopener noreferrer">
          <button>Book Now</button>
        </a>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default Mainpage;
