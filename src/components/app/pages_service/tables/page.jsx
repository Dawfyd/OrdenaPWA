import React, { Fragment } from "react";
import TablesList from "../../elements/tables_list/tables_list";
import NavService from "../../elements/footer_nav_service/nav_service";

function page(props) {
  return (
    <Fragment>
      <div className="page_tables">
        <div className="container_tables_list">
          <TablesList />
        </div>

        <footer className="footer_tables">
          <NavService />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
