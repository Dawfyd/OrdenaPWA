import { connect } from "react-redux";
import React from "react";
import Form1 from "../form_1/form_1.jsx";
import Form0 from "../form_0/form_0.jsx";
import Form2 from "../form_2/form_2.jsx";
import Form3 from "../form_3/form_3.jsx";

function Forms_food({ id_food, showCart, show_food, orderList, showMenu }) {
  return show_food.map((b) => (
    <div key={b.id}>
      <div>
        <Form1 />
      </div>
      <div>
        <Form2 />
      </div>
      <div>
        <Form3 />
      </div>
      <div>
        <Form0 />
      </div>
      <div className="buttons_order">
        <div className="button_space">
          <button className="button_back" onClick={() => showMenu()}>
            Volver
          </button>
        </div>
        <div className="button_space">
          <button className="button_request" onClick={() => showCart(b)}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  ));
}

const mapStateToProps = (state) => ({
  alt_food: state.alt_food,
  id_food: state.id_food,
  opt_food: state.opt_food,
  adds: state.adds,
  show_food: state.show_food,
  orderList: state.orderList,
});

const mapDispatchToProps = (dispatch) => ({
  showCart(b) {
    dispatch({
      type: "ADD_FOOD",
      show_cart: true,
      count_resume: 1,
      price_resume: b.price,
      product_resume: b.product,
      unit_resume: 1,
    });
  },
  showMenu() {
    dispatch({
      type: "BACK_MENU",
      showMenu: true,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms_food);
