import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => (
  <div className= 'container_account_list'>

    <div className='container_list'>

      <div>
        <Link to={'/account/myaccount'}>
          <p className='account_title'>Mi Cuenta</p>
        </Link>
      </div>

      <div>
        <Link to={'/account/favorites'}>
          <p className='account_title'>Favoritos</p>
        </Link>
      </div>

      <div>
        <Link to={'/account/payment-methods'}>
          <p className='account_title'>Formas de Pago</p>
        </Link>
      </div>

      <div>
        <Link to={'/account/discounts'}>
          <p className='account_title'>Descuentos</p>
        </Link>
      </div>

      <div>
        <Link to={'/account/setting'}>
          <p className='account_title'>Configuración</p>
        </Link>
      </div>

      <div>
        <Link to={'/account/help'}>
          <p className='account_title'>Ayuda</p>
        </Link>
      </div>

      <div>
        <Link to={'/account/suggestions'}>
          <p className='account_title'>Sugerencias</p>
        </Link>
      </div>

    </div>

  </div>
)

export default Account;
