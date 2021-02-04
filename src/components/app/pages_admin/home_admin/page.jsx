import React, { Fragment } from "react";
import LogoOrdena from "../../elements/logo_ordena/logo";
import HomeSelect from "../../elements/home_admin/home_admin";
import OptionHeader from "../../elements/options_header_admin/options_header_admin";

function page(props) {
  return (
    <Fragment>
      <div className="page_home_admin">
        <header>
          <div className="logo_header_admin_home">
            <LogoOrdena />
          </div>
          <div className="options_header_admin_home">
            <OptionHeader />
          </div>
        </header>

        <div className="container_home_admin">
          <HomeSelect />
        </div>
      </div>
    </Fragment>
  );
}

export default page;
