import React, { useState, useEffect } from "react";
import Moca from "../assets/img/moca.jpeg";
import "../App.css";

function Home() {
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
            <button className="btn btn-primary">CADASTRE-SE</button>
          </div>

        </div>
        <div className="col-md-4 right d-flex flex-column justify-content-center align-items-center">
          <img src={Moca} alt="Imagem exemplo" className="img-fluid" />
        </div>

      </div>

      <div className="col-md-12 d-flex flex-column align-items-center mt-5 pt-4 search">
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
    </div>



  );
}

export default Home;