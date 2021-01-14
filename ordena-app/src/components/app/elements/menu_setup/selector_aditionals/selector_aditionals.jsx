import React from "react";
import { connect } from "react-redux";
import {
  CaretRightFilled,
  CaretDownFilled,
  PlusSquareFilled
} from "@ant-design/icons";

function SelectorAditional({
  showAds,
  show_ads,
  products,
  id_food,
  id_category,
  create_product,
  id_create_food
}) {
  if (create_product === true) {
    return (
      <div className="container_selector_modifier">
        <div className="card_selector_modifier" key="">
          <button
            className="button_selector_modifier"
            onClick={() => showAds()}
            type="button"
          >
            <div className="order_card_selector_modifier">
              <div
                className="flechita_selector_adds"
                style={
                  show_ads === true ? { display: "flex" } : { display: "none" }
                }
              >
                <CaretDownFilled />
              </div>
              <div
                className="flechita_selector_adds"
                style={
                  show_ads === true ? { display: "none" } : { display: "flex" }
                }
              >
                <CaretRightFilled />
              </div>
              <div className="title_selector_modifier">
                Adicionales existentes
              </div>
            </div>
          </button>
          <div
            className="container_options_selector_modifier"
            style={
              show_ads === true ? { display: "grid" } : { display: "none" }
            }
          >
            <div>
              {products
                .filter(c => c.id_category === 1)
                .filter(b => b.type_product === "P")
                .filter(k => parseInt(k.code_product) !== id_create_food)
                .map(p => (
                  <div key={p.id_product}>
                    <button className="button_modifier" type="button">
                      <div className="order_button_modifier">
                        <div className="text_button_modifier">
                          {p.name_product}
                        </div>
                        <div>
                          <PlusSquareFilled />
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
            </div>
            <div>
              {products
                .filter(c => c.id_category === 1)
                .filter(b => b.type_product === "C")
                .filter(k => parseInt(k.code_product) !== id_category)
                .map(p => (
                  <div key={p.id_product}>
                    <button className="button_modifier" type="button">
                      <div className="order_button_modifier">
                        <div className="text_button_modifier">
                          {p.name_product}
                        </div>
                        <div>
                          <PlusSquareFilled />
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container_selector_modifier">
        <div className="card_selector_modifier" key="">
          <button
            className="button_selector_modifier"
            onClick={() => showAds()}
            type="button"
          >
            <div className="order_card_selector_modifier">
              <div
                className="flechita_selector_adds"
                style={
                  show_ads === true ? { display: "flex" } : { display: "none" }
                }
              >
                <CaretDownFilled />
              </div>
              <div
                className="flechita_selector_adds"
                style={
                  show_ads === true ? { display: "none" } : { display: "flex" }
                }
              >
                <CaretRightFilled />
              </div>
              <div className="title_selector_modifier">
                Adicionales existentes
              </div>
            </div>
          </button>
          <div
            className="container_options_selector_modifier"
            style={
              show_ads === true ? { display: "grid" } : { display: "none" }
            }
          >
            <div>
              {products
                .filter(c => c.id_category === 1)
                .filter(b => b.type_product === "P")
                .filter(k => parseInt(k.code_product) !== id_food)
                .map(p => (
                  <div key={p.id_product}>
                    <button className="button_modifier" type="button">
                      <div className="order_button_modifier">
                        <div className="text_button_modifier">
                          {p.name_product}
                        </div>
                        <div>
                          <PlusSquareFilled />
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
            </div>
            <div>
              {products
                .filter(c => c.id_category === 1)
                .filter(b => b.type_product === "C")
                .filter(k => parseInt(k.code_product) !== id_category)
                .map(p => (
                  <div key={p.id_product}>
                    <button className="button_modifier" type="button">
                      <div className="order_button_modifier">
                        <div className="text_button_modifier">
                          {p.name_product}
                        </div>
                        <div>
                          <PlusSquareFilled />
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show_ads: state.show_ads,
  products: state.products,
  id_food: state.id_food,
  id_category: state.id_category,
  create_product: state.create_product,
  id_create_food: state.id_create_food
});

const mapDispatchToProps = dispatch => ({
  showAds() {
    dispatch({
      type: "SHOW_ADITIONALS",
      something_to_show: 1
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectorAditional);
