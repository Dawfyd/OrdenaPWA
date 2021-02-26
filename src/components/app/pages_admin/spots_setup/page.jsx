import React, { Fragment } from "react";
import ListSpotsSetup from "../../elements/list_spots_setup/list_spots_setup";
import InfoCodeQR from "../../elements/info_code_qr/selector_option";
import LogoOrdena from "../../elements/logo_ordena/logo";
import OptionHeader from "../../elements/options_header_admin/options_header_admin";

function page(props) {
  return (
    <Fragment>
      <div className="page_spot_admin">
        <header>
          <div className="logo_header_admin_spot">
            <LogoOrdena />
          </div>
          <div className="options_header_admin_spot">
            <OptionHeader />
          </div>
        </header>

        <div className="container_spot_admin">
          <div>
            <ListSpotsSetup />
          </div>

          <div>
            <InfoCodeQR />
          </div>
        </div>
        <div className="view_not_available_phone">
          <p className="text_view_not_available_phone">
            Funcionalidad solo disponible desde PC
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default page;
