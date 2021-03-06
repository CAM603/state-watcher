import React from 'react';
import { Route } from 'react-router-dom';

import Onboarding from './components/Onboarding';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/Dashboard';
import States from './components/States';
import State from './components/State';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Onboarding}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" render={props => <Login {...props}/>}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/states" component={States} />
      <PrivateRoute path="/states/:id" component={State} />
    </div>
  );
}

export default App;
