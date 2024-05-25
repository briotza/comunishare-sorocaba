import React, { useState, useEffect } from "react";
import Foto from "../assets/img/no-pic.png";
import Social from "../assets/img/social.png"
import "../App.css";

function SinglePage() {


    return (
        <div>
            <div className="col-md-12 d-flex flex-row justify-content-center">
                <div className="col-md-4 intro">
                    <div className="left d-flex flex-column justify-content-center ">
                        <span className="d-block mb-2 h2">Nome da loja</span>
                        <p className="mt-0">CATEGORIA</p>
                        <p className="mt-1">
                            Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                        <p className="mt-2"><b>Endereço: </b>Lorem ipsum dolor sit amet</p>
                        <p className="mt-0"><b>Telefone: </b>(ddd) 99999-9999</p>
                        <img src={Social} alt="Imagem exemplo" className="img-fluid media" />
                    </div>

                </div>
                <div className="col-md-4 right d-flex flex-column justify-content-center align-items-center">
                    <img src={Foto} alt="Imagem exemplo" className="img-fluid mt-5" />
                </div>

            </div>

            <div className="col-md-12 d-flex flex-column align-items-center mt-5 pt-4 pb-4 search">
                <span className="d-block mb-4 h2 pt-4">Nossos produtos e serviços</span>
                <span className="d-block mt-4 mb-4 h4">Pesquise por algo específico:</span>
                <form className="w-100">
                    <div className="input-group">
                        <input type="text" className="form-control col-md-6" placeholder="Pesquisar..." />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Pesquisar</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="col-md-12 d-flex flex-column align-items-center mt-5 recommendations">
                <div className="d-flex flex-column flex-sm-row mt-4">
                    <button className="d-flex flex-column">
                        <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
                        <span>produto/serviço</span>
                        <p>R$ 999,99</p>
                    </button>
                    <button className="d-flex flex-column">
                        <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
                        <span>produto/serviço</span>
                        <p>R$ 999,99</p>
                    </button>
                    <button className="d-flex flex-column">
                        <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
                        <span>produto/serviço</span>
                        <p>R$ 999,99</p>
                    </button>

                </div>
                <div className="d-flex flex-column flex-sm-row mt-4">
                    <button className="d-flex flex-column">
                        <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
                        <span>produto/serviço</span>
                        <p>R$ 999,99</p>
                    </button>
                    <button className="d-flex flex-column">
                        <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
                        <span>produto/serviço</span>
                        <p>R$ 999,99</p>
                    </button>
                    <button className="d-flex flex-column">
                        <img src={Foto} alt="Imagem exemplo" className="img-fluid mb-2" />
                        <span>produto/serviço</span>
                        <p>R$ 999,99</p>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default SinglePage;