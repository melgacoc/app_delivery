import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import CustomerOrders from './pages/CustomerOrders';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/customer/checkout" component={ CustomerCheckout } />
      <Route path="/customer/orders" component={ CustomerOrders } />
      <Route path="/customer/orders/:id" component={ CustomerOrderDetails } />
    </Switch>
  );
}

export default App;
