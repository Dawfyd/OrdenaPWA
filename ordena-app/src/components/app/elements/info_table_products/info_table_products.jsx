import React from "react";
import { connect } from "react-redux";
import { RightOutlined, DownOutlined } from "@ant-design/icons";

function InfoTable({
  spots,
  orders,
  requests,
  products,
  prices,
  persons,
  order_ready,
  select_table,
  display_button,
}) {
  return (
    <div className="info_table">
      {spots
        .filter((a) => a.number_spot === select_table)
        .map((d) => (
          <div key={d.id_spot}>
            <p className="number_info_table">Mesa {d.number_spot}</p>
            <hr className="separator_info_table" />

            <p className="product_info">Productos</p>
            <p className="price_info">Precio</p>

            <div className="container_grid_info">
              {orders
                .filter((b) => b.id_spot === d.id_spot)
                .map((o) => (
                  <div className="container_grid_table" key={o.id_order}>
                    {requests
                      .filter((e) => e.state_served_request === true)
                      .filter((e) => e.id_spot === d.id_spot)
                      .map((p) => (
                        <div className="container_product" key={p.id_request}>
                          <button
                            type="button"
                            className="collapsible_info"
                            onClick={() => display_button(p)}
                          >
                            <p className="icon_collapsible">
                              {p.state_button === false ? (
                                <RightOutlined />
                              ) : (
                                <DownOutlined />
                              )}
                            </p>
                            <li className="unit_item">
                              {p.unit_request} ud -{" "}
                              {products
                                .filter((b) => b.id_product === p.id_product)
                                .reduce((accumulator, b) => b.name_product, 0)}
                            </li>
                            <li className="price_item">
                              $
                              {formatNumber(
                                prices
                                  .filter((b) => b.id_product === p.id_product)
                                  .reduce((accumulator, b) => b.value_price, 0)
                              )}
                            </li>
                          </button>
                          <div
                            className="content_collapsible"
                            style={
                              p.state_button === false
                                ? { display: "none" }
                                : { display: "block" }
                            }
                          >
                            <div>
                              <p>
                                {persons
                                  .filter((j) => j.id_person === o.id_person)
                                  .reduce((accumulator, b) => b.username, 0)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                    <p
                      className="pending_order"
                      style={
                        requests
                          .filter((e) => e.state_served_request === false)
                          .filter((e) => e.id_spot === d.id_spot).length === 0
                          ? { display: "none" }
                          : { display: "flex" }
                      }
                    >
                      Pedido Pendiente
                    </p>

                    {requests
                      .filter((f) => f.state_served_request === false)
                      .filter((e) => e.id_spot === d.id_spot)
                      .map((p) => (
                        <div className="container_product" key={p.id_request}>
                          <button
                            type="button"
                            className="collapsible_info"
                            onClick={() => display_button(p)}
                          >
                            <p className="icon_collapsible">
                              {p.state_button === false ? (
                                <RightOutlined />
                              ) : (
                                <DownOutlined />
                              )}
                            </p>
                            <li className="unit_item">
                              {p.unit_request} ud -{" "}
                              {products
                                .filter((b) => b.id_product === p.id_product)
                                .reduce((accumulator, b) => b.name_product, 0)}
                            </li>
                            <li className="price_item">
                              <input
                                className="check_pending_order"
                                onClick={() => order_ready(p)}
                                type="checkbox"
                                value=""
                              />
                            </li>
                          </button>
                          <div
                            className="content_collapsible"
                            style={
                              p.state_button === false
                                ? { display: "none" }
                                : { display: "block" }
                            }
                          >
                            <div>
                              <p>
                                {persons
                                  .filter((j) => j.id_person === o.id_person)
                                  .reduce((accumulator, b) => b.username, 0)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    <div className="total_table_div">
                      <p className="product_total">
                        Total Mesa {d.number_spot}
                      </p>
                      <p className="price_total">
                        $
                        {formatNumber(
                          orders
                            .filter((b) => b.id_spot === d.id_spot)
                            .reduce(
                              (accumulator, b) => accumulator + b.price_order,
                              0
                            )
                        )}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
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
  products: state.products,
  prices: state.prices,
  persons: state.persons,
  select_table: state.select_table,
});

const mapDispatchToProps = (dispatch) => ({
  order_ready(p) {
    dispatch({
      type: "ORDER_READY",
      id_ready: p.id_request,
    });
  },
  display_button(p) {
    dispatch({
      type: "DISPLAY_BUTTON",
      button_display: p.id_request,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InfoTable);
