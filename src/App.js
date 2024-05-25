import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/img/logo.png';
import Home from './pages/Home';
import SinglePage from './pages/SinglePage';

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

          <SinglePage/>
      
      </div>
        
      <footer class="footer mt-auto py-3">
      <div class="container">
        <span class="text-muted">© 2024. ComuniShare Sorocaba. Todos os direitos reservados.</span>
      </div>
    </footer>
    </div>
  );
}

export default App;
