import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/img/logo.png';
import Home from './pages/Home';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container-fluid page-container p-0">
      <div className="row m-0">
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
           <button>Procurar</button>
           <button>Sobre</button>
           <button>Login</button>
         </div>
        )}

          <Home/>
      
      </div>
        
      
    </div>
  );
}

export default App;
