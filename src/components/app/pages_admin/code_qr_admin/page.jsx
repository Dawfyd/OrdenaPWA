import React, { Fragment } from "react";
import NavAdmin from "../../elements/footer_nav_admin/nav_admin";
import LogoOrdena from "../../elements/logo_ordena/logo";

function page(props) {
  return (
    <Fragment>
      <div className="page_qr_admin">
        <header className="header_qr_admin">
          <LogoOrdena />
        </header>

        <div className="container_qr_admin">
          <h1>Codigo QR - Proximamente!</h1>
        </div>

        <footer className="footer_qr_admin">
          <NavAdmin />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
