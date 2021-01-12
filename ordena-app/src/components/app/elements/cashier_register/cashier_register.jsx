import React from "react";
import { connect } from "react-redux";
import check from "../../../../assets/images/cashier_register/check.svg";

function CashierRegister({
  data_tables,
  data_order,
  data_user,
  data_products,
  order_ready,
  select_table,
  display_button,
  order_check,
}) {
  return (
    <div className="cashier_register_tables">
      {data_tables
        .filter((a) => a.number === select_table)
        .map((d) => (
          <div key={d.id}>
            {data_order
              .filter((b) => b.id_table === d.id)
              .map((o) => (
                <div className="cashier_register_order" key={o.id}>
                  {data_user
                    .filter((c) => c.id === o.id_user)
                    .map((j) => (
                      <div className="cashier_register_user" key={j.id}>
                        {data_products
                          .filter((e) => e.id_order === o.id)
                          .map((p) => (
                            <div
                              className="cashier_register_products"
                              key={p.id}
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
                                  {p.unit_item} ud - {p.product}
                                </p>
                                <p className="cashier_user">{j.name}</p>
                                <p className="cashier_price">
                                  ${formatNumber(p.price_item)}
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
  data_tables: state.data_tables,
  data_products: state.data_products,
  data_order: state.data_order,
  data_user: state.data_user,
  select_table: state.select_table,
  display_category: state.display_category,
});
const mapDispatchToProps = (dispatch) => ({
  order_check(p) {
    dispatch({
      type: "CLICK_ITEM",
      check_id: p.id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CashierRegister);
