import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function NewStore() {
    const [formData, setFormData] = useState({
        nome: '',
        nascimento: '',
        email: '',
        celular: '',
        endereco: '',
        numero: '',
        bairro: '',
        senha: ''
    });

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
        for (const key in formData) {
            if (formData.hasOwnProperty(key) && typeof formData[key] === 'string' && formData[key].trim() === '') {
                alert(`O campo ${key} é obrigatório`);
                return;
            }
        }
        try {
            const response = await axios.post('http://localhost:8800/usuarios', formData);
    
            if (response.status === 201) {
                alert('Usuário criado com sucesso!');
                setFormData({
                    nome: '',
                    nascimento: '',
                    email: '',
                    celular: '',
                    endereco: '',
                    numero: '',
                    bairro: '',
                    senha: ''
                });
                navigate('/signin');
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                alert('Este email já está cadastrado');
            } else {
                console.error('Erro ao enviar solicitação:', error);
                alert('Erro ao criar usuário');
            }
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
                <input type="text" className="form-control mt-2 mb-4" id="categoria" name="categoria" value={formData.nascimento} onChange={handleChange} placeholder="Digite a categoria" required/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control mt-2 mb-4" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Digite seu email" required/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="celular">Telefone</label>
                <input type="text" className="form-control mt-2 mb-4" id="telefone" name="telefone" value={formData.celular} onChange={handleChange} placeholder="Digite seu celular" required/>
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