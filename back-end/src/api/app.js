const express = require('express');
const productsRoutes = require('./routes/ProductsRoutes');
const usersRoutes = require('./routes/UsersRoutes');

const app = express();
app.use(express.json());

app.use(express.static('public'));
  
app.use((req, res, next) => {
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
  });
  next();
});

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

module.exports = app;
