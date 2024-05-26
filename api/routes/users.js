const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controllers/user');

// Rota para criar um novo usuário
router.post('/', createUser);

// Rota para fazer login
router.post('/login', loginUser);

module.exports = router;
