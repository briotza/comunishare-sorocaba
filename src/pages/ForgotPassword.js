import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../App.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const [showCodigoDiv, setShowCodigoDiv] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/usuarios/checkemail', { email });
      if (response.status === 200) {
        setShowCodigoDiv(true);
        setError(false);
      }
    } catch (error) {
      setError(true);
    }
  };

  const handleCodigoSubmit = (event) => {
    event.preventDefault();
    if (codigo === "1234") {
      navigate("/newpassword", { state: { email } });
    } else {
      setError(true);
    }
  };

  return (
    <div className="d-flex flex-row justify-content-center page-login">
      <div className="col-md-4 intro">
        <div className="left d-flex flex-column justify-content-center">
          <span className="d-block mb-4 h2">Esqueci a senha</span>
          {!showCodigoDiv ? (
            <form onSubmit={handleEmailSubmit}>
              <div className="form-group mb-1">
                <label htmlFor="email">Insira seu email</label>
                <input
                  type="email"
                  className="form-control mt-2 mb-4"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Seu email de cadastro"
                  required
                />
                {error && <span className="text-danger">Email não encontrado</span>}
              </div>
              <button type="submit" className="btn btn-primary mt-3 mb-5">Enviar</button>
            </form>
          ) : (
            <form onSubmit={handleCodigoSubmit}>
              <div className="form-group mb-1">
                <label htmlFor="codigo">Um código foi enviado para seu e-mail de cadastro</label>
                <input
                  type="text"
                  className="form-control mt-2 mb-4"
                  id="codigo"
                  value={codigo}
                  onChange={handleCodigoChange}
                  placeholder="Digite o código"
                  required
                />
                <div className="d-flex flex-column">
                  {error && <span className="text-danger mb-2">(Código incorreto)</span>}
                  <span>(Código: 1234)</span>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-3 mb-5">Ok</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
