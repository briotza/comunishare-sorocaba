const mysql = require('mysql2/promise'); 

// Configuração do Banco
const dbConfig = process.env.JAWSDB_URL 
    ? process.env.JAWSDB_URL 
    : {
        host: "localhost",
        user: "root",
        password: "",
        database: "comunishare"
    };

const connectToDatabase = async () => {
    try {
        const connection = process.env.JAWSDB_URL 
            ? await mysql.createConnection(process.env.JAWSDB_URL) 
            : await mysql.createConnection(dbConfig);
            
        console.log('Conexão com o banco de dados estabelecida!');
        return connection;
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1);
    }
};

module.exports = { connectToDatabase };
