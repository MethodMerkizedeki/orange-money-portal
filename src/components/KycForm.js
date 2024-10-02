// src/components/KycForm.js

import React, { useState } from 'react';
import './KycForm.css'; // Add this to style the form

const KycForm = ({ onSubmit }) => {
  const [mobile, setMobile] = useState('');
  const [activationKey, setActivationKey] = useState('');

  return (
    <div className="kyc-form">
      <h2>Customer KYC</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input 
            type="text" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
            placeholder="+247 232 324 322" 
          />
        </div>
        <div className="form-group">
          <label>Activation Key:</label>
          <input 
            type="text" 
            value={activationKey} 
            onChange={(e) => setActivationKey(e.target.value)} 
            placeholder="QWERTY1234567" 
          />
        </div>
        <button type="submit" className="check-btn">Check</button>
        <button type="button" className="back-btn">Back</button>
      </form>
    </div>
  );
};

export default KycForm;