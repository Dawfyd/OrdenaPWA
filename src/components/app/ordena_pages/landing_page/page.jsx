import React, { Fragment } from "react";
import LogoOrdena from "../../elements/logo_ordena/logo";
import OptionHeaderLanding from "../../elements/options_header_landing/options_header_landing";
import HomeLanding from "../../elements/landing_page/home_landing/home_landing";

function page(props) {
  return (
    <Fragment>
      <div className="page_landing">
        <header>
          <div className="logo_header_landing">
            <LogoOrdena />
          </div>
          <div className="options_header_landing">
            <OptionHeaderLanding />
          </div>
        </header>

        <div className="container_landing">
          <HomeLanding />
        </div>
      </div>
    </Fragment>
  );
}

export default page;
