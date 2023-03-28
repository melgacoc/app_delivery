import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Route, Switch } from 'react-router-dom';
import LogIn from './pages/logIn';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LogIn } />
    </Switch>
  );
}

export default App;
