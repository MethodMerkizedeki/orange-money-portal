
// src/components/SubscriptionForm.js
import React, { useState } from 'react';
import './SubscriptionForm.css';

const SubscriptionForm = () => {
  const [accountId, setAccountId] = useState('');
  const [mobile, setMobile] = useState('');
  const [activationKey, setActivationKey] = useState('');
  const [label, setLabel] = useState('');
  const [currency, setCurrency] = useState('');

  return (
    <div className="subscription-form">
      <h2>Customer Subscription</h2>
      <form>
        <div className="form-group">
          <label>Account ID:</label>
          <input 
            type="text" 
            value={accountId} 
            onChange={(e) => setAccountId(e.target.value)} 
            placeholder="5000001234" 
          />
        </div>
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
        <div className="form-group">
          <label>Label:</label>
          <input 
            type="text" 
            value={label} 
            onChange={(e) => setLabel(e.target.value)} 
            placeholder="Personal Saving Account" 
          />
        </div>
        <div className="form-group">
          <label>Currency:</label>
          <input 
            type="text" 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)} 
            placeholder="CDF" 
          />
        </div>
        <button type="submit" className="subscribe-btn">Subscribe</button>
        <button type="button" className="back-btn">Back</button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
