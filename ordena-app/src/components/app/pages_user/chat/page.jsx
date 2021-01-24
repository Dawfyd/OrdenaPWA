import React, { Fragment } from "react";
import LogoOrdena from "../../elements/logo_ordena/logo";
import UrgentRequest from "../../elements/urgent_request/urgent_request";
import NavUser from "../../elements/footer_nav_user/nav_user";

function page(props) {
  return (
    <Fragment>
      <div className="page_chat">
        <header className="header_chat">
          <LogoOrdena />
        </header>

        <div className="container_chat">
          <UrgentRequest />
        </div>

        <footer className="footer_chat">
          <NavUser />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
