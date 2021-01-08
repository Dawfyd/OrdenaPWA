import { connect } from "react-redux";
import React from "react";
import Form_1 from "../form_1/form_1.jsx";
import Form_0 from "../form_0/form_0.jsx";
import Form_2 from "../form_2/form_2.jsx";
import Form_3 from "../form_3/form_3.jsx";

function Forms_food({ id_food, showCart, show_food, orderList }) {
  return show_food.map(b => (
    <div className="from_menu" key={b.id}>
      <div className="form_1">
        <Form_1 />
      </div>
      <div className="form_2">
        <Form_2 />
      </div>
      <div className="form_3">
        <Form_3 />
      </div>
      <div className="form_0">
        <Form_0 />
      </div>
      <div className="buttons_order">
        <div className="button_space">
          <button className="button_request" onClick={() => showCart(b)}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  ));
}

const mapStateToProps = state => ({
  alt_food: state.alt_food,
  id_food: state.id_food,
  opt_food: state.opt_food,
  adds: state.adds,
  show_food: state.show_food,
  orderList: state.orderList
});

const mapDispatchToProps = dispatch => ({
  showCart(b) {
    dispatch({
      type: "ADD_FOOD",
      show_cart: true,
      count_resume: 1,
      price_resume: b.price,
      product_resume: b.product,
      unit_resume: 1
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms_food);
