import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/img/logo.png';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container-fluid page-container">
      <div className="row">
      <nav className="navbar navbar-light nav-bar">
          <img src={logo} alt='logo-comunishare' className='logo'/>
          <div className="d-none d-md-block botoes-nav">
            <button>Procurar</button>
            <button>Sobre</button>
            <button>Login</button>
          </div>
          <button className="navbar-toggler d-md-none nav-btn" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>

        {showMenu && (
           <div className='col-md-12 text-center d-md-none d-flex flex-column align-items-center hidden-nav'>
           <button className="">Procurar</button>
           <button className="">Sobre</button>
           <button className="">Login</button>
         </div>
        )}

      </div>
      <h1></h1>
    </div>
  );
}

export default App;
