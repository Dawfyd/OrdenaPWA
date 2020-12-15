import logo from '../../assets/images/LogoOrdena.svg';
import menu1 from '../../assets/images/menu1.svg';
import menu2 from '../../assets/images/menu2.svg';
import menu3 from '../../assets/images/menu3.svg';
import menu4 from '../../assets/images/menu4.svg';
import menu5 from '../../assets/images/menu5.svg';
import './styles.scss';

function App() {
  return (

    <div className="styles">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>

      <body>
      <hr className='separador'/>
      <nav className= 'nav'>

        <div>

          <button className='Boton1' id="B1">
            <img src={menu1} className="menu1logo" alt="logo1" />
          </button>
        </div>

        <div>
          <button className='Boton2' id="B2">
            <img src={menu2} className="menu2logo" alt="logo2" />
          </button>
        </div>

        <div>
          <button className='Boton3' id="B3">
            <img src={menu3} className="menu3logo" alt="logo3" />
          </button>
        </div>

        <div>
          <button className='Boton4' id="B4">
            <img src={menu4} className="menu4logo" alt="logo4" />
          </button>
        </div>

        <div>
          <button className='Boton5' id="B5">
            <img src={menu5} className="menu5logo" alt="logo5" />
          </button>
        </div>

      </nav>
      </body>
  </div>






  );
}

export default App;
