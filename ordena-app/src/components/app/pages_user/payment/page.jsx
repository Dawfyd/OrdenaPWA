import React, { Fragment } from "react";
import LogoOrdena from "../../elements/logo_ordena/logo";
import NavUser from "../../elements/footer_nav_user/nav_user";

function page(props) {
  return (
    <Fragment>
      <div className="page_payment">
        <header className="header_payment">
          <LogoOrdena />
        </header>

        <div className="container_payment">
          <h1>Payment - Proximamente!</h1>
        </div>

        <footer className="footer_payment">
          <NavUser />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
