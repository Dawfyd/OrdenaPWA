import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function RegisterAdmin({
  stated_register,
  ClickBackInfo,
  ClickModel,
  ClickBackModel,
  ClickDocs,
  ClickBackDocs,
  ClickVenue,
  ClickBackVenue,
  ClickSubmit,
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
          <div className="form_admin_register">
            <span className="text_register_admin">Datos Generales</span>
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
                Identificación del representante legal
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
                Correo electronico del representante legal
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
          <div className="footer_button_register">
            <button
              className="button_next_admin"
              type="button"
              onClick={() => ClickModel()}
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
              onClick={() => ClickDocs()}
            >
              Siguiente
            </button>
            Soy la vista de politica de tratamiento de datos y terminos y
            condiciones
            <button
              className="button_back_admin"
              type="button"
              onClick={() => ClickBackInfo()}
            >
              Regresar
            </button>
          </div>
        </div>
        <div
          className=""
          style={
            stated_register === 2 ? { display: "block" } : { display: "none" }
          }
        >
          <div>
            <button
              className="button_next_admin"
              type="button"
              onClick={() => ClickVenue()}
            >
              Siguiente
            </button>
            Soy la vista para cargar documentos (RUT y CC representante legal)
            <button
              className="button_back_admin"
              type="button"
              onClick={() => ClickBackModel()}
            >
              Regresar
            </button>
          </div>
        </div>
        <div
          className=""
          style={
            stated_register === 3 ? { display: "block" } : { display: "none" }
          }
        >
          <div>
            <button
              className="button_next_admin"
              type="button"
              onClick={() => ClickSubmit()}
            >
              Siguiente
            </button>
            Soy de los datos de la sede
            <button
              className="button_back_admin"
              type="button"
              onClick={() => ClickBackDocs()}
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
  ClickModel() {
    dispatch({
      type: "CLICK_NEXT",
      stated_register: 1,
    });
  },
  ClickBackInfo() {
    dispatch({
      type: "CLICK_RETURN",
      stated_register: 0,
    });
  },
  ClickDocs() {
    dispatch({
      type: "CLICK_NEXT",
      stated_register: 2,
    });
  },
  ClickBackModel() {
    dispatch({
      type: "CLICK_RETURN",
      stated_register: 1,
    });
  },
  ClickVenue() {
    dispatch({
      type: "CLICK_NEXT",
      stated_register: 3,
    });
  },
  ClickBackDocs() {
    dispatch({
      type: "CLICK_RETURN",
      stated_register: 2,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAdmin);
