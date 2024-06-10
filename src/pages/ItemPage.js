import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Foto from "../assets/img/no-pic.png";
import Social from "../assets/img/social.png";
import "../App.css";

function ItemPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <div className="d-flex flex-column mb-5">
        <div className="col-md-12 d-flex flex-row justify-content-center">
          <div className="col-md-4 intro mb-5">
            <div className="left d-flex flex-column justify-content-center mb-4 mt-5">
              <span className="d-block mb-2 h1">Produto/Serviço</span>
              <p className="mt-3 h4">R$ 999,99</p>
              <p className="mt-0">
                Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna.Descrição: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.Descrição: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.Descrição: Lorem ipsum dolor sit amet.
              </p>
              <p className="mt-0 h5">Avaliações: 4.3 ☆☆☆☆☆ (32)</p>
            </div>
          </div>
          <div className="col-md-4 right d-flex flex-column justify-content-center align-items-center">
            <img src={Foto} alt="Imagem exemplo" className="img-fluid mt-5" />
          </div>
        </div>
        
      </div>

      <div className="col-md-12 d-flex flex-column align-items-center mt-5 pt-4 pb-4 search">
        <span className="d-block mb-0 h2 pt-4">Nome da Loja</span>
      </div>

      <div className="col-md-12 d-flex flex-column align-items-center mt-3 pt-5 recommendations">
        <div className="d-flex flex-column flex-sm-row mt-4">
          <Link className="a" to="/item">
            <button className="d-flex flex-column btn-item">
              <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
              <span>produto/serviço</span>
              <p>R$ 999,99</p>
            </button>
          </Link>
          <Link className="a" to="/item">
            <button className="d-flex flex-column btn-item">
              <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
              <span>produto/serviço</span>
              <p>R$ 999,99</p>
            </button>
          </Link>
          <Link className="a" to="/item">
            <button className="d-flex flex-column btn-item">
              <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
              <span>produto/serviço</span>
              <p>R$ 999,99</p>
            </button>
          </Link>
        </div>
        <div className="d-flex flex-column flex-sm-row mt-4">
          <Link className="a" to="/item">
            <button className="d-flex flex-column btn-item">
              <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
              <span>produto/serviço</span>
              <p>R$ 999,99</p>
            </button>
          </Link>
          <Link className="a" to="/item">
            <button className="d-flex flex-column btn-item">
              <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
              <span>produto/serviço</span>
              <p>R$ 999,99</p>
            </button>
          </Link>
          <Link className="a" to="/item">
            <button className="d-flex flex-column btn-item">
              <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
              <span>produto/serviço</span>
              <p>R$ 999,99</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
