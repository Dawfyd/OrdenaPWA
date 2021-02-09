import React from "react";
import { connect } from "react-redux";
import icon_check from "../../../../assets/images/cashier_register/icon_check.svg";
import icon_close from "../../../../assets/images/cashier_register/icon_close.svg";
import Swal from "sweetalert2";

function CashierRegister({
  spots,
  orders,
  persons,
  requests,
  products,
  prices,
  order_ready,
  select_table,
  display_button,
  cancel_item,
  check_ready,
  OrderCheck,
  CancelRequest,
}) {
  return (
    <div className="cashier_register_tables">
      {spots
        .filter((a) => a.number === select_table)
        .map((d) => (
          <div key={d.id}>
            {orders
              .filter((b) => b.spot_id === d.id)
              .map((o) => (
                <div className="cashier_register_order" key={o.id}>
                  {persons
                    .filter((c) => c.id === o.person_id)
                    .map((j) => (
                      <div className="cashier_register_user" key={j.id}>
                        {requests
                          .filter((e) => e.order_id === o.id)
                          .map((p) => (
                            <div
                              className="cashier_register_products"
                              key={p.id}
                            >
                              <button
                                onClick={() => OrderCheck(p)}
                                className="button_icon"
                                style={
                                  p.state === 5
                                    ? { borderColor: "#9B26B6" }
                                    : p.state_request === 1
                                    ? { borderColor: "rgba(0, 0, 0, 0.25)" }
                                    : { borderColor: "#32c755" }
                                }
                              >
                                <img
                                  src={p.state === 5 ? icon_close : icon_check}
                                  onClick={() => CancelRequest(p)}
                                  className="icon_check"
                                  alt="icon_home"
                                  style={
                                    p.state === 1
                                      ? { display: "none" }
                                      : { display: "block" }
                                  }
                                />
                              </button>

                              <div className="container_flex">
                                <p className="cashier_item">
                                  {p.unit} ud -{" "}
                                  {products
                                    .filter((b) => b.id === p.product_id)
                                    .reduce((accumulator, b) => b.name, 0)}
                                </p>
                                <p className="cashier_user">{j.username}</p>
                                <p className="cashier_price">
                                  $
                                  {FormatNumber(
                                    prices
                                      .filter(
                                        (b) => b.product_id === p.product_id
                                      )
                                      .reduce((accumulator, b) => b.value, 0)
                                  )}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}

function FormatNumber(price) {
  return new Intl.NumberFormat("de-DE").format(price);
}

const mapStateToProps = (state) => ({
  spots: state.spots,
  requests: state.requests,
  orders: state.orders,
  persons: state.persons,
  products: state.products,
  prices: state.prices,
  select_table: state.select_table,
  display_category: state.display_category,
  check_ready: state.check_ready,
  check_id: state.check_id,
  cancel_item: state.cancel_item,
});
const mapDispatchToProps = (dispatch) => ({
  OrderCheck(p) {
    dispatch({
      type: "CLICK_ITEM",
      check_id: p.id,
    });
  },
  CancelRequest(p) {
    Swal.fire({
      title: "Cancelar pedido",
      text: "¿Estas seguro que deseas cancelar el pedido?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#32C755",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#9B26B6",
    }).then((result) => {
      if (result.isConfirmed === true) {
        return dispatch({
          type: "CANCEL_ITEM",
          cancel_item: true,
          check_id: p.id,
        });
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CashierRegister);
