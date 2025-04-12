const express = require('express');
const { register, login, logout, checkAuth } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get("/check-auth", checkAuth)

module.exports = router;
