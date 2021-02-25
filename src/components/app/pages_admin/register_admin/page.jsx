import React, { Fragment } from "react";
import RegisterAdmin from "../../elements/register_admin/register_admin";
import LogoOrdena from "../../elements/logo_ordena/logo";

function page({ props, id_spot_register, EnterPage, register_option }) {
  return (
    <Fragment>
      <div className="page_register_admin">
        <header className="header_register_admin">
          <LogoOrdena />
        </header>
        <div className="container_register_admin">
          <RegisterAdmin />
        </div>
      </div>
    </Fragment>
  );
}

export default page;
