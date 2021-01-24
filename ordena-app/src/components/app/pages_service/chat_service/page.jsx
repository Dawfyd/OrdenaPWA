import React, { Fragment } from "react";
import NavService from "../../elements/footer_nav_service/nav_service";
import LogoOrdena from "../../elements/logo_ordena/logo";

function page(props) {
  return (
    <Fragment>
      <div className="page_chat_service">
        <header className="header_chat_service">
          <LogoOrdena />
        </header>

        <div className="container_chat_service">
          <h1>Chat - Proximamente!</h1>
        </div>

        <footer className="footer_chat_service">
          <NavService />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
