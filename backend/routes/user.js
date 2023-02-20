const express = require('express');
const userCtrl = require('../controllers/user');

const router = express.Router();

// Adds one user
router.post('/signup', userCtrl.signup);

// Gets one user credentials
router.post('/login', userCtrl.login);

module.exports = router;