import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ChoixPharma.css';

const ChoixPharma = ({ onOptionSelect }) => {
  return (
    <div className="container choix-pharma-container">
      <h2 className="text-center mb-4 text-light">Choisissez une Option</h2>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <button
            className="btn btn-primary btn-option"
            onClick={() => onOptionSelect('qr')}
          >
            <i className="bi bi-qr-code-scan me-2"></i>
            Scan avec QR Code
          </button>
        </div>
        <div className="col-md-5">
          <button
            className="btn btn-secondary btn-option"
            onClick={() => onOptionSelect('reference')}
          >
            <i className="bi bi-pencil-square me-2"></i>
            Écrire Référence
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoixPharma;
