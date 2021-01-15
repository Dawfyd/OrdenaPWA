import React from "react";
import { connect } from "react-redux";
import {
  RightOutlined,
  DownOutlined,
  ArrowLeftOutlined
} from "@ant-design/icons";

function OrderPage({
  ItemOrder,
  data_products,
  orderList,
  price_resume,
  showCart,
  show_food,
  showMenu,
  lessFood,
  show_Order
}) {
  return (
    <div className="page_order_1">
      <div className="head_order">
        <div className="head_line">
          <div className="back_order">
            <button className="button_back_order" onClick={() => show_Order()}>
              <ArrowLeftOutlined />
            </button>
          </div>
          <div className="title_order">Resumen Ordena</div>
        </div>
        <hr className="line_order" />
      </div>
      <div className="list_order">
        {orderList.map(p => (
          <div className="container_product_order" key={p.id}>
            <button type="button" className="collapsible_info_order">
              <p className="icon_collapsible">
                {p.state_button === false ? (
                  <RightOutlined />
                ) : (
                  <DownOutlined />
                )}
              </p>
              <li className="name_item"> {p.product} </li>
              <li className="price_item"> ${formatNumber(p.price)}</li>
              <li className="unit_item_order">
                <button className="less_item" onClick={() => lessFood(p)}>
                  {" "}
                  -{" "}
                </button>
                <div className="unit_order"> {p.unit_item} </div>
                <button className="more_item" onClick={() => showCart(p)}>
                  {" "}
                  +{" "}
                </button>
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
              <p>hola1</p>
            </div>
          </div>
        ))}
      </div>

      <div className="total_order">
        <div>Total Ordena</div>
        <div className="price_order">$ {formatNumber(price_resume)}</div>
      </div>
      <div className="div_button_order">
        <button className="button_order">Ordenar</button>
      </div>
    </div>
  );
}

function formatNumber(price_item) {
  return new Intl.NumberFormat("de-DE").format(price_item);
}

const mapStateToProps = state => ({
  orderList: state.orderList,
  data_products: state.data_products,
  price_resume: state.price_resume,
  show_food: state.show_food
});

const mapDispatchToProps = dispatch => ({
  showCart(p) {
    dispatch({
      type: "ADD_FOOD",
      show_cart: true,
      count_resume: 1,
      price_resume: p.price,
      product_resume: p.product,
      unit_resume: 1
    });
  },
  lessFood(p) {
    dispatch({
      type: "LESS_FOOD",
      show_cart: false,
      count_resume: 1,
      price_resume: p.price,
      product_resume: p.product,
      unit_resume: 1,
      showOrder: false
    });
  },
  show_Order() {
    dispatch({
      type: "SHOW_ORDER",
      showOrder: true,
      show_cart: true
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
