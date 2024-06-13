import React, { useState, useEffect } from "react";
import Moca from "../assets/img/moca.jpeg";
import Foto from "../assets/img/no-pic.png";
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Importe useUser do contexto de usuário
import "../App.css";

function Home() {
  const { user } = useUser(); // Obtenha o usuário do contexto
  const navigate = useNavigate(); // Use useNavigate para redirecionar

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSignup = () => {
    // Verifique se o usuário está logado
    if (user) {
      // Se estiver logado, redirecione para a página de perfil
      navigate('/profile');
    } else {
      // Se não estiver logado, redirecione para a página de login
      navigate('/signin');
    }
  };
    
  return (
    <div>
      <div className="col-md-12 d-flex flex-row justify-content-center">
        <div className="col-md-4 intro">
          <div className="left d-flex flex-column justify-content-center ">
            <span className="d-block mb-2 h2">Se conecte com empresas e serviços.</span>
            <p className="mb-3">
              O ComuniShare é uma aplicativo de pesquisa e cadastro de empresas e
              serviços!
            </p>
            <button className="btn btn-primary" onClick={handleSignup}>CADASTRE-SE</button>
          </div>

        </div>
        <div className="col-md-4 right d-flex flex-column justify-content-center align-items-center">
          <img src={Moca} alt="Imagem exemplo" className="img-fluid" />
        </div>

      </div>

      <div className="col-md-12 d-flex flex-column align-items-center mt-5 pt-4 pb-4 search">
        <span className="d-block mb-4 h3">Pesquise por loja, serviço ou produto</span>
        <form className="w-100">
          <div className="input-group">
            <input type="text" className="form-control col-md-6" placeholder="Pesquisar..." />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">Filtros</button>
            </div>
          </div>
        </form>
      </div>

      <div className="col-md-12 d-flex flex-column align-items-center mt-5 recommendations">
        <span className="d-block mb-4 h2 pt-5">Lojas e serviços em alta</span>
        <div className="d-flex flex-column flex-sm-row mt-4">
          <Link to="/singlepage" className="d-flex flex-column recommendations-button">
            <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
            <span>Nome da Loja</span>
            <p>Categoria</p>
          </Link>
          <Link to="/singlepage" className="d-flex flex-column recommendations-button">
            <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
            <span>Nome da Loja</span>
            <p>Categoria</p>
          </Link>
          <Link to="/singlepage" className="d-flex flex-column recommendations-button">
            <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
            <span>Nome da Loja</span>
            <p>Categoria</p>
          </Link>
          <Link to="/singlepage" className="d-flex flex-column recommendations-button">
            <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
            <span>Nome da Loja</span>
            <p>Categoria</p>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Home;
