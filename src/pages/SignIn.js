import React, { useState, useEffect } from 'react';

function SignIn() {

    return (
        <div className='d-flex flex-row justify-content-center page-login'>
            <div className="col-md-4 intro">
                <div className="left d-flex flex-column justify-content-center ">
                    <span className="d-block mb-4 h2">Bem-vindo</span>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control mt-2 mb-4" id="email" placeholder="Digite seu email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input type="password" className="form-control mt-2 mb-4" id="password" placeholder="Digite sua senha" />
                            <span>Não possui uma conta? Cadastre-se</span>
                        </div>
                    </form>
                    <button type='submit' className="btn btn-primary mt-3 mb-5">Entrar</button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;