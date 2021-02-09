import React from "react";
import { connect } from "react-redux";
import CashierRegister from "../cashier_register/cashier_register";
import CashierAccount from "../cashier_account/cashier_account";

function InfoTable({
  spots,
  select_table,
  display_category,
  ClickRegister,
  ClickAccount,
}) {
  return (
    <div className="info_cashier">
      {spots
        .filter((a) => a.number === select_table)
        .map((d) => (
          <div key={d.id}>
            <div className="container_cashier_tables">
              <button
                className="button_register"
                onClick={() => ClickRegister()}
                style={
                  display_category === true
                    ? { background: "#32C755" }
                    : { background: "white" }
                }
              >
                <p
                  className="text_register"
                  style={
                    display_category === true
                      ? { color: "#FFFFFF" }
                      : { color: "rgba(0, 0, 0, 0.5)" }
                  }
                >
                  Registro
                </p>
              </button>
              <button
                className="button_account"
                onClick={() => ClickAccount()}
                style={
                  display_category === false
                    ? { background: "#32C755" }
                    : { background: "white" }
                }
              >
                <p
                  className="text_account"
                  style={
                    display_category === false
                      ? { color: "#FFFFFF" }
                      : { color: "rgba(0, 0, 0, 0.5)" }
                  }
                >
                  Cuenta
                </p>
              </button>

              <div
                className="cashier_component"
                style={
                  display_category === true
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <CashierRegister />
              </div>

              <div
                className="cashier_component"
                style={
                  display_category === false
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <CashierAccount />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  spots: state.spots,
  select_table: state.select_table,
  display_category: state.display_category,
});

const mapDispatchToProps = (dispatch) => ({
  ClickRegister() {
    dispatch({
      type: "CLICK_REGISTER",
      display_category: true,
    });
  },
  ClickAccount() {
    dispatch({
      type: "CLICK_ACCOUNT",
      display_category: false,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoTable);
