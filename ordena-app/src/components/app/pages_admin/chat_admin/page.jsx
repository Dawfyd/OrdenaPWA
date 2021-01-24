import React, { Fragment } from "react";
import NavAdmin from "../../elements/footer_nav_admin/nav_admin";
import LogoOrdena from "../../elements/logo_ordena/logo";

function page(props) {
  return (
    <Fragment>
      <div className="page_chat_admin">
        <header className="header_chat_admin">
          <LogoOrdena />
        </header>

        <div className="container_chat_admin">
          <h1>Chat - Proximamente!</h1>
        </div>

        <footer className="footer_chat_admin">
          <NavAdmin />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
