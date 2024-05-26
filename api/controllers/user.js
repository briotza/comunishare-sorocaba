// Controlador para criar um novo usuário
const createUser = async (req, res) => {
    const { nome, nascimento, email, celular, endereco, numero, bairro, senha } = req.body;

    // Verifica se todos os campos necessários estão presentes
    if (!nome || !nascimento || !email || !celular || !endereco || !numero || !bairro || !senha) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        const db = req.app.get('db');
        // Insere os dados do usuário no banco de dados
        await db.query('INSERT INTO usuarios (nome, nascimento, email, celular, endereco, numero, bairro, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nome, nascimento, email, celular, endereco, numero, bairro, senha]);

        return res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

module.exports = { createUser };
