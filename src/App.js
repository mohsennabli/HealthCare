import React from 'react';
import Login from './Login';
import AddOrd from './addOrd';
import { useState } from 'react';
import Profile from './Profile'
import Recherche from './Recherche'


function App() {
  const [activeTab, setActiveTab] = useState('login');

    if (activeTab === 'addOrd') {
      return <AddOrd setActiveTab={setActiveTab}/>;
    }
    if(activeTab==='Profile'){
      return <Profile setActiveTab={setActiveTab}/>;
    }
    if(activeTab==='Recherche'){
        return <Recherche setActiveTab={setActiveTab}/>;
    }
    return <Login setActiveTab={setActiveTab} />;
  };

export default App;
