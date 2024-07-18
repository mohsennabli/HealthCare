import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addOrd.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddOrd = ({ setActiveTab }) => {
  const [nomMedicament, setNomMedicament] = useState('');
  const [type, setType] = useState('');
  const [dosage, setDosage] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [medications, setMedications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  // State variables for the additional information
  const [nomMedecin, setNomMedecin] = useState('Dr. Flen Ben Foulen');
  const [specialite, setSpecialite] = useState('Cardiologist');
  const [adresseCabinet, setAdresseCabinet] = useState('7000 Bizerte');

  // State variables for form inputs
  const [nomPatient, setNomPatient] = useState('');
  const [age, setAge] = useState('');
  const [poids, setPoids] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Placeholder for fetching registration data for nomMedecin, specialite, and adresseCabinet
    // setNomMedecin(fetchedNomMedecin);
    // setSpecialite(fetchedSpecialite);
    // setAdresseCabinet(fetchedAdresseCabinet);
  }, []);

  const handleAddMedication = () => {
    if (nomMedicament && type && dosage && startDate && endDate) {
      setMedications([
        ...medications,
        { nomMedicament, type, dosage, startDate, endDate }
      ]);
      setNomMedicament('');
      setType('');
      setDosage('');
      setStartDate(null);
      setEndDate(null);
    }
  };

  const handleRetour = (event) => {
    event.preventDefault();
    setActiveTab('Login');
  };

  const handleDeleteMedication = (index) => {
    const updatedMedications = medications.filter((_, medIndex) => medIndex !== index);
    setMedications(updatedMedications);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nomPatient && age && poids && medications.length > 0) {
      setShowModal(true);
    }
  };

  const handleChooseEmail = (e) => {
    e.preventDefault();
    setShowModal2(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowModal2(false);
  };

  const isFormValid = () => {
    return nomPatient && age && poids && medications.length > 0;
  };

  const handleViewProfile = () => {
    setActiveTab('Profile');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    setActiveTab('Login');
  };
  const handleSearchOrdonnance = () => {
    setActiveTab('Recherche');
  };
  

  return (
    <div className="container my-5">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                  <li>
                    <button className="dropdown-item" onClick={handleViewProfile}>
                      View Profile
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="col-12 login-header text-center">
          <i className="bi bi-prescription2 icon"></i>
          <h1>Ordonnance Digitale</h1>
        </div>
      </div>
      <div className="card custom-card">
        <div className="card-header text-white">
          <div className="row">
            <div className="col-6 text-left">
              <button className="btn btn-secondary" onClick={handleRetour}>
                <i className="bi bi-arrow-left"></i> Retour
              </button>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-primary" onClick={handleSearchOrdonnance}>Rechercher Ordonnance</button>
            </div>
          </div>
        </div>
        <div className="card-body custom-card-body">
          <div className="row">
            <div className="col-6 text-left">
              <h5>{nomMedecin}</h5>
              <h6>{specialite}</h6>
            </div>
            <div className="col-6 text-right">
              <h5>{adresseCabinet}</h5>
              <h6>Date Consultation: {new Date().toLocaleDateString()}</h6>
            </div>
          </div>
          <div className="row mb-3 text-center">
            <div className="col-12">
              <i className="bi bi-capsule custom-capsule-icon"></i>
            </div>
          </div>
          <form className="custom-form" onSubmit={handleSubmit}>
            <div className="form-group row justify-content-center">
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder='Nom Patient'
                  value={nomPatient}
                  onChange={(e) => setNomPatient(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Age"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder='Poids'
                  value={poids}
                  onChange={(e) => setPoids(e.target.value)}
                />
              </div>
            </div>
            <div className="container text-center">
              <div className="row row-cols-5">
                <div className="col">
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder='Nom Medicament'
                    value={nomMedicament}
                    onChange={(e) => setNomMedicament(e.target.value)}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder='Type'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder='Dosage'
                    value={dosage}
                    onChange={(e) => setDosage(e.target.value)}
                  />
                </div>
                <div className="col">
                  <i
                    className="bi bi-calendar-fill"
                    onClick={() => setShowDatePicker(true)}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </div>
                <div className="col">
                  <i
                    className="bi bi-check-square"
                    onClick={handleAddMedication}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </div>
              </div>
              {showDatePicker && (
                <div className="row mt-3 justify-content-center">
                  <div className="col-sm-3">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="Start Date"
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-3">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="End Date"
                      className="form-control"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="form-group row justify-content-center">
              {medications.length > 0 && (
                <div className="col-sm-12">
                  <h3>Liste des Médicaments</h3>
                  <ul className="list-group">
                    {medications.map((med, index) => (
                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                          Nom: {med.nomMedicament}, Type: {med.type}, Dosage: {med.dosage},
                          Période: {med.startDate.toLocaleDateString()} - {med.endDate.toLocaleDateString()}
                        </span>
                        <i
                          className="bi bi-trash-fill ml-2"
                          onClick={() => handleDeleteMedication(index)}
                          style={{ cursor: 'pointer', color: 'red', fontSize: '1.5em' }}
                        ></i>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="form-group row">
              <div className="col-sm-6 text-left">
                <button type="reset" className="btn btn-primary">Réinitialiser</button>
              </div>
              <div className="col-sm-6 text-right">
                <button type="submit" className="btn btn-primary" disabled={!isFormValid()}>Soumettre</button>
              </div>
            </div>
          </form>
          {showModal && (
            <div className="modal show d-block" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Choix</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
                  </div>
                  <div className="modal-body">
                    <p>Selectionner votre choix</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary">PDF</button>
                    <button type="button" className="btn btn-primary" onClick={handleChooseEmail}>EMAIL</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showModal2 && (
            <div className="modal show d-block" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Inserer Votre EMail</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
                  </div>
                  <div className="modal-body">
                    <input type="email" className="form-control mb-2" placeholder="adresse email" required />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                    <button type="button" className="btn btn-secondary">Envoyer</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddOrd;
