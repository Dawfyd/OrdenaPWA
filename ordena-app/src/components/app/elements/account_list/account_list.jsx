import React from "react";
import { Link } from "react-router-dom";

const Account = () => (
  <div className="container_account_list">
    <div className="container_list">
      <div>
        <Link to={"/account/myaccount"}>
          <p className="account_title">Mi Cuenta</p>
        </Link>
      </div>

      <div>
        <Link to={"/account/favorites"}>
          <p className="account_title">Favoritos</p>
        </Link>
      </div>

      <div>
        <Link to={"/account/suggestions"}>
          <p className="account_title">Sugerencias</p>
        </Link>
      </div>

      <div>
        <Link to={"/service/code_qr"}>
          <p className="account_title">Servicio</p>
        </Link>
      </div>
    </div>
  </div>
);

export default Account;
