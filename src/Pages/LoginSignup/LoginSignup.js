import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

// Import assets
import user_icon from '../../Components/Assets/person.png';
import email_icon from '../../Components/Assets/email.png';
import password_icon from '../../Components/Assets/password.png';

const LoginSignup = () => {
  let navigate = useNavigate();
  const [action, setAction] = useState("Sign Up");

  // Toggle to Sign Up
  const toggleToSignUp = () => {
    if(action === "Login") {
      setAction("Sign Up");
    } else {
      // Authentication logic for signing up
      navigate('/homepage');
    }
  };

  // Toggle to Login
  const toggleToLogin = () => {
    if(action === "Sign Up") {
      setAction("Login");
    } else {
      // Authentication logic for login
      navigate('/homepage');
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name"/>
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      {action === "Sign Up" ? null : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={toggleToSignUp}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={toggleToLogin}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
