import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Login = ({ register_option, BackHome }) => {
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
        <div className="email_user">
          <input
            className="email_user_input"
            type="text"
            placeholder="Ingrese correo electronico"
            name="email"
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
