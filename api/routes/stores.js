const express = require('express');
const router = express.Router();
const { createStore, getStoresByUserId, getStoreById } = require('../controllers/store');

// Rota para criar loja
router.post('/store', createStore);

// Rota para buscar lojas por ID de usuário
router.get('/stores/:userId', getStoresByUserId);

// Rota para buscar detalhes da loja por ID
router.get('/stores/:id', getStoreById); 

module.exports = router;
