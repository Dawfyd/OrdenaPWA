import React from "react";
import { connect } from "react-redux";
import {
  CaretRightFilled,
  CaretDownFilled,
  PlusSquareFilled
} from "@ant-design/icons";

function SelectorModifier({
  showMods,
  show_mods,
  modifiers,
  id_food,
  id_category,
  create_product,
  id_create_food,
  adMods
}) {
  if (create_product === true) {
    return (
      <div className="container_selector_modifier">
        <div className="card_selector_modifier" key="">
          <button
            className="button_selector_modifier"
            onClick={() => showMods()}
            type="button"
          >
            <div className="order_card_selector_modifier">
              <div
                className="flechita_selector_modifier"
                style={
                  show_mods === true ? { display: "flex" } : { display: "none" }
                }
              >
                <CaretDownFilled />
              </div>
              <div
                className="flechita_selector_modifier"
                style={
                  show_mods === true ? { display: "none" } : { display: "flex" }
                }
              >
                <CaretRightFilled />
              </div>
              <div className="title_selector_modifier">
                Modificadores existentes
              </div>
            </div>
          </button>
          <div
            className="container_options_selector_modifier"
            style={
              show_mods === true ? { display: "grid" } : { display: "none" }
            }
          >
            <div>
              {modifiers
                .filter(b => b.type_modifier === "P")
                .filter(k => parseInt(k.code_modifier) !== id_create_food)
                .map(p => (
                  <div key={p.id_modifier}>
                    <button
                      className="button_modifier"
                      type="button"
                      onClick={() => adMods(p)}
                    >
                      <div className="order_button_modifier">
                        <div className="text_button_modifier">
                          {p.name_modifier}
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
              {modifiers
                .filter(b => b.type_modifier === "C")
                .filter(k => parseInt(k.code_modifier) !== id_category)
                .map(p => (
                  <div key={p.id_modifier}>
                    <button
                      className="button_modifier"
                      type="button"
                      onClick={() => adMods(p)}
                    >
                      <div className="order_button_modifier">
                        <div className="text_button_modifier">
                          {p.name_modifier}
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
            onClick={() => showMods()}
            type="button"
          >
            {" "}
            <div className="order_card_selector_modifier">
              <div
                className="flechita_selector_modifier"
                style={
                  show_mods === true ? { display: "flex" } : { display: "none" }
                }
              >
                <CaretDownFilled />
              </div>
              <div
                className="flechita_selector_modifier"
                style={
                  show_mods === true ? { display: "none" } : { display: "flex" }
                }
              >
                <CaretRightFilled />
              </div>
              <div className="title_selector_modifier">
                Modificadores existentes
              </div>
            </div>
          </button>
          <div
            className="container_options_selector_modifier"
            style={
              show_mods === true ? { display: "grid" } : { display: "none" }
            }
          >
            <div>
              {modifiers
                .filter(b => b.type_modifier === "P")
                .filter(k => parseInt(k.code_modifier) !== id_food)
                .map(p => (
                  <div key={p.id_modifier}>
                    <button
                      className="button_modifier"
                      type="button"
                      onClick={() => adMods(p)}
                    >
                      <div className="order_button_modifier">
                        <div className="text_button_modifier">
                          {p.name_modifier}
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
              {modifiers
                .filter(b => b.type_modifier === "C")
                .filter(k => parseInt(k.code_modifier) !== id_category)
                .map(p => (
                  <div key={p.id_modifier}>
                    <button
                      className="button_modifier"
                      type="button"
                      onClick={() => adMods(p)}
                    >
                      <div className="order_button_modifier">
                        <div className="text_button_modifier">
                          {p.name_modifier}
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
  show_mods: state.show_mods,
  modifiers: state.modifiers,
  id_food: state.id_food,
  id_category: state.id_category,
  create_product: state.create_product,
  id_create_food: state.id_create_food
});

const mapDispatchToProps = dispatch => ({
  showMods() {
    dispatch({
      type: "SHOW_MODIFIERS",
      something_to_show: 1
    });
  },
  adMods(p) {
    dispatch({
      type: "ADD_MODIFIERS",
      something_to_show: 1,
      id_modifier: p.id_modifier
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectorModifier);
