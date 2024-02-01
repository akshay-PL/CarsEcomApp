import React, { useState } from 'react';
import './Main.css';
import car1 from './Assets/car1.jpg';
import car2 from './Assets/car2.jpg';
import car3 from './Assets/car3.png';
import car4 from './Assets/car4.png';
import car5 from './Assets/car5.jpg';
import car6 from './Assets/car6.png';
import carlogo from './Assets/carlogo.jpg';
import About from './About';
import Contact from './Contact';

const Main = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showOriginalMain, setShowOriginalMain] = useState(true); 


  const handleMainPageClick = () => {
    setShowAbout(false);
    setShowContact(false);
    setShowOriginalMain(true);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowContact(false);
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowAbout(false);
  };

  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <div className="outercontainer">
      <div className="logo">
        <img src={carlogo} alt="" className='carlogoimage'/>
      </div>
      <div className="topRightLinks">
      <div className="mainpageoption" onClick={handleMainPageClick}>
          <div className="nav-link">Main-page</div>
        </div>
        <div className="aboutus" onClick={handleAboutClick}>
          <div className="nav-link">About us</div>
        </div>
        <div className="contact" onClick={handleContactClick}>
          <div className="nav-link">Contact</div>
        </div>
        <div className="loginsignupbutton">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="heading">Welcome</div>
      <div className="searchbar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="container">
        {showAbout && <About />}
        {showContact && <Contact />}
        {!showAbout && !showContact && (
          <>
            <div className="car1">
              <h3>Car 1</h3>
              <img src={car1} alt='' className="car1-image" />
              <div className="car1info">
                <p>statement1</p>
                <p>statement1</p>
                <p>statement1</p>
                <button>See Details</button>
                <button>Buy</button>
              </div>
            </div>
            <div className="car2">
              <h3>Car 2</h3>
              <img src={car2} alt='' className="car2-image" />
              <div className="car2info">
                <p>statement1</p>
                <p>statement1</p>
                <p>statement1</p>
                <button>See Details</button>
                <button>Buy</button>
              </div>
            </div>
            <div className="car3">
              <h3>Car 3</h3>
              <img src={car3} alt='' className="car3-image" />
              <div className="car3info">
                <p>statement1</p>
                <p>statement1</p>
                <p>statement1</p>
                <button>See Details</button>
                <button>Buy</button>
              </div>
            </div>
            <div className="car4">
              <h3>Car 4</h3>
              <img src={car4} alt='' className="car4-image" />
              <div className="car4info">
                <p>statement1</p>
                <p>statement1</p>
                <p>statement1</p>
                <button>See Details</button>
                <button>Buy</button>
              </div>
            </div>
            <div className="car5">
              <h3>Car 5</h3>
              <img src={car5} alt='' className="car5-image" />
              <div className="car5info">
                <p>statement1</p>
                <p>statement1</p>
                <p>statement1</p>
                <button>See Details</button>
                <button>Buy</button>
              </div>
            </div>
            <div className="car6">
              <h3>Car 6</h3>
              <img src={car6} alt='' className="car6-image" />
              <div className="car6info">
                <p>statement1</p>
                <p>statement1</p>
                <p>statement1</p>
                <button>See Details</button>
                <button>Buy</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
