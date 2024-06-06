import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import "../App.css";

function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put('http://localhost:8800/usuarios/updatepassword', { email, newPassword });
      if (response.status === 200) {
        navigate("/signin");
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Erro ao enviar nova senha:', error);
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
              <label htmlFor="newPassword">Defina uma nova senha:</label>
              <input
                type="password"
                className="form-control mt-2 mb-4"
                id="newPassword"
                value={newPassword}
                onChange={handlePasswordChange}
                placeholder="Nova senha"
                required
              />
            </div>
            {error && <span className="text-danger">Erro ao atualizar a senha</span>}
            <button type="submit" className="btn btn-primary mt-3 mb-5">Ok</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
