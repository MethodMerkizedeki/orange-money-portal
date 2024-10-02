
// src/components/SuccessModal.js
import React from 'react';
import './SuccessModal.css';

const SuccessModal = () => {
  return (
    <div className="success-modal">
      <h2>Success</h2>
      <p>First Name: Ruth</p>
      <p>Last Name: Dandelions</p>
      <p>Date Of Birth: 25-09-2024</p>
      <button className="continue-btn">Continue</button>
    </div>
  );
};

export default SuccessModal;