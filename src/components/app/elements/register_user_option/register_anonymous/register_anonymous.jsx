import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import img_register from "../../../../../assets/images/register/img_register.svg";

const RegisterAnonymous = ({ register_option, BackHome }) => {
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
            className="name_user_input_alias"
            type="text"
            placeholder="Ingrese un alias"
            name="name"
          ></input>
        </div>

        <div>
          <Link to={"/home"}>
            <button className="button_enter">Entrar</button>
          </Link>
        </div>
      </form>
      <article className="article_anonymous">
        Recuerda que puedes registrarte para hacer uso de todas las
        funcionalidades que Ordena tiene para ti
      </article>
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterAnonymous);
