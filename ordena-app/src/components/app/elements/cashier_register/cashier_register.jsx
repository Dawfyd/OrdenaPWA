import React from "react";
import { connect } from "react-redux";
import check from "../../../../assets/images/cashier_register/check.svg";

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
  order_check,
}) {
  return (
    <div className="cashier_register_tables">
      {spots
        .filter((a) => a.number_spot === select_table)
        .map((d) => (
          <div key={d.id_spot}>
            {orders
              .filter((b) => b.id_spot === d.id_spot)
              .map((o) => (
                <div className="cashier_register_order" key={o.id_order}>
                  {persons
                    .filter((c) => c.id_person === o.id_person)
                    .map((j) => (
                      <div className="cashier_register_user" key={j.id_person}>
                        {requests
                          .filter((e) => e.id_order === o.id_order)
                          .map((p) => (
                            <div
                              className="cashier_register_products"
                              key={p.id_request}
                            >
                              <button
                                onClick={() => order_check(p)}
                                className="button_icon"
                                id="B1"
                              >
                                <img
                                  src={check}
                                  className="icon_check"
                                  alt="icon_home"
                                  style={
                                    p.state_check === true
                                      ? { display: "block" }
                                      : { display: "none" }
                                  }
                                />
                              </button>

                              <div className="container_flex">
                                <p className="cashier_item">
                                  {p.unit_request} ud -{" "}
                                  {products
                                    .filter(
                                      (b) => b.id_product === p.id_product
                                    )
                                    .reduce(
                                      (accumulator, b) => b.name_product,
                                      0
                                    )}
                                </p>
                                <p className="cashier_user">{j.username}</p>
                                <p className="cashier_price">
                                  $
                                  {formatNumber(
                                    prices
                                      .filter(
                                        (b) => b.id_product === p.id_product
                                      )
                                      .reduce(
                                        (accumulator, b) => b.value_price,
                                        0
                                      )
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

function formatNumber(price_item) {
  return new Intl.NumberFormat("de-DE").format(price_item);
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
});
const mapDispatchToProps = (dispatch) => ({
  order_check(p) {
    dispatch({
      type: "CLICK_ITEM",
      check_id: p.id_request,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CashierRegister);
