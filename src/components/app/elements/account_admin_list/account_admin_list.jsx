import React from "react";
import { Link } from "react-router-dom";

const AccountAdmin = () => (
  <div className="container_account_list">
    <div className="container_list">
      <div>
        <Link to={"/restaurant/home"}>
          <p className="account_title">Mi Restaurante</p>
        </Link>
      </div>
      <div>
        <Link to={"/restaurant/menu_admin"}>
          <p className="account_title">Menu Admin</p>
        </Link>
      </div>

      <div>
        <p className="account_title">Sugerencias</p>
      </div>
    </div>
  </div>
);

export default AccountAdmin;
