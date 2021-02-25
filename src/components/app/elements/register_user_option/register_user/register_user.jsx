import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Register = ({ register_option, BackHome }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    cellphone: "",
    password: "",
  });
  return (
    <div>
      <button className="button_back_home" onClick={() => BackHome()}>
        Regresar
      </button>
      <form className="form_user_register">
        <div className="name_user">
          <input
            className="name_user_input"
            type="text"
            placeholder="Ingrese nombre"
            name="name"
          ></input>
        </div>

        <div className="email_user">
          <input
            className="email_user_input"
            type="text"
            placeholder="Ingrese correo electronico"
            name="email"
          ></input>
        </div>
        <div className="cellphone_user">
          <input
            className="cellphone_user_input"
            type="text"
            placeholder="Ingrese número celular"
            name="cellphone"
          ></input>
        </div>
        <div className="password_user">
          <input
            className="password_user_input"
            type="text"
            placeholder="Ingrese contraseña"
            name="password"
          ></input>
        </div>

        <ul className="form_group">
          <li>
            <input className="check" type="checkbox" value="" />
          </li>
          <li>
            <article className="article_data">
              Acepto el tratamiento de datos conforme a la política de
              protección de datos personales publicada en ordena.com.co
            </article>
          </li>
        </ul>

        <div>
          <Link to={"/home"}>
            <button className="button_agree_user">Aceptar</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  register_option: state.register_option,
});
const mapDispatchToProps = (dispatch) => ({
  BackHome() {
    dispatch({
      type: "SELECT_OPTION",
      register_option: 0,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
