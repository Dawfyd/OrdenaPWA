import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function RegisterAdmin({
  stated_register,
  ClickNext,
  ClickBack,
  ClickNextStep,
}) {
  return (
    <div>
      <form>
        <div
          className="container_admin_register"
          style={
            stated_register === 0 ? { display: "flex" } : { display: "none" }
          }
        >
          <span className="text_register_admin">Datos Generales</span>
          <div className="form_admin_register">
            <div className="div_container_admin">
              <span className="span_admin">
                Nombre del restaurante que aparecera en el app
              </span>
              <input
                className="register_admin_input"
                type="text"
                placeholder="Escribe aquí.."
                name="name"
              ></input>
            </div>
            <div className="div_container_admin">
              <span className="span_admin">Tipo de persona</span>
              <select className="register_admin_input" name="name">
                <option value="1">Persona natural</option>
                <option value="2">Persona jurídica</option>
              </select>
            </div>

            <div className="div_container_admin">
              <span className="span_admin">CC/NIT del aliado comercial</span>
              <div className="div_container_input">
                <select className="register_admin_input_short" name="name">
                  <option value="1">C.C</option>
                  <option value="2">C.E</option>
                  <option value="3">NIT</option>
                </select>
                <input
                  className="register_admin_input_large"
                  type="text"
                  placeholder="Escribe aquí.."
                  name="name"
                ></input>
              </div>
            </div>
            <div className="div_container_admin">
              <span className="span_admin">
                Razón social / Nombre representante legal
              </span>
              <input
                className="register_admin_input"
                type="text"
                placeholder="Escribe aquí.."
                name="name"
              ></input>
            </div>
            <div className="div_container_admin">
              <span className="span_admin">Régimen tributario</span>
              <select className="register_admin_input" name="name">
                <option value="1">Régimen común</option>
                <option value="2">Régimen simplificado</option>
                <option value="3">Gran contribuyente</option>
                <option value="4">Autorretenedor</option>
                <option value="5">Régimen común + Gran contribuyente</option>
                <option value="6">Régimen común + Autorretenedor</option>
                <option value="7">
                  Régimen común + Autorretenedor + Gran contribuyente
                </option>
                <option value="8">Gran Contribuyente + Autorretenedor</option>
              </select>
            </div>
            <div className="div_container_admin">
              <span className="span_admin">
                Identificacion del representante legal
              </span>
              <div className="div_container_input">
                <select className="register_admin_input_short">
                  <option value="1">C.C</option>
                  <option value="2">NIT</option>
                </select>
                <input
                  className="register_admin_input_large"
                  type="text"
                  placeholder="Escribe aquí.."
                  name="name"
                ></input>
              </div>
            </div>
            <div className="div_container_admin">
              <span className="span_admin">Nombre del representante legal</span>
              <input
                className="register_admin_input"
                type="text"
                placeholder="Escribe aquí.."
                name="name"
              ></input>
            </div>
            <div className="div_container_admin">
              <span className="span_admin">
                Apellidos del representante legal
              </span>
              <input
                className="register_admin_input"
                type="text"
                placeholder="Escribe aquí.."
                name="name"
              ></input>
            </div>
            <div className="div_container_admin">
              <span className="span_admin">
                Correo electronico del representente legal
              </span>
              <input
                className="register_admin_input"
                type="email"
                placeholder="Escribe aquí.."
                name="name"
              ></input>
            </div>
            <div className="div_container_admin">
              <span className="span_admin">
                Telefono del representante legal
              </span>
              <input
                className="register_admin_input"
                type="tel"
                placeholder="Escribe aquí.."
                name="name"
              ></input>
            </div>
            <div className="div_container_admin">
              <span className="span_admin">Contraseña </span>
              <input
                className="register_admin_input"
                type="password"
                placeholder="Escribe aquí.."
                name="name"
              ></input>
            </div>
            <div className="div_container_admin">
              <span className="span_admin">Verificacion de Contraseña</span>
              <input
                className="register_admin_input"
                type="password"
                placeholder="Escribe aquí.."
                name="name"
              ></input>
            </div>
          </div>
          <div>
            <button
              className="button_next_admin"
              type="button"
              onClick={() => ClickNext()}
            >
              Siguiente
            </button>
            <div>
              <Link to={"/"}>
                <button className="button_back_admin" type="button">
                  Regresar
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className=""
          style={
            stated_register === 1 ? { display: "block" } : { display: "none" }
          }
        >
          <div>
            <button
              className="button_next_admin"
              type="button"
              onClick={() => ClickNextStep()}
            >
              Siguiente
            </button>
            HOLAA
            <button
              className="button_back_admin"
              type="button"
              onClick={() => ClickBack()}
            >
              Regresar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  stated_register: state.stated_register,
});
const mapDispatchToProps = (dispatch) => ({
  ClickNext() {
    dispatch({
      type: "CLICK_NEXT",
      stated_register: 1,
    });
  },
  ClickBack() {
    dispatch({
      type: "CLICK_RETURN",
      stated_register: 0,
    });
  },
  ClickNextStep() {
    dispatch({
      type: "CLICK_NEXT",
      stated_register: 2,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAdmin);
