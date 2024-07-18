
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = ({ setActiveTab }) => {
  const [email, setEmail] = useState('FoulenBenFoulen@gmail.com');
  const [password, setPassword] = useState('********');
  const [nom, setNom] = useState('Foulen');
  const [prenom, setPrenom] = useState('Ben Foulen');
  const [numTelephone, setNumTelephone] = useState('12345678');
  const [numCIN, setNumCIN] = useState('87654321');

  const handleChangeEmail = () => {
    const newEmail = prompt('Enter nouveau email:', email);
    if (newEmail) {
      setEmail(newEmail);
    }
  };

  const handleChangePassword = () => {
    const newPassword = prompt('Enter nouveau password:', '');
    if (newPassword) {
      setPassword(newPassword);
    }
  };

  const handleChangeNom = () => {
    const newNom = prompt('Enter nouveau nom:', nom);
    if (newNom) {
      setNom(newNom);
    }
  };

  const handleChangePrenom = () => {
    const newPrenom = prompt('Enter nouveau prenom:', prenom);
    if (newPrenom) {
      setPrenom(newPrenom);
    }
  };

  const handleChangeNumTelephone = () => {
    const newNumTelephone = prompt('Enter nouveau num telephone:', numTelephone);
    if (newNumTelephone) {
      setNumTelephone(newNumTelephone);
    }
  };

  const handleChangeNumCIN = () => {
    const newNumCIN = prompt('Enter nouveau num CIN:', numCIN);
    if (newNumCIN) {
      setNumCIN(newNumCIN);
    }
  };

  const handleBack = () => {
    setActiveTab('addOrd');
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header">
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="bi bi-arrow-left"></i> Retour
          </button>
        </div>
        <div className="card-body">
          <h3>Profile Information</h3>
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Nom:</label>
              <input type="text" className="form-control" value={nom} readOnly />
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary mt-4" onClick={handleChangeNom}>
                Change Nom
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Prenom:</label>
              <input type="text" className="form-control" value={prenom} readOnly />
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary mt-4" onClick={handleChangePrenom}>
                Change Prenom
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Num Telephone:</label>
              <input type="text" className="form-control" value={numTelephone} readOnly />
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary mt-4" onClick={handleChangeNumTelephone}>
                Change Num Telephone
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Num CIN:</label>
              <input type="text" className="form-control" value={numCIN} readOnly />
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary mt-4" onClick={handleChangeNumCIN}>
                Change Num CIN
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Email:</label>
              <input type="text" className="form-control" value={email} readOnly />
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary mt-4" onClick={handleChangeEmail}>
                Change Email
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Password:</label>
              <input type="password" className="form-control" value={password} readOnly />
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary mt-4" onClick={handleChangePassword}>
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
