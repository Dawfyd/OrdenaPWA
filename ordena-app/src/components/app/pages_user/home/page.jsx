import React, {Fragment} from 'react';
import LogoOrdena from '../../elements/logo_ordena/logo';
import NavUser from '../../elements/footer_nav_user/nav_user';
import '../../styles.scss';

function page(props) {
  return (
    <Fragment>
      <div className="page_home">

        <header className = 'header_home'>
          <LogoOrdena/>
        </header>

        <div className ='container_home'>
        <h1>Home - poner los elementos de esta pagina aqui</h1>
        </div>


        <footer className = 'footer_home'>
          <NavUser/>
        </footer>

      </div>
    </Fragment>

  );
}

export default page;
