import React, { Fragment } from "react";
import NavAdmin from "../../elements/footer_nav_admin/nav_admin";
import LogoOrdena from "../../elements/logo_ordena/logo";
import AccountAdmin from "../../elements/account_admin_list/account_admin_list";
import OptionHeader from "../../elements/options_header_admin/options_header_admin";

function page(props) {
  return (
    <Fragment>
      <div className="page_account_admin">
        <header>
          <div className="header_account_admin">
            <LogoOrdena />
          </div>
          <div className="options_account_admin">
            <OptionHeader />
          </div>
        </header>
        <div className="container_account_admin">
          <AccountAdmin />
        </div>
        <div className="view_not_available">
          <p className="text_view_not_available">
            Aplicación móvil solo disponible desde smartphones o tablets
          </p>
        </div>

        <footer className="footer_account_admin">
          <NavAdmin />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
