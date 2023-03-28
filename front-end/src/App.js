import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import LogIn from './pages/logIn';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route path="/login" component={ LogIn } />
    </Switch>
  );
}

export default App;
