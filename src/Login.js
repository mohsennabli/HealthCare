import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Login.css';

const Login = ({ setActiveTab }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [validatedSignIn, setValidatedSignIn] = useState(false);
  const [validatedSignUp, setValidatedSignUp] = useState(false);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handleSignInSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedSignIn(true);
    setActiveTab('addOrd');
  };
  const handleSignUpSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedSignUp(true);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any login logic here if needed
    setActiveTab('addOrd');  };


  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-12 login-header">
          <i className="bi bi-prescription2 icon"></i>
          <h1>Ordonnance Digitale</h1>
        </div>
      </div>
      <div className="row login-forms">
        <div className="col-md-6 mb-4">
          <div className="nv-article mb-4">
            <h2>Nouveau article en domaine médical</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              <p>do enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <form className="sign-in-form needs-validation" noValidate validated={validatedSignIn.toString()}>
            <h3 className="inscription-heading" >Se connecter</h3>
            <input type="email" className="form-control mb-2" placeholder="adresse email" id="signInEmail" required/>
            <div className="invalid-feedback">
                Veuillez entrer une adresse email valide.
              </div>
            <input type="password" className="form-control mb-2" placeholder="Mot de passe" id="signInPassword" required />
            <div className="invalid-feedback">
                Veuillez entrer votre mot de passe.
              </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn">Reinitialiser</button>
              <button className="btn" type='button' onClick={handleSignInSubmit}>Soumettre</button>
            </div>
          </form>
        </div>
        <div className="col-md-6 mb-4 sign-up-form">
        <div className="icon-container">
          <i className="bi bi-person-plus icon-large"></i>
        </div>          
          <h3 className="inscription-heading">Inscription</h3>
          <div className="row">
        <div className="col-md-6 mb-2">
            <input type="text" className="form-control" placeholder="Nom"required />
        </div>
        <div className="col-md-6 mb-2">
            <input type="text" className="form-control" placeholder="Prénom" required/>
        </div>
      </div>
          <input type="email" className="form-control mb-2" placeholder="adresse email" required/>
          <input type="tel" className="form-control mb-2" placeholder="Num téléphone" required/>
          <input type="password" className="form-control mb-2" placeholder="Mot de passe" required/>
          <p className="mb-2">Use at least one letter, one numeral, and seven characters.</p>
          <input type="text" className="form-control mb-2" placeholder="Adresse cabinet ou pharmacie"required />
          <div className="row">
  <div className="col-md-6 mb-2">
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="role"
        value="Médecin"
        onChange={handleRoleChange}
        id="medecin"
        required/>
      <label className="form-check-label" htmlFor="medecin">
        Médecin
      </label>
    </div>
  </div>
  <div className="col-md-6 mb-2">
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="role"
        value="Pharmacien"
        onChange={handleRoleChange}
        id="pharmacien"
        required/>
      <label className="form-check-label" htmlFor="pharmacien">
        Pharmacien
      </label>
    </div>
  </div>
</div>
          {selectedRole === 'Médecin' && (
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Si tu est un médecin entrer votre spécialité"
            />
          )}
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-outline-secondary bi bi-qr-code-scan"> Scanner votre CIN</button>
            <button className="btn btn-outline-secondary bi bi-person-vcard"> Scanner votre carte</button>
          </div>
          <div className='d-grid gap-2'>
            <button className="btn" type='button' onClick={handleSubmit}>S'inscrire</button>
            
          </div>
        </div>
      </div>
    </div>
  );  
}

export default Login;
