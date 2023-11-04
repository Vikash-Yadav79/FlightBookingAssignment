// Navbar.js
import React from 'react';
import './Navbar.css'; // You can create a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Flight Booking</div>
      <div className="navbar-links">
        <div className="navbar-link">USD Notification</div>
        <div className="navbar-link">Profile</div>
      </div>
    </nav>
  );
}

export default Navbar;
