import React, { Fragment } from "react";
import NavAdmin from "../../elements/footer_nav_admin/nav_admin";
import InfoTable from "../../elements/info_table_products/info_table_products";

function page(props) {
  return (
    <Fragment>
      <div className="page_info_table">
        <div className="container_info_table">
          <InfoTable />
        </div>

        <footer className="footer_info_table">
          <NavAdmin />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
