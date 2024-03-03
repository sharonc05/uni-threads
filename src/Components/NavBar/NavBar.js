import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import CSS directly

function NavBar() {
  return (
    <div className="header"> {/* Use class names as strings */}
      <div className="logo">UniFit</div>
      <Link to="/productpage" className="navLink exploreGallery">Explore / Gallery</Link>
      <Link to="/about" className="navLink aboutUs">About Us</Link>
      <Link to="/profile" className="navLink profile">Profile</Link>
      <Link to="/cart" className="cartButton">Cart</Link> 
    </div>
  );
}

export default NavBar;