import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { useUser } from './UserContext'; 

function NewStore() {
    const { user } = useUser();
    const [formData, setFormData] = useState({
      nome: '',
      categoria: '',
      email: '',
      telefone: '',
      endereco: '',
      numero: '',
      bairro: '',
      id_usuario: user && user.id ? user.id : ''
  });
  

    useEffect(() => {
        if (user && user.id) {
            setFormData(prevState => ({ ...prevState, id_usuario: user.id }));
        }
    }, [user]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!user || !user.id) {
            console.error('ID do usuário não encontrado ao criar loja');
            return;
        }

        console.log('Dados do formulário antes de enviar:', formData);
    
        try {
            const response = await axios.post('http://localhost:8800/loja/store', formData);
    
            if (response.status === 201) {
                alert('Loja criada com sucesso!');
                console.log('Dados da loja cadastrada:', formData);
                navigate('/profile'); 
            }
        } catch (error) {
            console.error('Erro ao criar loja:', error.response ? error.response.data : error.message);
            alert('Erro ao criar loja');
            console.log('Dados da loja enviados:', formData);
        }
    };

    return (
        <div className='d-flex flex-row justify-content-center page-signup'>
            <div className="col-md-8 intro">
                <div className="left d-flex flex-column justify-content-center ">
                    <span className="d-block mb-4 h2">Criar Loja</span>
                    <form className='col-md-12' onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" className="form-control mt-2 mb-4" id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Digite seu nome" required />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="nascimento">Categoria</label>
                                <input type="text" className="form-control mt-2 mb-4" id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} placeholder="Digite a categoria" required/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control mt-2 mb-4" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Digite seu email" required/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="celular">Telefone</label>
                                <input type="text" className="form-control mt-2 mb-4" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Digite seu celular" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <label htmlFor="endereco">Endereço</label>
                                <input type="text" className="form-control mt-2 mb-4" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Digite seu endereço" required/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="numero">Número</label>
                                <input type="number" className="form-control mt-2 mb-4" id="numero" name="numero" value={formData.numero} onChange={handleChange} placeholder="Digite o número da casa" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <label htmlFor="bairro">Bairro</label>
                                <input type="text" className="form-control mt-2 mb-4" id="bairro" name="bairro" value={formData.bairro} onChange={handleChange} placeholder="Digite o bairro" required/>
                            </div>
                        </div>
                        <button type='submit' className="btn btn-primary mt-3 mb-5">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewStore;
