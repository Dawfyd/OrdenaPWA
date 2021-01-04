import React, {Fragment} from 'react';
import NavAdmin from '../../elements/footer_nav_admin/nav_admin';
import LogoOrdena from '../../elements/logo_ordena/logo';
import AccountAdmin from '../../elements/account_admin_list/account_admin_list'
import '../../styles.scss';


function page(props) {
  return (
    <Fragment>
      <div className="page_account_admin">

      <header className = 'header_account_admin'>
        <LogoOrdena/>
      </header>

        <div className ='container_account_admin'>
        <AccountAdmin/>
        </div>

        <footer className = 'footer_account_admin'>
          <NavAdmin/>
        </footer>

      </div>
    </Fragment>

  );
}

export default page;
