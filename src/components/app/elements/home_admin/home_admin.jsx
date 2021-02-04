import React from "react";
import { Link } from "react-router-dom";

const HomeSelect = () => (
  <div>
    <div>
      <Link to={"/restaurant/cashier_setup"}>
        <button className="button_select_cashier">
          <p className="text_cashier">Caja</p>
        </button>
      </Link>
    </div>
    <div>
      <Link to={"/restaurant/menu_setup"}>
        <button className="button_select_menu">
          <p className="text_menu_setup">Configura tu Menu</p>
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
