import React, {Fragment} from 'react';
import LogoOrdena from '../../elements/logo_ordena/logo';
import NavUser from '../../elements/footer_nav_user/nav_user';
import '../../styles.scss';

function page(props) {
  return (
    <Fragment>
      <div className="page_chat">

        <header className = 'header_chat'>
          <LogoOrdena/>
        </header>

        <div className ='container_chat'>
        <h1>Chat - poner los elementos de esta pagina aqui</h1>
        </div>


        <footer className = 'footer_chat'>
          <NavUser/>
        </footer>

      </div>
    </Fragment>

  );
}

export default page;
