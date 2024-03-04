import './Homepage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  let navigate = useNavigate();

  // Function to navigate to /productpage
  const navigateToProductPage = () => {
    navigate('/productpage');
  };

  return (
    <div className="Homepage">
      <header className="UniFit-Home">
        <h1 className="title">swap sustainably</h1> {/* Title */}
        <p>Welcome to UniFit!</p>
        {/* Updated Button */}
        <button className="myButton" onClick={navigateToProductPage}>Browse our market</button>
      </header>
    </div>
  );
}

export default Homepage;
