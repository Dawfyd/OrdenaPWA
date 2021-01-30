import { connect } from "react-redux";
import React from "react";

function Form_3({ alt_food, id_food, opt_food, adds }) {
  return (
    <div>
      <hr
        style={
          adds.filter(b => b.id_add === id_food).length === 0
            ? { display: "none" }
            : { display: "flex" }
        }
      />
      <div
        className="adds_opt"
        style={
          adds.filter(b => b.id_add === id_food).length === 0
            ? { display: "none" }
            : { display: "flex" }
        }
      >
        Adicionales
      </div>
      <hr
        style={
          adds.filter(b => b.id_add === id_food).length === 0
            ? { display: "none" }
            : { display: "flex" }
        }
      />
      {adds
        .filter(b => b.id_add === id_food)
        .map(j => (
          <div className="alt_foodi" key={j.id}>
            <div className="alt_text">{j.name}</div>

            <div className="plus_food">+</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form_3);
