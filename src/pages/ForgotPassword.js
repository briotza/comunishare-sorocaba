import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function ForgotPassword() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="d-flex flex-row justify-content-center page-login">
      <div className="col-md-4 intro">
        <div className="left d-flex flex-column justify-content-center ">
          <span className="d-block mb-4 h2">Esqueci a senha</span>
          <form >
            <div className="form-group mb-1">
              <label htmlFor="email">Um código foi enviado para seu e-mail de cadastro</label>
              <input
                type="codigo"
                className="form-control mt-2 mb-4"
                id="codigo"
                placeholder="Digite o código"
                required
              />
              <span>(Código: 1234)</span>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-5">
              Ok
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
