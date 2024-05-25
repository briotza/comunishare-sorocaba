import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {

    return (
        <div className='d-flex flex-row justify-content-center page-signup'>
            <div className="col-md-8 intro">
                <div className="left d-flex flex-column justify-content-center ">
                    <span className="d-block mb-4 h2">Cadastro</span>
                    <form className='col-md-12 d-flex flex-column flex-sm-row'>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className="form-control mt-2 mb-4" id="nome" placeholder="Digite seu nome" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nascimento">Nascimento</label>
                            <input type="date" className="form-control mt-2 mb-4" id="nascimento" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control mt-2 mb-4" id="email" placeholder="Digite seu email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="celular">Celular</label>
                            <input type="text" className="form-control mt-2 mb-4" id="celular" placeholder="Digite seu celular" />
                        </div>
                        </form>

                        <form className='col-md-12 d-flex flex-column flex-sm-row'>
                        <div className="form-group">
                            <label htmlFor="endereco">Endereço</label>
                            <input type="text" className="form-control mt-2 mb-4" id="endereco" placeholder="Digite seu endereço" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numero">Número</label>
                            <input type="number" className="form-control mt-2 mb-4" id="numero" placeholder="Digite o número da casa" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numero">Bairro</label>
                            <input type="text" className="form-control mt-2 mb-4" id="bairro" placeholder="Digite o bairro" />
                        </div>
                        </form>
                        <form className='col-md-12 d-flex flex-column flex-sm-row'>
                        <div className="form-group">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" className="form-control mt-2 mb-4" id="senha" placeholder="Digite a senha" />
                        </div>
                        
                        </form>

                        <Link to="/" className="btn-signup"><button type='submit' className="btn btn-primary mt-3 mb-5">Cadastrar</button></Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;