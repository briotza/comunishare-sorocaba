const createStore = async (req, res) => {
    try {
        const { nome, categoria, email, telefone, endereco, numero, bairro, id_usuario } = req.body;

        console.log('Recebida solicitação para criar loja:', req.body);
        console.log('ID do usuário ao criar loja:', id_usuario);

        if (!nome || !categoria || !email || !telefone || !endereco || !numero || !bairro || !id_usuario) {
            console.log('Campos obrigatórios ausentes:', req.body);
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        const db = req.app.get('db');
        console.log('Conectando ao banco de dados...');

        await db.query('INSERT INTO loja (nome, categoria, email, telefone, endereco, numero, bairro, usuario_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
        [nome, categoria, email, telefone, endereco, numero, bairro, id_usuario]);

        console.log('Loja criada com sucesso:', nome);
        return res.status(201).json({ message: 'Loja criada com sucesso' });
    } catch (error) {
        console.error('Erro ao criar loja:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

module.exports = { createStore };
