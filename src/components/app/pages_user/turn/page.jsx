import React, { Fragment } from "react";
import TableNum from "../../elements/table_num/table_num";
import PreOrder from "../../elements/pre_order/pre_order";
import LogoOrdena from "../../elements/logo_ordena/logo";
import NavUser from "../../elements/footer_nav_user/nav_user";
import QrReader from "../../elements/reader_qr/reader_qr";

function page(props) {
  return (
    <Fragment>
      <div className="page_turn">
        <header className="header_turn">
          <LogoOrdena />
        </header>
        <div className="container_qr">
          <QrReader />
        </div>

        <div className="table_num">
          <TableNum />
        </div>

        <div className="pre_order_turn">
          <PreOrder />
        </div>

        <footer className="footer_turn">
          <NavUser />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
