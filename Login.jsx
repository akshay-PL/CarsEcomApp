import React, { useState } from 'react';
import './Login.css';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
import user_icon from './Assets/person.png';
import Main from './Main'; // Import Main component

const LoginSignup = () => {
  const [action, setAction] = useState('Sign up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [storedEmail, setStoredEmail] = useState('akshay@gmail.com');
  const [storedPassword, setStoredPassword] = useState('password123');
  const [showMain, setShowMain] = useState(false); // Track whether to show Main
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleSignup = () => {
    console.log('Signup clicked');
  };

  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  const handleSubmitButton = () => {
    console.log('Submit clicked');
    setSubmitClicked(true);
    handleLoginuser();
  };

  const handleLoginuser = () => {
    if (action === 'Login') {
      if (email === storedEmail && password === storedPassword) {
        console.log('Login Successful');
        handleToggleMain(); // Automatically show Main component on successful login
      } else if (email === storedEmail) {
        console.log('Email is correct, password invalid');
      } else if (password === storedPassword) {
        console.log('Password is correct, email invalid');
      } else {
        console.log('Invalid credentials');
      }
    } else {
      console.log('Handling user for signup action - information not found');
    }
  };

  let nameInput = null;
  if (action === 'Sign up') {
    nameInput = (
      <div className="input">
        <img src={user_icon} alt="" />
        <input type="text" placeholder="Name" />
      </div>
    );
  }

  let forgotPasswordParagraph = null;
  if (action === 'Sign up') {
    forgotPasswordParagraph = <div></div>;
  } else {
    forgotPasswordParagraph = (
      <p className="forgot-password" onClick={handleForgotPassword}>
        Forgot Password? <span>Click here </span>
      </p>
    );
  }

  const resetFields = () => {
    setEmail('');
    setPassword('');
    setSubmitClicked(false);
  };

  const handleToggleMain = () => {
    // Check if email and password are equal to storedEmail and storedPassword
    if (email === storedEmail && password === storedPassword) {
      // If credentials are correct and submit button is clicked, toggle the visibility of Main component
      setShowMain(true);
      console.log('Login Successful');
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <>
      {showMain ? (
        <Main />
      ) : (
        <div className="Container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {nameInput}
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {forgotPasswordParagraph}

          {/* Submit Button */}
          <div
            className="submit-button"
            onClick={() => {
              handleSubmitButton();
              resetFields();
            }}
          >
            Submit
          </div>

          {/* Login/signup button */}
          <div className="submit-container">
            <div
              className={action === 'Login' ? 'submit gray' : 'submit'}
              onClick={() => {
                setAction('Sign up');
                handleSignup();
                resetFields();
              }}
            >
              Signup
            </div>
            <div
              className={action === 'Sign up' ? 'submit gray' : 'submit'}
              onClick={() => {
                setAction('Login');
                handleLogin();
              }}
            >
              Login
            </div>
          </div>

          {/* Button to show/hide Main component */}
          {submitClicked && email === storedEmail && password === storedPassword && (
            <button className="toggle-main-button" onClick={handleToggleMain}>
              {showMain ? 'Hide Main' : 'Show Main'}   {/* 'Hide Main' : 'Show Main' no proper use for this here*/}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default LoginSignup;
