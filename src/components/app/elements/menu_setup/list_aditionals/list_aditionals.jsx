import React from "react";
import { connect } from "react-redux";
import { CheckSquareFilled } from "@ant-design/icons";

function ListAditional({ products, id_food, id_category }) {
  return (
    <div>
      <div>
        {products
          .filter((c) => c.id_category === 1)
          .filter((b) => b.type_product === "T")
          .map((p) => (
            <div key={p.id_product}>
              <button className="button_modifier" type="button">
                <div className="order_button_modifier">
                  <div className="text_button_modifier">{p.name_product}</div>
                  <div>
                    <CheckSquareFilled />
                  </div>
                </div>
              </button>
            </div>
          ))}
      </div>
      <div>
        {products
          .filter((c) => c.id_category === 1)
          .filter((b) => b.type_product === "P")
          .map((p) =>
            p.code_product.includes(id_food) ? (
              <div key={p.id_product}>
                <button className="button_modifier" type="button">
                  <div className="order_button_modifier">
                    <div className="text_button_modifier">{p.name_product}</div>
                    <div>
                      <CheckSquareFilled />
                    </div>
                  </div>
                </button>
              </div>
            ) : (
              ""
            )
          )}
      </div>
      <div>
        {products
          .filter((c) => c.id_category === 1)
          .filter((b) => b.type_product === "C")
          .map((p) =>
            p.code_product.includes(id_category) ? (
              <div key={p.id_product}>
                <button className="button_modifier" type="button">
                  <div className="order_button_modifier">
                    <div className="text_button_modifier">{p.name_product}</div>
                    <div>
                      <CheckSquareFilled />
                    </div>
                  </div>
                </button>
              </div>
            ) : (
              ""
            )
          )}
        <br />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  id_food: state.id_food,
  id_category: state.id_category,
});

const mapDispatchToProps = (dispatch) => ({
  ShowMods() {
    dispatch({
      type: "SHOW_MODIFIERS",
      something_to_show: 1,
    });
  },
  SwitchMods() {
    dispatch({
      type: "SWITCH_MODIFIERS",
      something_to_show: 1,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAditional);
