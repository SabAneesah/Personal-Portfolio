import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import Technology from './Components/Technology.js';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [isVisible, setIsVisible] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div class='bg-slate-900 min-h-screen'>
      <div className="App">
      <Navbar />
      <About />
      <Technology />

      <button
      className={`fixed bottom-4 right-4 p-2 shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={scrollToTop}
      aria-label="Scroll to top">
      <FontAwesomeIcon 
        icon={faShuttleSpace} 
        rotation={270} 
        style={{ color: "#fafdff", width: '24px', height: '24px' }} 
      />
    </button>
      </div>
    </div>
    
  );
}

export default App;
