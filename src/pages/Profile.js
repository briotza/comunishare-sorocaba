import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from './UserContext';
import { Link } from 'react-router-dom';

function Profile() {
    const { user, setUser } = useUser(); // Obtenha o usuário logado do contexto
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setNome(user.nome);
            setNascimento(formatDate(user.nascimento)); // Format the date
            setEmail(user.email);
            setCelular(user.celular);
            setEndereco(user.endereco);
            setNumero(user.numero);
            setBairro(user.bairro);
        }
    }, [user]);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:8800/usuarios/update', { nome, nascimento, email, celular, endereco, numero, bairro, senha });
            if (response.status === 200) {
                alert('Informações atualizadas com sucesso');
                setUser(response.data.user); // Atualiza o contexto do usuário
            }
        } catch (error) {
            alert('Erro ao atualizar informações');
        }
    };

    const handleLogout = () => {
        setUser(null); // Limpa o contexto do usuário
        navigate('/signin'); // Redireciona para a página de login
    };

    return (
        <div className='d-flex flex-row justify-content-center page-login'>
            <div className="col-md-8 intro">
                <div className="left d-flex flex-column justify-content-center ">
                    <span className="d-block mb-4 h2">Perfil</span>
                    <form className='col-md-12' onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" className="form-control mt-2 mb-4" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="nascimento">Nascimento</label>
                                <input type="date" className="form-control mt-2 mb-4" id="nascimento" name="nascimento" value={nascimento} onChange={(e) => setNascimento(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control mt-2 mb-4" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="celular">Celular</label>
                                <input type="text" className="form-control mt-2 mb-4" id="celular" name="celular" value={celular} onChange={(e) => setCelular(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="form-group col-md-4">
                                <label htmlFor="endereco">Endereço</label>
                                <input type="text" className="form-control mt-2 mb-4" id="endereco" name="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="numero">Número</label>
                                <input type="number" className="form-control mt-2 mb-4" id="numero" name="numero" value={numero} onChange={(e) => setNumero(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <label htmlFor="bairro">Bairro</label>
                                <input type="text" className="form-control mt-2 mb-4" id="bairro" name="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" className="form-control mt-2 mb-4" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                            </div>
                        </div>
                        <button type='submit' className="btn btn-primary mt-3 mb-3">Editar</button>
                        <button className="btn btn-primary mt-3 mb-3 btn-logout" onClick={handleLogout}>Sair</button>
                    </form>
                    <button className="btn btn-primary mt-3 mb-3"><Link to='/newstore' className="link-login">Criar Loja</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
