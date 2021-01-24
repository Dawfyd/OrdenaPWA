import React, { Fragment } from "react";
import NavService from "../../elements/footer_nav_service/nav_service";
import InfoTable from "../../elements/info_table_products/info_table_products";

function page(props) {
  return (
    <Fragment>
      <div className="page_info_table">
        <div className="container_info_table">
          <InfoTable />
        </div>

        <footer className="footer_info_table">
          <NavService />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
