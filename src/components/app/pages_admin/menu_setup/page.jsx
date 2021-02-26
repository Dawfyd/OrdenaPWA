import React from "react";
import { connect } from "react-redux";
import LogoOrdena from "../../elements/logo_ordena/logo";
import ListAll from "../../elements/menu_setup/list_all/list_all.jsx";
import ListCategory from "../../elements/menu_setup/list_category/list_category.jsx";
import ListProduct from "../../elements/menu_setup/list_product/list_product.jsx";
import SelectorModifier from "../../elements/menu_setup/selector_modifiers/selector_modifiers.jsx";
import EditCategory from "../../elements/menu_setup/edit_category/edit_category.jsx";
import OptionHeader from "../../elements/options_header_admin/options_header_admin";

function page({ id_category, id_create_category, create_category }) {
  console.log(id_category);
  return (
    <div className="page_setup_menu">
      <header>
        <div className="logo_header_admin_menu">
          <LogoOrdena />
        </div>
        <div className="options_header_admin_menu">
          <OptionHeader />
        </div>
      </header>
      <div className="container_setup_menu">
        <div className="div_menu_setup">
          <div className="div_head_menu_setup">
            <div className="head_menu_setup">
              <div className="title_menu_setup">Menú</div>
              <div className="search_setup_menu"> Aca va la search setup</div>
            </div>
            {/*  <hr id="line_head_menu_setup" /> */}
          </div>
          <div className="content_menu_setup">
            <div className="all_menu_setup">
              <ListAll />
            </div>
            <div>
              {/*------------*/}
              <div
                className="content_inside_menu_setup_1"
                style={
                  create_category === false
                    ? { display: "grid" }
                    : { display: "none" }
                }
              >
                <div className="category_menu_setup">
                  <div
                    style={
                      id_category === 0
                        ? { dislpay: "none" }
                        : { display: "grid" }
                    }
                  >
                    <ListCategory />
                  </div>
                </div>
                <div className="product_menu_setup">
                  <ListProduct />
                </div>
              </div>
              {/*------------*/}
              <div
                className="content_inside_menu_setup_2"
                style={
                  create_category === false
                    ? { display: "none" }
                    : { display: "grid" }
                }
              >
                <div>
                  <EditCategory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="view_not_available_phone">
        <p className="text_view_not_available_phone">
          Funcionalidad solo disponible desde PC
        </p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  id_category: state.id_category,
  create_category: state.create_category,
  id_create_category: state.id_create_category,
});

const mapDispatchToProps = (dispatch) => ({
  showDish(d) {
    dispatch({
      type: "SHOW_DISH",
      showMenu: false,
      id_food: d.id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(page);
