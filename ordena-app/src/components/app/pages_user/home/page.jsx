import React, { Fragment } from "react";
import LogoOrdena from "../../elements/logo_ordena/logo";
import NavUser from "../../elements/footer_nav_user/nav_user";
import NumTable from "../../elements/num_table_home/num_table_home";
import AvatarHome from "../../elements/avatar_home/avatar_home";

function page(props) {
  return (
    <Fragment>
      <div className="page_home">
        <header className="header_home">
          <LogoOrdena />
        </header>

        <div className="container_home">
          <div className="num_home">
            <NumTable />
          </div>
          <div className="avatar_home">
            <AvatarHome />
          </div>
        </div>

        <footer className="footer_home">
          <NavUser />
        </footer>
      </div>
    </Fragment>
  );
}

export default page;
