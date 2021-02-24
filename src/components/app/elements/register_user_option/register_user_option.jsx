import React from "react";
import { connect } from "react-redux";

function RegisterOption({
  register_option,
  SelectRegister,
  SelectAnonymous,
  SelectLogin,
}) {
  return (
    <div>
      <p className="text_register_user">Para una mejor experiencia</p>
      <div>
        <button
          className="button_register_user"
          onClick={() => SelectRegister()}
        >
          Regístrate
        </button>
      </div>
      <p className="text_register_anonymous">
        O puedes ingresar solo con un alias
      </p>
      <div>
        <button
          className="button_anonymous_user"
          onClick={() => SelectAnonymous()}
        >
          Anónimo
        </button>
      </div>
      <p className="text_login_user">O si ya te registraste en Ordena</p>
      <div>
        <button className="button_login_user" onClick={() => SelectLogin()}>
          Inicia Sesión
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  register_option: state.register_option,
});
const mapDispatchToProps = (dispatch) => ({
  SelectRegister() {
    dispatch({
      type: "SELECT_OPTION",
      register_option: 1,
    });
  },
  SelectAnonymous() {
    dispatch({
      type: "SELECT_OPTION",
      register_option: 2,
    });
  },
  SelectLogin() {
    dispatch({
      type: "SELECT_OPTION",
      register_option: 3,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterOption);
