import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import logo from './assets/img/logo.png';

//Páginas
import Home from './pages/Home.js';
import SinglePage from './pages/SinglePage.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import ItemPage from './pages/ItemPage.js';
import ForgotPassword from './pages/ForgotPassword.js'

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <BrowserRouter>
    <div className="container-fluid page-container p-0">
      <div className="row m-0">
      <nav className="navbar navbar-light nav-bar">
          <Link to="/"><img src={logo} alt='logo-comunishare' className='logo'/></Link>
          <div className="d-none d-md-block botoes-nav">
            <button>Procurar</button>
            <button>Sobre</button>
            <button><Link to='/signin' className="link-login">Login</Link></button>
          </div>
          <button className="navbar-toggler d-md-none nav-btn" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>

        {showMenu && (
           <div className='col-md-12 text-center d-md-none d-flex flex-column align-items-center hidden-nav'>
           <button>Procurar</button>
           <button>Sobre</button>
           <button><Link to='/signin' className="link-login m-auto">Login</Link></button>
         </div>
        )}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="singlepage" element={<SinglePage />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="item" element={<ItemPage />} />
            <Route path="password" element={<ForgotPassword/>} />
          </Routes>
      
      </div>
        
      <footer class="footer mt-auto py-3">
      <div class="container">
        <span class="text-muted">© 2024. ComuniShare Sorocaba. Todos os direitos reservados.</span>
      </div>
    </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
