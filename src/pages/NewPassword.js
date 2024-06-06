import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../App.css";

function NewPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Função handleSubmit chamada');
    console.log('Enviando nova senha:', { email, newPassword }); // Verificação dos dados

    try {
        const response = await axios.put('http://localhost:8800/usuarios/updatepassword', { email, newPassword }); // Verificar a URL correta
        console.log('Resposta do servidor:', response);

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
          <form>
            <div className="form-group mb-1">
              <label htmlFor="email">Insira seu email</label>
              <input
                type="text"
                className="form-control mt-2 mb-4"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Seu email de cadastro"
                required
              />
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
            <button type="submit" className="btn btn-primary mt-3 mb-5" onClick={handleSubmit}>Ok</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
