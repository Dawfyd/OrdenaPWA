import React, { Fragment } from "react";
import NavService from "../../elements/footer_nav_service/nav_service";
import AccountService from "../../elements/account_service_list/account_service_list";
import LogoOrdena from "../../elements/logo_ordena/logo";

function page(props) {
  return (
    <Fragment>
      <div className="page_account_services">
        <header className="header_account_service">
          <LogoOrdena />
        </header>

        <div className="container_account_service">
          <AccountService />
        </div>

        <footer className="footer_account_service">
          <NavService />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
