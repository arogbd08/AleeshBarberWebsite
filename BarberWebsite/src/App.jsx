
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './Mainpage/Mainpage';
import Header from './Header/Header';
import ServicePage from './ServicesPage/Services';


function App() {

  useEffect(() => {
    document.title = "Aleesh Barbers";
  }, []);
  
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </>
  );
}

export default App;
