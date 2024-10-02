
// src/pages/SubscriptionPage.js
import React, { useState } from 'react';
import SubscriptionForm from '../components/SubscriptionForm';
import Navbar from '../components/Navbar';

const SubscriptionPage = () => {
  return (
    <div>
      <Navbar />
      <SubscriptionForm />
    </div>
  );
};

export default SubscriptionPage;
