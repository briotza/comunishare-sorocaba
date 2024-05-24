import React, { useState, useEffect } from "react";
import Cinza from "../assets/img/cinza.jpg";
import "../App.css";

function Home() {
    return (
        <div className="container-fluid page-container pt-5"> {/* Adiciona padding superior */}
          <div className="row">
            <div className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-center intro">
              <div className="col-12 col-md-6 left mb-4 mb-md-0 text-md-left">
                <span className="d-block mb-2 h2">Se conecte com empresas e serviços.</span> {/* Tamanho da fonte ajustado */}
                <p className="mb-3">
                  O ComuniShare é uma aplicativo de pesquisa e cadastro de empresas e
                  serviços!
                </p>
                <button className="btn btn-primary">CADASTRE-SE</button>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center align-items-center right">
                <img src={Cinza} alt="Imagem exemplo" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Home;