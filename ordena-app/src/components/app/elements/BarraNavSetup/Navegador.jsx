import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import menu1 from '../../../../assets/images/menu1.svg';
import menu2 from '../../../../assets/images/menu2.svg';
import menu3 from '../../../../assets/images/menu3.svg';
import menu4 from '../../../../assets/images/menu4.svg';
import menu5 from '../../../../assets/images/menu5.svg';

const Navegador = ({navegador,cambiarMenu}) => (

    <body>
    <hr className='separador'/>
      <nav className= 'nav'>

        <div>
          <Link to={'/Home'}>
            <button className='Boton1' id="B1">
              <img src={menu1} className="menu1logo" alt="logo1" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/Menu'}>
            <button className='Boton2' id="B2">
              <img src={menu2} className="menu2logo" alt="logo2" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/Chat'}>
            <button className='Boton3' id="B3">
              <img src={menu3} className="menu3logo" alt="logo3" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/Pago'}>
            <button className='Boton4' id="B4">
              <img src={menu4} className="menu4logo" alt="logo4" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/Cuenta'}>
            <button className='Boton5' id="B5">
              <img src={menu5} className="menu5logo" alt="logo5" />
            </button>
          </Link>
        </div>

      </nav>
    </body>
  )

  const mapStateToProps = state => ({
        navegador: state.navegador
  })

  const mapDispatchToProps = dispatch => ({
    cambiarMenu(navegador) {
      dispatch({
        type: 'CambiarMenu',
        navegador
      })
    }
  })

  export default connect(mapStateToProps,mapStateToProps)(Navegador)
