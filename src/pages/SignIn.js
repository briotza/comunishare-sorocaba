import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8800/login', { email, password });
    
            if (response.status === 200) {
                // Login bem-sucedido, redirecionar para a página inicial
                history('/');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Credenciais inválidas');
            } else {
                console.error('Erro ao fazer login:', error);
                alert('Erro ao fazer login');
            }
        }
    };
    
    return (
        <div className='d-flex flex-row justify-content-center page-login'>
            <div className="col-md-4 intro">
                <div className="left d-flex flex-column justify-content-center ">
                    <span className="d-block mb-4 h2">Bem-vindo</span>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control mt-2 mb-4" id="email" value={email} onChange={handleChangeEmail} placeholder="Digite seu email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input type="password" className="form-control mt-2 mb-4" id="password" value={password} onChange={handleChangePassword} placeholder="Digite sua senha" required />
                            <span>Não possui uma conta? <Link to="/signup">Cadastre-se</Link></span>
                        </div>
                        <button type='submit' className="btn btn-primary mt-3 mb-5">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
