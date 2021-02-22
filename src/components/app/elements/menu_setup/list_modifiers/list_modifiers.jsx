import React from "react";
import { connect } from "react-redux";
import { CheckSquareFilled } from "@ant-design/icons";

function ListModifier({ modifiers, id_food, id_category }) {
  return (
    <div>
      <div>
        {modifiers
          .filter(b => b.type_modifier === "T")
          .map(p => (
            <div key={p.id}>
              <button className="button_list_modifier" type="button">
                <div className="order_button_modifier">
                  <div className="text_button_modifier_list">
                    {p.name_modifier}
                  </div>
                  <div>
                    <CheckSquareFilled />
                  </div>
                </div>
              </button>
            </div>
          ))}
      </div>
      <div>
        {modifiers
          .filter(b => b.type_modifier === "P")
          .map(p =>
            p.code_modifier.includes(id_food) ? (
              <div key={p.id}>
                <button className="button_list_modifier" type="button">
                  <div className="order_button_modifier">
                    <div className="text_button_modifier_list">
                      {p.name_modifier}
                    </div>
                    <div>
                      <CheckSquareFilled />
                    </div>
                  </div>
                </button>
              </div>
            ) : (
              " "
            )
          )}
      </div>
      <div>
        {modifiers
          .filter(b => b.type_modifier === "C")
          .map(p =>
            p.code_modifier.includes(id_category) ? (
              <div key={p.id}>
                <button className="button_list_modifier" type="button">
                  <div className="order_button_modifier">
                    <div className="text_button_modifier_list">
                      {p.name_modifier}
                    </div>
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

const mapStateToProps = state => ({
  modifiers: state.modifiers,
  id_food: state.id_food,
  id_category: state.id_category
});

const mapDispatchToProps = dispatch => ({
  ShowMods() {
    dispatch({
      type: "SHOW_MODIFIERS",
      something_to_show: 1
    });
  },
  SwitchMods() {
    dispatch({
      type: "SWITCH_MODIFIERS",
      something_to_show: 1
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListModifier);
