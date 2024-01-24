const express = require('express');
const app = express.Router();

//all routes
const authRoutes = require('./authenticator/routes')

app.use('/auth', authRoutes)

module.exports = app