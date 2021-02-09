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
  select_table,
  OrderReady,
  DisplayButton,
}) {
  return (
    <div className="info_table">
      {spots
        .filter((a) => a.number === select_table)
        .map((d) => (
          <div key={d.id}>
            <p className="number_info_table">Mesa {d.number}</p>
            <p className="product_info">Productos</p>
            <p className="price_info">Precio</p>

            <div className="container_grid_info">
              {orders
                .filter((b) => b.spot_id === d.id)
                .map((o) => (
                  <div className="container_grid_table" key={o.id}>
                    {requests
                      .filter((e) => e.state === 3)
                      .filter((e) => e.spot_id === d.id)
                      .map((p) => (
                        <div className="container_product" key={p.id}>
                          <button
                            type="button"
                            className="collapsible_info"
                            onClick={() => DisplayButton(p)}
                          >
                            <p className="icon_collapsible">
                              {p.state_button === false ? (
                                <RightOutlined />
                              ) : (
                                <DownOutlined />
                              )}
                            </p>
                            <li className="unit_item">
                              {p.unit} ud -{" "}
                              {products
                                .filter((b) => b.id === p.product_id)
                                .reduce((accumulator, b) => b.name, 0)}
                            </li>
                            <li className="price_item">
                              $
                              {FormatNumber(
                                prices
                                  .filter((b) => b.id === p.product_id)
                                  .reduce((accumulator, b) => b.value, 0)
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
                                  .filter((j) => j.id === o.person_id)
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
                          .filter((e) => e.state !== 3)
                          .filter((e) => e.spot_id === d.id).length === 0
                          ? { display: "none" }
                          : { display: "flex" }
                      }
                    >
                      Pedido Pendiente
                    </p>

                    {requests
                      .filter((f) => f.state !== 3)
                      .filter((e) => e.spot_id === d.id)
                      .map((p) => (
                        <div className="container_product" key={p.id}>
                          <button type="button" className="collapsible_info">
                            <p
                              className="icon_collapsible"
                              onClick={() => DisplayButton(p)}
                            >
                              {p.state_button === false ? (
                                <RightOutlined />
                              ) : (
                                <DownOutlined />
                              )}
                            </p>
                            <li
                              className="unit_item_pending"
                              onClick={() => DisplayButton(p)}
                            >
                              {p.unit} ud -{" "}
                              {products
                                .filter((b) => b.id === p.product_id)
                                .reduce((accumulator, b) => b.name, 0)}
                            </li>
                            <li className="price_item_pending">
                              <input
                                className="check_pending_order"
                                onClick={() => OrderReady(p)}
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
                                  .filter((j) => j.id === o.person_id)
                                  .reduce((accumulator, b) => b.username, 0)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    <div className="total_table_div">
                      <p className="product_total">Total Mesa {d.number}</p>
                      <p className="price_total">
                        $
                        {FormatNumber(
                          orders
                            .filter((b) => b.spot_id === d.id)
                            .reduce(
                              (accumulator, b) => accumulator + b.price,
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
function FormatNumber(price) {
  return new Intl.NumberFormat("de-DE").format(price);
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
  OrderReady(p) {
    dispatch({
      type: "ORDER_READY",
      id_ready: p.id,
    });
  },
  DisplayButton(p) {
    dispatch({
      type: "DISPLAY_BUTTON",
      button_display: p.id,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InfoTable);
