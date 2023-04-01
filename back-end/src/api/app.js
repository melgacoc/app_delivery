const express = require('express');
const cors = require('cors');
const productsRoutes = require('./routes/ProductsRoutes');
const usersRoutes = require('./routes/UsersRoutes');
const salesRoutes = require('./routes/SalesRoutes');
const auth = require('./middlewares/auth');

const app = express();
app.use(express.json());
app.use(cors());

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

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/sales', auth, salesRoutes);

module.exports = app;
