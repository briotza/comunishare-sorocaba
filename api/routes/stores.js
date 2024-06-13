const express = require('express');
const router = express.Router();
const { createStore, getStoresByUserId } = require('../controllers/store');

// Rota para criar loja
router.post('/store', createStore);

// Rota para buscar lojas por ID de usuário
router.get('/stores/:userId', getStoresByUserId);

module.exports = router;
