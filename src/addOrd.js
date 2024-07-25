import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const AddOrd =({setActiveTab})=>{
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [medications, setMedications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [medicaments, setMedicaments] = useState({nom:'',type:'',dosage:'',periode:'',lv:false});

  // State variables for the additional information
  const [nomMedecin, setNomMedecin] = useState('Dr. Flen Ben Foulen');
  const [specialite, setSpecialite] = useState('Cardiologist');
  const [adresseCabinet, setAdresseCabinet] = useState('7000 Bizerte');

  // State variables for form inputs
  const [nomPatient, setNomPatient] = useState('');
  const [age, setAge] = useState('');
  const [poids, setPoids] = useState('');
  

  useEffect(() => {
    // Placeholder for fetching registration data for nomMedecin, specialite, and adresseCabinet
    // setNomMedecin(fetchedNomMedecin);
    // setSpecialite(fetchedSpecialite);
    // setAdresseCabinet(fetchedAdresseCabinet);
  }, []);

  const handleAddMedication = () => {
    if (medicaments.nom && medicaments.type && medicaments.dosage && medicaments.periode) {
      setMedications([...medications, medicaments]);
      setMedicaments({ nom: '', type: '', dosage: '',periode:'', lv: false });
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
  

return(
  <div className='container-fluid'>
    <div className='row justify-content-between mt-5'>
      <div className='col-4 '>
        <div className='me-5 ps-5'><h1 className='text-light'><i className="bi bi-prescription2 icon"></i>Ordonnance Digitale</h1>
        </div>
      </div>
      <div className='col-1 me-5 fa-lg'><div className="dropdown">
                <button
                  className="btn btn-parimary dropdown-toggle"
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
              </div></div>
    </div>
    <div className='row align-items-center'>
      <div className='col-6 mx-auto gy-5'>
        <div className='card h-100 rounded border justify-content-center p-5'>
          <div className='row justify-content-between '>
            <div className='col-3 px-5'><button className="btn btn-secondary" onClick={handleRetour}>
                <i className="bi bi-arrow-left"></i> Retour
              </button></div>
            <div className='col-4 px-5'><button className="btn btn-primary" onClick={handleSearchOrdonnance}>Rechercher Ordonnance</button></div>
          </div>
          <br></br><br></br><br></br><br></br>
          <div className='row justify-content-between ms-5'>
            <div className='col-5'><h5>{nomMedecin}</h5><h5>{specialite}</h5></div>
            <div className='col-2'><i className="bi bi-capsule custom-capsule-icon fa-3x"></i></div>
            <div className='col-5'><h6>Date Consultation: {new Date().toLocaleDateString()}</h6><h6>{adresseCabinet}</h6></div>
          </div>
          <br></br><br></br><br></br><br></br>
         <form className="custom-form" onSubmit={handleSubmit}>
          <div className='row justify-content-center'>
            <div className='col-6'><input
                  type="text"
                  className="form-control text-center"
                  placeholder='Nom Patient'
                  value={nomPatient}
                  onChange={(e) => setNomPatient(e.target.value)}
                /></div>
          </div>
          <br></br>
          <div className='row justify-content-center'>
          <div className='col-6'><input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Age"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                /></div>
            <div className='col-6'>
            <input
                  type="number"
                  className="form-control"
                  placeholder='Poids'
                  value={poids}
                  onChange={(e) => setPoids(e.target.value)}
                />
            </div>
          </div>
          <br></br><br></br>
          <div className='row justify-content-center'>
            <div className='col-3'><input
                    type="text"
                    className="form-control text-center"
                    placeholder='Nom Medicament'
                    value={medicaments.nom}
                    onChange={(e) => setMedicaments(prevState => ({ ...prevState, nom: e.target.value }))}
                  /></div>
            <div className='col-3'><input
                    type="text"
                    className="form-control text-center"
                    placeholder='Type'
                    value={medicaments.type}
                    onChange={(e) => setMedicaments(prevState => ({ ...prevState, type: e.target.value }))}
                  /></div>
            <div className='col-2'><input
                    type="text"
                    className="form-control text-center"
                    placeholder='Dosage'
                    value={medicaments.dosage}
                    onChange={(e) => setMedicaments(prevState => ({ ...prevState, dosage: e.target.value }))}
                  /></div>
            <div className='col-3'>
            <input
                    type="text"
                    className="form-control text-center"
                    placeholder='Periode'
                    value={medicaments.periode}
                    onChange={(e) => setMedicaments(prevState => ({ ...prevState, periode: e.target.value }))}
                  />
            </div>
            <div className='col-1'>
            <i
                    className="bi bi-check-square fa-lg"
                    onClick={handleAddMedication}
                    style={{ cursor: 'pointer' }}
                  ></i>
            </div>

          </div>
          {<div className="form-group row justify-content-center">
              {medications.length > 0 && (
                <div className="col-sm-12">
                  <h3>Liste des Médicaments</h3>
                  <ul className="list-group">
                    {medications.map((med, index) => (
                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                          Nom: {med.nom}, Type: {med.type}, Dosage: {med.dosage} Periode:{med.periode},
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
            </div>}
            <br></br><br></br>

            <div className='row justify-content-center'>
              <div className='col'><input
                    type="text-area"
                    className="form-control text-center"
                    placeholder='commentaires'
                    value={medicaments.commentaire}
                    onChange={(e) => setMedicaments(prevState => ({ ...prevState, commentaire: e.target.value }))}
                  /></div>
            </div>
            <br></br><br></br>
            <div className='row justify-content-between'>
              <div className='col-4 ms-5'><button type="reset" className="btn btn-primary">Réinitialiser</button></div>
              <div className='col-4'><button type="submit" className="btn btn-primary" disabled={!isFormValid()}>Soumettre</button></div>
            </div>
        </form>
          
          
        </div>
      </div>
    </div>
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
                    <button type="button" className="btn btn-primary">Envoyer</button>
                  </div>
                </div>
              </div>
            </div>
          )}
  </div>
  
  
)










}
export default AddOrd;