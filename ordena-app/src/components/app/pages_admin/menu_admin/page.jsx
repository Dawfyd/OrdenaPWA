import React, { Fragment } from "react";
import { connect } from "react-redux";
import LogoOrdena from "../../elements/logo_ordena/logo";
import NavAdmin from "../../elements/footer_nav_admin/nav_admin";
import Search from "../../elements/search_bar/search.js";
import FoodMenu from "../../elements/food_menu/menu_bar/menu_bar.jsx";
import FloatCart from "../../elements/food_menu/float_cart/float_cart.jsx";

function page({ show_cart }) {
  return (
    <Fragment>
      <div className="page_menu">
        <header className="header_menu">
          <LogoOrdena />
        </header>
        <div
          className="container_menu"
          style={show_cart === true ? { height: "85vh" } : { height: "92vh" }}
        >
          <div>
            <Search />
          </div>
          <div className="food_menu">
            <FoodMenu />
          </div>
          <div
            className="resume_cart"
            style={
              show_cart === true ? { display: "flex" } : { display: "none" }
            }
          >
            <FloatCart />
          </div>
        </div>

        <footer className="footer_menu">
          <NavAdmin />
        </footer>
      </div>
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  show_cart: state.show_cart,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(page);
