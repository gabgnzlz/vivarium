import logo from '../imagenes/Logovivarium.svg';
import '../porter.css';
import '../App.css'

function Portada() {
  return (
    <div className="Portada">
      <header className="Portada-header">
      <nav>
          <ul className="Barra">
            <li>Sobre Nosotros</li>
            <li>Contacto</li>
          </ul>
        </nav>
        <img src={logo} className="Portada-logo" alt="logo" />
        
        <p className="Entradilla">
        Vivarium es un espacio donde vas a encontrar distintas especies con las que hacer match y ayudarles a equilibrar el ecosistema marino. Anímate a conocerlas y podrás tener un seguimiento personalizado.
        </p>
        <h2> Devuelve la vida a los océanos</h2>
        <a
          className="App-link"
          href="#formulario"
          target="_blank"
          rel="noopener noreferrer"
        >
          APADRINAR
        </a>
        
      </header>
    </div>
  );
}



export default Portada;
