const express = require('express');
const usersRoutes = require('./routes/UsersRoutes');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/users', usersRoutes);

module.exports = app;
