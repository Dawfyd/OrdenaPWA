import React, { Fragment } from "react";
import NavService from "../../elements/footer_nav_service/nav_service";
import LogoOrdena from "../../elements/logo_ordena/logo";
import QrReaderService from "../../elements/reader_qr_service/reader_qr_service";
import Return from "../../elements/return/return";

function page(props) {
  return (
    <Fragment>
      <div className="page_code_qr">
        <header className="header_code_qr">
          <LogoOrdena />
        </header>

        <div className="container_code_qr">
          <QrReaderService />
        </div>

        <div className="return_button">
          <Return />
        </div>

        <footer className="footer_code_qr">
          <NavService />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
