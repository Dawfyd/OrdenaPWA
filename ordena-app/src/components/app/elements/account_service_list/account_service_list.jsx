import React from "react";
import { Link } from "react-router-dom";

const AccountService = () => (
  <div className="container_account_list">
    <div className="container_list">
      <div>
        <Link to={"/service/account_service/myaccount"}>
          <p className="account_title">Mi Cuenta</p>
        </Link>
      </div>

      <div>
        <Link to={"/service/account_service/restaurants"}>
          <p className="account_title">Restaurantes</p>
        </Link>
      </div>

      <div>
        <Link to={"/service/account_service/suggestions"}>
          <p className="account_title">Sugerencias</p>
        </Link>
      </div>
    </div>
  </div>
);

export default AccountService;
