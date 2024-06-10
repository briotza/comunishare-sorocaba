const express = require('express');
const router = express.Router();
const { createStore } = require('../controllers/store');

// Rota para criar loja
router.post('/store', createStore);

module.exports = router;
