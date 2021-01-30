import React, { Fragment } from "react";
import TablesList from "../../elements/tables_list_admin/tables_list_admin";
import CashierInfo from "../../elements/cashier_info_tables/cashier_info_tables";
import LogoOrdena from "../../elements/logo_ordena/logo";

function page(props) {
  return (
    <Fragment>
      <div className="page_cashier_admin">
        <header className="header_cashier_admin">
          <LogoOrdena />
        </header>

        <div className="container_cashier_admin">
          <TablesList />
        </div>

        <div>
          <CashierInfo />
        </div>
      </div>
    </Fragment>
  );
}

export default page;
