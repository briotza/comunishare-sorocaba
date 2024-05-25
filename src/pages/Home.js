import React, { useState, useEffect } from "react";
import Moca from "../assets/img/moca.jpeg";
import "../App.css";

function Home() {
  return (
    <div className="col-md-12 d-flex flex-row justify-content-center bg-info">
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
  );
}

export default Home;