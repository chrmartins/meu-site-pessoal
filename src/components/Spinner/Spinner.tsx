import React from 'react';
import { ClipLoader } from 'react-spinners';
import './Spinner.css';

const Spinner: React.FC = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <ClipLoader color="#BB86FC" size={150} />
      </div>
    </div>
  );
};

export default Spinner;
