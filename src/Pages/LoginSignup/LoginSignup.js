import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginSignup.css';

// Import assets
import user_icon from '../../Components/Assets/person.png';
import email_icon from '../../Components/Assets/email.png';
import password_icon from '../../Components/Assets/password.png';

const LoginSignup = () => {
  let navigate = useNavigate(); // Hook for navigation
  const [action, setAction] = useState("Sign Up");

  // Function to handle login or signup action
  const handleLoginSignup = () => {
    // Here, you should include your authentication logic
    // After successful login/signup, navigate to the Profile page
    navigate('/profile');
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name"/>
        </div>}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleLoginSignup}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLoginSignup}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
