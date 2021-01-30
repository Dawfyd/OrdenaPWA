import React from "react";
import { Link } from "react-router-dom";

const Return = () => (
  <div>
    <Link to={"/account"}>
      <button className="button_return" id="B1">
        <p className="text_return">Volver</p>
      </button>
    </Link>
  </div>
);

export default Return;
