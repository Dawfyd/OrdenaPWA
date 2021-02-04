import React, { Fragment } from "react";
import TablesList from "../../elements/tables_list_admin/tables_list_admin";
import CashierInfo from "../../elements/cashier_info_tables/cashier_info_tables";
import LogoOrdena from "../../elements/logo_ordena/logo";
import OptionHeader from "../../elements/options_header_admin/options_header_admin";

function page(props) {
  return (
    <Fragment>
      <div className="page_cashier_admin">
        <header>
          <div className="logo_header_admin_cashier">
            <LogoOrdena />
          </div>
          <div className="options_header_admin_cashier">
            <OptionHeader />
          </div>
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
