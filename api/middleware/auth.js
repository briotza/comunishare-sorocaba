// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token, 'seu_segredo'); // Substitua 'seu_segredo' pelo seu segredo
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

module.exports = { authenticateUser };
