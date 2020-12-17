import React, {Fragment} from 'react';
import LogoOrdena from '../../elements/logo_ordena/logo';
import NavUser from '../../elements/footer_nav_user/nav_user';
import '../../styles.scss';

function page(props) {
  return (
    <Fragment>
      <div className="page_account">

        <header className = 'header_account'>
          <LogoOrdena/>
        </header>

        <div className ='container_account'>
        <h1>Account - poner los elementos de esta pagina aqui</h1>
        </div>


        <footer className = 'footer_account'>
          <NavUser/>
        </footer>

      </div>
    </Fragment>

  );
}

export default page;
