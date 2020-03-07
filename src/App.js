import React from 'react';
import { Route } from 'react-router-dom';

import Onboarding from './components/Onboarding';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Onboarding}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
