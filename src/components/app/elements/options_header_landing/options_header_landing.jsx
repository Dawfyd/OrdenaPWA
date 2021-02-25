import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function OptionHeaderLanding() {
  return (
    <div>
      <div>
        <p className="text_option_app">¿Cómo Funciona?</p>
      </div>
      <div>
        <Link to={"/restaurant/register"}>
          <p className="text_option_register">Registrarse</p>
        </Link>
      </div>
      <div>
        <Link to={"/restaurant/home"}>
          <p className="text_option_login">Ingresar</p>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionHeaderLanding);
