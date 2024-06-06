// Adicione isso no arquivo users.js
const express = require('express');
const router = express.Router();
const { createUser, loginUser, updateUserPassword } = require('../controllers/user');

// Rota para criar um novo usuário
router.post('/', createUser);

// Rota para fazer login
router.post('/login', loginUser);

// Rota para atualizar a senha do usuário
router.put('/updatepassword', updateUserPassword);


module.exports = router;
