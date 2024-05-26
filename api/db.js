const mysql = require('mysql2');

// Configuração do Banco
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "comunishare"
});

// Conectar ao banco
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexão com o banco de dados estabelecida!')
});

module.exports = { db };
