
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './Mainpage/Mainpage';
import Header from './Header/Header';


function App() {

  useEffect(() => {
    document.title = "Aleesh Barbers";
  }, []);
  
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </>
  );
}

export default App;
