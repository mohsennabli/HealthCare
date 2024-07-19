import React, { useState, useRef,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Login.css';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const Login = ({ setActiveTab }) => {
  const [role, setSelectedRole] = useState({libelle:''});
  const signInFormRef = useRef(null);
  const signUpFormRef = useRef(null);
  const [nom,setNom]=useState('');
  const [prenom,setPrenom]=useState('');
  const [email,setEmail]=useState('');
  const [telephone,setTelephone]=useState('');
  const [password,setPassword]=useState('');
  const [adresse,setAdresse]=useState('');
  const [copieCIN,setCopieCIN]=useState('');
  const [specialite,setSpecialite]=useState('');
  const [utilisateur,setUtilisateur]=useState([]);

  const handleRoleChange = (event) => {
    setSelectedRole({libelle : event.target.value});
  };


  const handleSignInSubmit = (event) => {
    event.preventDefault();
    const form = signInFormRef.current;

    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
    } else {
      setActiveTab('addOrd');
    }
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const form = signUpFormRef.current;

    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
    } else {
      setActiveTab('addOrd');
    }
  };

  const fetchDataSingIn = () => {
    fetch('http://localhost:8090/connexion')
        .then(res => res.json()
      )
        .catch(err => console.log(err));
  };

  const insertRowSignin = (e) => {
    e.preventDefault(); 
    fetch('http://localhost:8090/connexion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        authentificationDTO:{email:email,mdp:password},
        body: JSON.stringify({email,password }),
        
    })
    .then(() => fetchDataSingIn())
    .catch(err => console.log(err));
  };


  const fetchDataRefresh = () => {
    fetch('http://localhost:8090/refresh-token')
        .then(res => res.json()
      )
        .catch(err => console.log(err));
  };

  const insertRefresh = (e) => {
    e.preventDefault(); 
    fetch('http://localhost:8090/connexion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        authentificationDTO:{email:email,mdp:password},
        body: JSON.stringify({email,password }),
        
    })
    .then(() => fetchDataRefresh())
    .catch(err => console.log(err));
  };
  const fetchData = () => {
    fetch('http://localhost:8090/inscription')
        .then(res => res.json())
        .catch(err => console.log(err));
  };

  const insertRow = (e) => {
    e.preventDefault(); 
    fetch('http://localhost:8090/inscription', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        utilisateur:{nom:nom,prenom:prenom,email:email,numtel:parseInt(telephone),mdp:password,adresse:adresse,role:role},
        body: JSON.stringify({nom,prenom,email,telephone,password,adresse, role }),
    })
    .then(() => fetchData())
    .catch(err => console.log(err));
   
   
  };

  useEffect(() => {
    fetchData();
    fetchDataSingIn();
  }, []);

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
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image1} className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src={image3} className="d-block w-100" alt="Slide 3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <form ref={signInFormRef} className="sign-in-form needs-validation" onSubmit={handleSignInSubmit} noValidate>
            <h3 className="inscription-heading">Se connecter</h3>
            <input type="email" className="form-control mb-2" placeholder="adresse email" id="signInEmail" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <div className='invalid-feedback'>Veuillez insérer votre email</div>
            <input type="password" className="form-control mb-2" placeholder="Mot de passe" id="signInPassword"onChange={(e)=>setPassword(e.target.value)} value={password} required />
            <div className='invalid-feedback'>Veuillez insérer votre mot de passe</div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn" type="reset"  >Réinitialiser</button>
              <button className="btn" type="submit" onClick={insertRowSignin}>Soumettre</button>
            </div>
          </form>
        </div>
        <div className="col-md-6 mb-4 sign-up-form">
          <div className="icon-container">
            <i className="bi bi-person-plus icon-large"></i>
          </div>
          <h3 className="inscription-heading">Inscription</h3>
          <form ref={signUpFormRef} className="needs-validation" onSubmit={handleSignUpSubmit} noValidate>
            <div className="row">
              <div className="col-md-6 mb-2">
                <input type="text" className="form-control" placeholder="Nom" onChange={(e)=>setNom(e.target.value)} value={nom} required />
                <div className='invalid-feedback'>Veuillez insérer votre nom</div>
              </div>
              <div className="col-md-6 mb-2">
                <input type="text" className="form-control" placeholder="Prénom" value={prenom} onChange={(e)=>setPrenom(e.target.value)} required />
                <div className='invalid-feedback'>Veuillez insérer votre prénom</div>
              </div>
            </div>
            <input type="email" className="form-control mb-2" placeholder="adresse email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <div className='invalid-feedback'>Veuillez insérer votre adresse email</div>
            <div className="row">
            <input type="text" className="form-control" placeholder="Num Telephone" value={telephone} onChange={(e)=>setTelephone(e.target.value)} required pattern="\d{8}" />
            <div className='invalid-feedback'>Veuillez insérer un numéro de téléphone valide (8 chiffres)</div>
            <div className="col-md-6 mb-2">
                <input type="text" className="form-control" placeholder="Num CIN" value={copieCIN} onChange={(e)=>setCopieCIN(e.target.value)} required pattern="\d{8}" />
                <div className='invalid-feedback'>Veuillez insérer un numéro de CIN valide (8 chiffres)</div>
              </div>
            </div>
            <input type="password" className="form-control mb-2" placeholder="Mot de passe" onChange={(e)=>setPassword(e.target.value)} value={password} required />
            <div className='invalid-feedback'>Veuillez insérer votre mot de passe</div>
            <p className="mb-2">Use at least one letter, one numeral, and seven characters.</p>
            <input type="text" className="form-control mb-2" placeholder="Adresse cabinet ou pharmacie" value={adresse} onChange={(e)=>setAdresse(e.target.value)} required />
            <div className='invalid-feedback'>Veuillez insérer votre adresse de cabinet ou pharmacie</div>
            <div className="row">
              <div className="col-md-6 mb-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    value="MEDECIN"
                    onChange={handleRoleChange}
                    id="medecin"
                    required />
                  <label className="form-check-label" htmlFor="medecin">
                    Médecin
                  </label>
                  <div className='invalid-feedback'>Veuillez sélectionner un rôle</div>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    value="PHARMACIEN"
                    onChange={handleRoleChange}
                    id="pharmacien"
                    required />
                  <label className="form-check-label" htmlFor="pharmacien">
                    Pharmacien
                  </label>
                  <div className='invalid-feedback'>Veuillez sélectionner un rôle</div>
                </div>
              </div>
            </div>
            {role.libelle === 'MEDECIN' && (
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Si vous êtes un médecin, entrez votre spécialité"
                required
                
              />
            )}
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-outline-secondary bi bi-qr-code-scan" type="button"> Scanner votre CIN</button>
              <button className="btn btn-outline-secondary bi bi-person-vcard" type="button"> Scanner votre carte</button>
            </div>
            <div className='d-grid gap-2'>
              <button className="btn" type='submit' onClick={insertRow}>S'inscrire</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
