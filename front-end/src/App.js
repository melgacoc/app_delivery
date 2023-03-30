import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import LogIn from './pages/logIn';
import Register from './pages/register';
import Shopping from './pages/shopping';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route path="/login" component={ LogIn } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Shopping } />
    </Switch>
  );
}

export default App;
