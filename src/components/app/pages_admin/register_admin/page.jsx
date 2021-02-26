import React, { Fragment } from "react";
import RegisterAdmin from "../../elements/register_admin/register_admin";
import LogoOrdena from "../../elements/logo_ordena/logo";
import HeaderSteps from "../../elements/header_register_admin/header_register_admin";

function page({ props, id_spot_register, EnterPage, register_option }) {
  return (
    <Fragment>
      <div className="page_register_admin">
        <header>
          <div className="logo_header_register_admin">
            <LogoOrdena />
          </div>
          <div className="options_header_register_admin">
            <HeaderSteps />
          </div>
        </header>
        <div className="container_register_admin">
          <RegisterAdmin />
        </div>
      </div>
    </Fragment>
  );
}

export default page;
