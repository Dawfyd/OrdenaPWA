import React from "react";
import { connect } from "react-redux";
import { CaretRightFilled, EyeOutlined, MoreOutlined } from "@ant-design/icons";

function ListCategory({
  products,
  selectProduct,
  id_category,
  selectP,
  id_food,
}) {
  return (
    <div className="container_list_category">
      {products
        .filter((k) => k.id_category === id_category)
        .map((b) => (
          <div className="card_list_category" key={b.id_product}>
            <div className="order_card_list_category">
              <button
                className="button_category_card"
                key={b.id_product}
                href="/dish"
                onClick={() => selectProduct(b)}
              >
                <div
                  className="flechita_list_category"
                  style={
                    b.id_product === id_food
                      ? { background: "#9B26B6" }
                      : { background: "white" }
                  }
                >
                  {" "}
                </div>

                <div className="title_list_category">{b.name_product}</div>
              </button>
              <button className="button_options_category">
                <div>
                  <EyeOutlined />
                </div>
              </button>
              <button
                className="button_options_product"
                style={
                  b.id_product === id_food
                    ? { color: "#9B26B6" }
                    : { color: "#32c755" }
                }
              >
                <div>
                  <MoreOutlined />
                </div>
              </button>
            </div>
          </div>
        ))}
      <div
        className="div_button_add_product"
        style={id_category === 0 ? { display: "none" } : { display: "grid" }}
      >
        <button
          className="button_add_product"
          onClick={() => selectP()}
          style={id_food === -1 ? { color: "#9B26B6" } : { color: "#32c755" }}
        >
          <div>+ Agregar Producto</div>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  id_category: state.id_category,
  create_product: state.create_product,
  id_food: state.id_food,
});

const mapDispatchToProps = (dispatch) => ({
  selectProduct(b) {
    dispatch({
      type: "SELECT_PRODUCT_SETUP",
      id_food: b.id_product,
      create_product: false,
    });
  },
  selectP() {
    dispatch({
      type: "CREATE_PRODUCT_SETUP",
      create_product: true,
      id_food: -1,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCategory);
