// src/components/Navbar.js

import React from 'react';
import './Navbar.css'; // Add this to style your navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/path-to-logo.png" alt="Bank Logo" className="logo" />
      <div className="user-info">
        <img src="/path-to-avatar.png" alt="Avatar" className="avatar" />
        <span>DRC Customer</span>
      </div>
    </nav>
  );
};

export default Navbar;
