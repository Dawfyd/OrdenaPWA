import React, { Fragment } from "react";
import LogoOrdena from "../../elements/logo_ordena/logo";

function page(props) {
  return (
    <Fragment>
      <div className="page_home_admin">
        <header className="header_home_admin">
          <LogoOrdena />
        </header>

        <div className="container_home_admin"></div>
      </div>
    </Fragment>
  );
}

export default page;
