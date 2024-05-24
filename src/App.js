import './App.css';
import logo from './assets/img/logo.png';

function App() {
  return (
    <div className="container-fluid page-container">
      <div className="row">
      <nav className="navbar navbar-light nav-bar">
          <img src={logo} alt='logo-comunishare' className='logo'/>
          <div>
            <button>Procurar</button>
            <button>Sobre</button>
            <button>Login</button>
          </div>
          <button className="navbar-toggler d-md-none nav-btn" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
      <h1></h1>
    </div>
  );
}

export default App;
