require('dotenv').config();
require('./data_base/mysql_connection');
const express = require('express');
const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const path = require('path');

// Creation of an express app
const app = express();

// POST routes
app.use(express.json());

// CORS security
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Routes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/posts', postsRoutes);
app.use('/api/auth', userRoutes);

// Express app export to use in server.js
module.exports = app;