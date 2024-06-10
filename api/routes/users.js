const express = require('express');
const router = express.Router();
const { createUser, loginUser, updateUserPassword, checkEmail, updateUserProfile, createStore } = require('../controllers/user');

// Rota para criar um novo usuário
router.post('/', createUser);

// Rota para fazer login
router.post('/login', loginUser);

// Rota para atualizar a senha do usuário
router.put('/updatepassword', updateUserPassword);

// Rota para verificar email
router.post('/checkemail', checkEmail);

// Rota para atualizar perfil
router.put('/update', updateUserProfile);

module.exports = router;
