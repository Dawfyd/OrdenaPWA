import React from "react";
import { Link } from "react-router-dom";

const HomeSelect = () => (
  <div>
    <div>
      <Link to={"/restaurant/register"}>
        <button className="button_landing_register">
          <p className="text_landing_register">Registra tu Negocio</p>
        </button>
      </Link>
    </div>
    <div>
      <Link to={"/register"}>
        <button className="button_landing_app">
          <p className="text_landing_app">Ingresar como Usuario</p>
        </button>
      </Link>
    </div>
  </div>
);

export default HomeSelect;
