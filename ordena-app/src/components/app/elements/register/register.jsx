import React from "react";
import { Link } from "react-router-dom";
import img_register from "../../../../assets/images/register/img_register.svg";

const Register = () => (
  <div>
    <form className="form">
      <div className="name">
        <input
          className="username"
          type="text"
          placeholder="Ingrese nombre"
        ></input>
      </div>

      <div className="cell">
        <input
          className="cellphone"
          type="text"
          placeholder="Ingrese número celular"
        ></input>
      </div>

      <ul className="form_group">
        <li>
          <input className="check" type="checkbox" value="" />
        </li>
        <li>
          <article className="article">
            Acepto el tratamiento de datos conforme a la política de protección
            de datos personales publicada en ordena.com.co
          </article>
        </li>
      </ul>

      <div>
        <Link to={"/home"}>
          <img src={img_register} className="img_register" alt="logo" />
        </Link>
      </div>
    </form>
  </div>
);

export default Register;
