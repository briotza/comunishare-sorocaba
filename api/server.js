const express = require('express');
//const userRoutes = require("./routes/users");
const cors = require('cors');
const db = require('./db');

const app = express();

// Interpretar JSON
app.use(express.json());

// Habilitar CORS
app.use(cors());

// Rotas
//app.use('/usuarios', userRoutes);

// Iniciar servidor
const port = 8800;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
