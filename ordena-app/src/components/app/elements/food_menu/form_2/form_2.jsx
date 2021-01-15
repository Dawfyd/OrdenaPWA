import { connect } from "react-redux";
import React from "react";

function Form_2({ alt_food, id_food, opt_food, adds }) {
  return (
    <div>
      <hr
        style={
          alt_food.filter(b => b.id_alt === id_food).length === 0
            ? { display: "none" }
            : { display: "flex" }
        }
      />
      <div
        className="alt_opt"
        style={
          alt_food.filter(b => b.id_alt === id_food).length === 0
            ? { display: "none" }
            : { display: "flex" }
        }
      >
        No Quieres Algún Ingrediente
      </div>
      <hr
        style={
          alt_food.filter(b => b.id_alt === id_food).length === 0
            ? { display: "none" }
            : { display: "flex" }
        }
      />
      {alt_food
        .filter(b => b.id_alt === id_food)
        .map(j => (
          <div className="alt_foodi" key={j.id}>
            <div className="alt_text">
              <label for="item_1">{j.name}</label>
            </div>
            <div className="alt_checkbox">
              <input type="checkbox" name="item_1" />
            </div>
          </div>
        ))}
    </div>
  );
}
const mapStateToProps = state => ({
  alt_food: state.alt_food,
  id_food: state.id_food,
  opt_food: state.opt_food,
  adds: state.adds
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Form_2);
