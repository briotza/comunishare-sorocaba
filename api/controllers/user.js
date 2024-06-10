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
    console.log('Requisição de login recebida:', { email, senha });

    try {
        const db = req.app.get('db');
        console.log('Conectando ao banco de dados...');

        // Verifica se o usuário com o email e senha fornecidos existe no banco de dados
        const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);
        console.log('Resultado da consulta:', rows);

        if (rows.length === 0) {
            console.log('Credenciais inválidas');
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const user = rows[0];
        console.log('Login bem-sucedido', user);

        return res.status(200).json({ message: 'Login bem-sucedido', user });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

// Adicione isso no arquivo user.js
const updateUserPassword = async (req, res) => {
    const { email, newPassword } = req.body;
    console.log('Recebido solicitação de atualização de senha para o email:', email);
    
    try {
        const db = req.app.get('db');
        console.log('Conectando ao banco de dados...');
  
        const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (rows.length === 0) {
            console.log('Email inválido');
            return res.status(401).json({ message: 'Email inválido' });
        } else {
            // Atualize a senha do usuário no banco de dados
            const [updateResult] = await db.query('UPDATE usuarios SET senha = ? WHERE email = ?', [newPassword, email]);
            console.log('Resultado da atualização:', updateResult); 

            if (updateResult.affectedRows === 0) {
                console.log('Erro ao atualizar a senha: nenhuma linha afetada');
                return res.status(500).json({ message: 'Erro ao atualizar a senha' });
            }

            console.log('Senha atualizada com sucesso');
            return res.status(200).json({ message: 'Senha atualizada com sucesso' });
        }
    } catch (error) {
        console.error('Erro ao atualizar a senha do usuário:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

  
const checkEmail = async (req, res) => {
    const { email } = req.body;
    try {
        const db = req.app.get('db');
        const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Email não encontrado' });
        }
        return res.status(200).json({ message: 'Email encontrado' });
    } catch (error) {
        console.error('Erro ao verificar email:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

const updateUserProfile = async (req, res) => {
    const { nome, nascimento, email, celular, endereco, numero, bairro, senha } = req.body;

    try {
        const db = req.app.get('db');
        
        // Atualize os dados do usuário no banco de dados
        await db.query('UPDATE usuarios SET nome = ?, nascimento = ?, celular = ?, endereco = ?, numero = ?, bairro = ?, senha = ? WHERE email = ?', 
            [nome, nascimento, celular, endereco, numero, bairro, senha, email]);

        // Obtenha o usuário atualizado
        const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        const updatedUser = rows[0];

        return res.status(200).json({ message: 'Usuário atualizado com sucesso', user: updatedUser });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

module.exports = { createUser, loginUser, updateUserPassword, checkEmail, updateUserProfile };


  