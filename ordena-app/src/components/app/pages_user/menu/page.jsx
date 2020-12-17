import React, {Fragment} from 'react';
import LogoOrdena from '../../elements/logo_ordena/logo';
import NavUser from '../../elements/footer_nav_user/nav_user';
import '../../styles.scss';

function page(props) {
  return (
    <Fragment>
      <div className="page_menu">

        <header className = 'header_menu'>
          <LogoOrdena/>
        </header>

        <div className ='container_menu'>
        <h1>Menu - poner los elementos de esta pagina aqui</h1>
        </div>


        <footer className = 'footer_menu'>
          <NavUser/>
        </footer>

      </div>
    </Fragment>

  );
}

export default page;
