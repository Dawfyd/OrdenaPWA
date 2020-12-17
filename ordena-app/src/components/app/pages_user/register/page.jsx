import React, {Fragment} from 'react';
import Register from '../../elements/register/register';
import Login from '../../elements/login/login';
import LogoOrdena from '../../elements/logo_ordena/logo';
import NavUser from '../../elements/footer_nav_user/nav_user';
import '../../styles.scss';

function page(props) {
  return (
    <Fragment>
      <div className="page_register">

        <header className = 'header_register'>
          <LogoOrdena/>
        </header>

        <div>
          <Register/>
        </div>

        <div className='login_register'>
          <Login/>
        </div>


        <footer className = 'footer_register'>
          <NavUser/>
        </footer>

      </div>
    </Fragment>

  );
}

export default page;
