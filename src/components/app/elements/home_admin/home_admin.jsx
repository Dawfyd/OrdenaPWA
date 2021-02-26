import React from "react";
import { Link } from "react-router-dom";

const HomeSelect = () => (
  <div>
    <div>
      <Link to={"/restaurant/account_admin"}>
        <button className="button_select_app">
          <p className="text_app">Aplicación Móvil</p>
        </button>
      </Link>
    </div>
    <div>
      <Link to={"/restaurant/cashier_setup"}>
        <button className="button_select_cashier">
          <p className="text_cashier">Cajero</p>
        </button>
      </Link>
    </div>
    <div>
      <Link to={"/restaurant/menu_setup"}>
        <button className="button_select_menu">
          <p className="text_menu_setup">Configura tu Menú</p>
        </button>
      </Link>
    </div>
    <div>
      <Link to={"/restaurant/spots_setup"}>
        <button className="button_select_spots">
          <p className="text_spots_setup">Configura tus Mesas</p>
        </button>
      </Link>
    </div>
  </div>
);

export default HomeSelect;
