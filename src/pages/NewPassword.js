import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function NewPassword() {
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (codigo === "1234") {
      navigate("/newpassword");
    } else {
      setError(true);
    }
  };

  return (
    <div className="d-flex flex-row justify-content-center page-login">
      <div className="col-md-4 intro">
        <div className="left d-flex flex-column justify-content-center ">
          <span className="d-block mb-4 h2">Nova Senha</span>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-1">
              <label htmlFor="codigo">
                Defina uma nova senha:
              </label>
              <input
                type="text"
                className="form-control mt-2 mb-4"
                id="codigo"
                value={codigo}
                onChange={handleCodigoChange}
                placeholder="Nova senha"
                required
              />
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

export default NewPassword;
