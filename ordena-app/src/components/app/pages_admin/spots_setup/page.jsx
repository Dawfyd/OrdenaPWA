import React, { Fragment } from "react";
import ListSpotsSetup from "../../elements/list_spots_setup/list_spots_setup";
import InfoCodeQR from "../../elements/info_code_qr/selector_option";
import LogoOrdena from "../../elements/logo_ordena/logo";
import "../../styles.scss";

function page(props) {
  return (
    <Fragment>
      <div className="page_cashier_admin">
        <header className="header_cashier_admin">
          <LogoOrdena />
        </header>

        <div className="container_cashier_admin">
          <ListSpotsSetup />
        </div>

        <div>
          <InfoCodeQR />
        </div>
      </div>
    </Fragment>
  );
}

export default page;
