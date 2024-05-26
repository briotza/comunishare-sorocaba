const mysql = require('mysql2/promise'); 

// Configuração do Banco
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "admin",
    database: "comunishare"
};

const connectToDatabase = async () => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Conexão com o banco de dados estabelecida!');
        return connection;
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1);
    }
};

module.exports = { connectToDatabase };
