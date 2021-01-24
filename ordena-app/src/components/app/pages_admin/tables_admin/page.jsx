import React, { Fragment } from "react";
import TablesList from "../../elements/tables_list/tables_list";
import NavAdmin from "../../elements/footer_nav_admin/nav_admin";

function page(props) {
  return (
    <Fragment>
      <div className="page_tables_admin">
        <div className="container_tables_list_admin">
          <TablesList />
        </div>

        <footer className="footer_tables_admin">
          <NavAdmin />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
