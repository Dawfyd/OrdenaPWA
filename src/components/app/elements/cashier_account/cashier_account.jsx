import React from "react";
import { connect } from "react-redux";
import pay_button from "../../../../assets/images/cashier_register/pay_button.svg";
import paid_button from "../../../../assets/images/cashier_register/paid_button.svg";
import { RightOutlined, DownOutlined } from "@ant-design/icons";

function CashierAccount({
  spots,
  orders,
  persons,
  requests,
  products,
  prices,
  select_table,
  DisplayAccount,
  AccountPaid,
}) {
  return (
    <div>
      {spots
        .filter((a) => a.number === select_table)
        .map((d) => (
          <div className="container_flex_account" key={d.id}>
            {orders
              .filter((b) => b.spot_id === d.id)
              .map((o) => (
                <div className="cashier_account_order" key={o.id}>
                  {persons
                    .filter((c) => c.id === o.person_id)
                    .map((j) => (
                      <div className="cashier_account_user" key={j.id}>
                        <button
                          type="button"
                          className="collapsible_account_user"
                        >
                          <p
                            className="icon_collapsible_account"
                            onClick={() => DisplayAccount(o)}
                          >
                            {o.cashier_display === false ? (
                              <RightOutlined />
                            ) : (
                              <DownOutlined />
                            )}
                          </p>
                          <li
                            className="text_name_cashier"
                            onClick={() => DisplayAccount(o)}
                          >
                            {j.username}
                          </li>
                          <li
                            className="total_price_account"
                            onClick={() => DisplayAccount(o)}
                          >
                            $
                            {FormatNumber(
                              orders
                                .filter((b) => b.person_id === j.id)
                                .filter((t) => t.id === o.id)
                                .reduce((accumulator, b) => b.price, 0)
                            )}
                          </li>

                          <img
                            src={
                              orders
                                .filter((b) => b.id === o.id)
                                .find((e) => e.state === false)
                                ? pay_button
                                : paid_button
                            }
                            className="pay_account"
                            alt="icon_home"
                            onClick={() => AccountPaid(o)}
                          />
                        </button>
                        <div
                          className="content_collapsible_account"
                          style={
                            o.cashier_display === false
                              ? { display: "none" }
                              : { display: "block" }
                          }
                        >
                          {requests
                            .filter((e) => e.order_id === o.id)
                            .map((p) => (
                              <div
                                key={p.id}
                                className="container_flex_account"
                              >
                                <p className="cashier_item_account">
                                  {p.unit} und -{" "}
                                  {products
                                    .filter((b) => b.id === p.product_id)
                                    .reduce((accumulator, b) => b.name, 0)}
                                </p>
                                <p className="cashier_price_account">
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
                            ))}
                        </div>
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
});
const mapDispatchToProps = (dispatch) => ({
  DisplayAccount(o) {
    dispatch({
      type: "CLICK_USER_DETAILS",
      user_id: o.id,
    });
  },
  AccountPaid(o) {
    dispatch({
      type: "CLICK_PAID",
      user_paid: o.id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CashierAccount);
