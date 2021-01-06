import React from "react";
import { connect } from "react-redux";
import pay_button from "../../../../assets/images/cashier_register/pay_button.svg";
import paid_button from "../../../../assets/images/cashier_register/paid_button.svg";
import { RightOutlined, DownOutlined } from "@ant-design/icons";

function CashierAccount({
  data_tables,
  data_order,
  data_user,
  data_products,
  select_table,
  display_account,
  account_paid,
}) {
  return (
    <div className="cashier_register_tables">
      {data_tables
        .filter((a) => a.number === select_table)
        .map((d) => (
          <div className="container_flex_account" key={d.id}>
            {data_order
              .filter((b) => b.id_table === d.id)
              .map((o) => (
                <div className="cashier_account_order" key={o.id}>
                  {data_user
                    .filter((c) => c.id === o.id_user)
                    .map((j) => (
                      <div className="cashier_account_user" key={j.id}>
                        <button
                          type="button"
                          className="collapsible_account_user"
                        >
                          <p
                            className="icon_collapsible_account"
                            onClick={() => display_account(o)}
                          >
                            {j.cashier_display === false ? (
                              <RightOutlined />
                            ) : (
                              <DownOutlined />
                            )}
                          </p>
                          <li
                            className="text_name_cashier"
                            onClick={() => display_account(o)}
                          >
                            {j.name}
                          </li>
                          <li
                            className="total_price_account"
                            onClick={() => display_account(o)}
                          >
                            $
                            {formatNumber(
                              data_order
                                .filter((b) => b.id_user === j.id)
                                .filter((t) => t.id === o.id)
                                .reduce((accumulator, b) => b.total_price, 0)
                            )}
                          </li>

                          <img
                            src={
                              data_order
                                .filter((b) => b.id === o.id)
                                .find((e) => e.state_paid === false)
                                ? pay_button
                                : paid_button
                            }
                            className="pay_account"
                            alt="icon_home"
                            onClick={() => account_paid(o)}
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
                          {data_products
                            .filter((e) => e.id_order === o.id)
                            .map((p) => (
                              <div
                                key={p.id}
                                className="container_flex_account"
                              >
                                <p className="cashier_item_account">
                                  {p.unit_item} und - {p.product}
                                </p>
                                <p className="cashier_price_account">
                                  ${formatNumber(p.price_item)}
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

function formatNumber(price_item) {
  return new Intl.NumberFormat("de-DE").format(price_item);
}
const mapStateToProps = (state) => ({
  data_tables: state.data_tables,
  data_products: state.data_products,
  data_order: state.data_order,
  data_user: state.data_user,
  select_table: state.select_table,
});
const mapDispatchToProps = (dispatch) => ({
  display_account(o) {
    dispatch({
      type: "CLICK_USER_DETAILS",
      user_id: o.id,
    });
  },
  account_paid(o) {
    dispatch({
      type: "CLICK_PAID",
      user_paid: o.id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CashierAccount);
