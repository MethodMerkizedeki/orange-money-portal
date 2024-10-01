// src/pages/KycPage.js

import React, { useState } from 'react';
import KycForm from '../components/KycForm';
import SuccessModal from '../components/SuccessModal';
import Navbar from '../components/Navbar';

const KycPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = () => {
    setIsSuccess(true);
  };

  return (
    <div>
      <Navbar />
      <KycForm onSubmit={handleSubmit} />
      {isSuccess && <SuccessModal />}
    </div>
  );
};

export default KycPage;
