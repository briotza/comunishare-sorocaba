const createUser = async (req, res) => {
    const { nome, nascimento, email, celular, endereco, numero, bairro, senha } = req.body;

    // Verifica se todos os campos necessários estão presentes
    if (!nome || !nascimento || !email || !celular || !endereco || !numero || !bairro || !senha) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        const db = req.app.get('db');

        // Verifica se o email já está cadastrado
        const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(409).json({ message: 'Este email já está cadastrado' });
        }

        // Insere os dados do usuário no banco de dados
        await db.query('INSERT INTO usuarios (nome, nascimento, email, celular, endereco, numero, bairro, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nome, nascimento, email, celular, endereco, numero, bairro, senha]);

        return res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

const loginUser = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const db = req.app.get('db');

        // Verifica se o usuário com o email e senha fornecidos existe no banco de dados
        const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);
        if (rows.length === 0) {
            // Credenciais inválidas
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        // Login bem-sucedido
        return res.status(200).json({ message: 'Login bem-sucedido' });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

module.exports = { createUser, loginUser };


