import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import carlogo from './Assets/carlogo.jpg';
import About from './About.jsx';
import Contact from './Contact.jsx';
import './Navbar.css';


const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={carlogo} alt="" className="carlogoimage" />
      </div>
      <div className="heading">CarsEcom</div>
      <div className="nav-links">
        <div className="nav-link" onClick={() => setShowAbout(true)}>
          About Us
        </div>
        <div className="nav-link" onClick={() => setShowContact(true)}>
          Contact
        </div>
        <div className="nav-link" onClick={handleLogout}>
          Logout
        </div>
      </div>

      {showAbout && <About />}
      {showContact && <Contact />}
    </div>
  );
};

export default Navbar;
