import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Recherche.css';

const Recherche = ({ setActiveTab }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ordonnances, setOrdonnances] = useState([]);
  const [filteredOrdonnances, setFilteredOrdonnances] = useState([]);
  const [selectedOrdonnance, setSelectedOrdonnance] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const initialOrdonnances = [
      { id: 1, nomPatient: 'John Doe', poids: 75, startDate: '2024-07-01', endDate: '2024-07-10', nomMedicament: 'Paracetamol' },
      { id: 2, nomPatient: 'Jane Smith', poids: 65, startDate: '2024-07-05', endDate: '2024-07-15', nomMedicament: 'Ibuprofen' },
      { id: 3, nomPatient: 'Alice Johnson', poids: 55, startDate: '2024-07-03', endDate: '2024-07-12', nomMedicament: 'Aspirin' },
    ];
    setOrdonnances(initialOrdonnances);
    setFilteredOrdonnances(initialOrdonnances);
  }, []);

  const handleRetour = () => {
    setActiveTab('addOrd');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterOrdonnances(e.target.value);
  };

  const filterOrdonnances = (term) => {
    const filtered = ordonnances.filter(ordonnance =>
      ordonnance.nomPatient.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredOrdonnances(filtered);
  };

  const handleSelectOrdonnance = (ordonnance) => {
    setSelectedOrdonnance(ordonnance);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrdonnance(null);
  };

  const handleDeleteOrdonnance = (id) => {
    const updatedOrdonnances = ordonnances.filter(ord => ord.id !== id);
    setOrdonnances(updatedOrdonnances);
    setFilteredOrdonnances(updatedOrdonnances);
  };

  const handleUpdateOrdonnance = (updatedOrdonnance) => {
    const updatedOrdonnances = ordonnances.map(ord => 
      ord.id === updatedOrdonnance.id ? updatedOrdonnance : ord
    );
    setOrdonnances(updatedOrdonnances);
    setFilteredOrdonnances(updatedOrdonnances);
    handleCloseModal();
  };

  const handleFilterByDate = () => {
    const sortedByDate = [...filteredOrdonnances].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    setFilteredOrdonnances(sortedByDate);
  };

  const handleFilterByName = () => {
    const sortedByName = [...filteredOrdonnances].sort((a, b) => a.nomPatient.localeCompare(b.nomPatient));
    setFilteredOrdonnances(sortedByName);
  };

  return (
    <div className="container my-5">
      <button className="btn btn-secondary mb-3" onClick={handleRetour}>
        <i className="bi bi-arrow-left"></i> Retour
      </button>
      <div className="mb-3 input-group">
        <span className="input-group-text">
        </span>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Rechercher..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={handleFilterByDate}>Trier par Date</button>
        <button className="btn btn-primary" onClick={handleFilterByName}>Trier par Nom</button>
      </div>
      <div className="card custom-card">
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Nom Patient</th>
                <th>Poids</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrdonnances.map((ordonnance, index) => (
                <tr key={index}>
                  <td>{ordonnance.nomPatient}</td>
                  <td>{ordonnance.poids}</td>
                  <td>{new Date(ordonnance.startDate).toLocaleDateString()}</td>
                  <td>{new Date(ordonnance.endDate).toLocaleDateString()}</td>
                  <td>
                    <button 
                      className="btn btn-primary me-2" 
                      onClick={() => handleSelectOrdonnance(ordonnance)}
                    >
                      Modifier
                    </button>
                    <button 
                      className="btn btn-danger" 
                      onClick={() => handleDeleteOrdonnance(ordonnance.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedOrdonnance && (
        <div className={`modal ${showModal ? 'show d-block' : 'd-none'}`} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modifier l'Ordonnance</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => { e.preventDefault(); handleUpdateOrdonnance(selectedOrdonnance); }}>
                  <div className="mb-3">
                    <label className="form-label">Nom Patient</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={selectedOrdonnance.nomPatient} 
                      onChange={(e) => setSelectedOrdonnance({ ...selectedOrdonnance, nomPatient: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Poids</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      value={selectedOrdonnance.poids} 
                      onChange={(e) => setSelectedOrdonnance({ ...selectedOrdonnance, poids: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Nom Medicament</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={selectedOrdonnance.nomMedicament} 
                      onChange={(e) => setSelectedOrdonnance({ ...selectedOrdonnance, nomMedicament: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Start Date</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      value={selectedOrdonnance.startDate} 
                      onChange={(e) => setSelectedOrdonnance({ ...selectedOrdonnance, startDate: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">End Date</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      value={selectedOrdonnance.endDate} 
                      onChange={(e) => setSelectedOrdonnance({ ...selectedOrdonnance, endDate: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Enregistrer</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recherche;
