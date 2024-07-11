import React from 'react';
import Login from './Login';
import AddOrd from './addOrd';
import { useState } from 'react';


function App() {
  const [activeTab, setActiveTab] = useState('login');

    if (activeTab === 'addOrd') {
      return <AddOrd setActiveTab={setActiveTab}/>;
    }
    return <Login setActiveTab={setActiveTab} />;
  };

export default App;
