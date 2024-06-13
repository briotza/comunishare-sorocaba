const createStore = async (req, res) => {
    try {
        const { nome, categoria, email, telefone, endereco, numero, bairro, id_usuario } = req.body;

        if (!nome || !categoria || !email || !telefone || !endereco || !numero || !bairro || !id_usuario) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        const db = req.app.get('db');

        await db.query('INSERT INTO loja (nome, categoria, email, telefone, endereco, numero, bairro, usuario_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
        [nome, categoria, email, telefone, endereco, numero, bairro, id_usuario]);

        return res.status(201).json({ message: 'Loja criada com sucesso' });
    } catch (error) {
        console.error('Erro ao criar loja:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

const getStoresByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;

        const db = req.app.get('db');
        const [rows] = await db.query('SELECT * FROM loja WHERE usuario_id = ?', [userId]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Nenhuma loja encontrada para este usuário' });
        }

        return res.status(200).json(rows);
    } catch (error) {
        console.error('Erro ao buscar lojas:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

const getStoreById = async (req, res) => {
    try {
        const storeId = req.params.id;

        const [rows] = await db.query('SELECT * FROM lojas WHERE id = ?', [storeId]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Loja não encontrada' });
        }

        return res.status(200).json(rows[0]); // Retorna apenas o primeiro resultado encontrado
    } catch (error) {
        console.error('Erro ao buscar detalhes da loja:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

module.exports = { createStore, getStoresByUserId, getStoreById };
