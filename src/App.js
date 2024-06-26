import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import logo from './assets/img/logo.png';
import { UserProvider, useUser } from './pages/UserContext.js'

// Páginas
import Home from './pages/Home.js';
import SinglePage from './pages/SinglePage.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import ItemPage from './pages/ItemPage.js';
import ForgotPassword from './pages/ForgotPassword.js'
import NewPassword from './pages/NewPassword.js';
import Profile from './pages/Profile.js';
import NewStore from './pages/NewStore.js';
import MyStore from './pages/MyStore.js';

function Navbar() {
  const { user } = useUser();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const getFirstName = (fullName) => {
    if (!fullName) return '';
    const firstName = fullName.split(' ')[0];
    return firstName;
  };

  return (
    <div className="row m-0 p-0">
      <nav className="navbar navbar-light nav-bar">
          <Link to="/"><img src={logo} alt='logo-comunishare' className='logo' /></Link>
          <div className="d-none d-md-block botoes-nav">
              <button>Procurar</button>
              <button>Sobre</button>
              {user ? (
                  <button><Link to='/profile' className="link-login">{getFirstName(user.nome)}</Link></button>
              ) : (
                  <button><Link to='/signin' className="link-login">Login</Link></button>
              )}
          </div>
          <button className="navbar-toggler d-md-none nav-btn" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
      </nav>
      {showMenu && (
           <div className='col-md-12 text-center d-md-none d-flex flex-column align-items-center hidden-nav'>
           <button>Procurar</button>
           <button>Sobre</button>
           {user ? (
                  <button><Link to='/profile' className="link-login">{getFirstName(user.nome)}</Link></button>
              ) : (
                  <button><Link to='/signin' className="link-login">Login</Link></button>
              )}
         </div>
        )}
      </div>
  );
}

function App() {
  return (
      <UserProvider>
          <BrowserRouter>
              <div className="container-fluid page-container p-0">
                  <div className="row m-0">
                      <Navbar />
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="singlepage" element={<SinglePage />} />
                          <Route path="signin" element={<SignIn />} />
                          <Route path="signup" element={<SignUp />} />
                          <Route path="item" element={<ItemPage />} />
                          <Route path="password" element={<ForgotPassword />} />
                          <Route path="newpassword" element={<NewPassword />} />
                          <Route path="profile" element={<Profile />} />
                          <Route path="newstore" element={<NewStore />} />
                          <Route path="mystore" element={<MyStore />} />
                      </Routes>
                  </div>
                  <footer className="footer mt-auto py-3">
                      <div className="container">
                          <span className="text-muted">© 2024. ComuniShare Sorocaba. Todos os direitos reservados.</span>
                      </div>
                  </footer>
              </div>
          </BrowserRouter>
      </UserProvider>
  );
}

export default App;