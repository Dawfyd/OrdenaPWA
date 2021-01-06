import React from "react";
import ellipse_turn from "../../../../assets/images/table_num/ellipse_turn.svg";
import turn from "../../../../assets/images/table_num/turn.svg";

const TableNum = () => (
  <div className="drop">
    <ul id="button">
      <li>
        <p className="letter">¿</p>
        <p className="letter_1">Mesa para cuántas personas</p>
        <p className="letter_2">?</p>
      </li>
      <li>
        <form className="navbar">
          <select className="num">
            <option className="num_0" value="0"></option>
            <option className="num_1" value="1">
              1
            </option>
            <option className="num_2" value="2">
              2
            </option>
            <option className="num_3" value="3">
              3
            </option>
            <option className="num_4" value="4">
              4
            </option>
            <option className="num_5" value="5">
              5
            </option>
          </select>
        </form>
      </li>
    </ul>
    <ul id="turn">
      <img src={turn} className="letter_turn" alt="logo1" />
    </ul>
    <ul id="ellipse">
      <img src={ellipse_turn} className="ellipse_turn" alt="logo2" />
      <p className="letter_ellipse">?</p>
    </ul>
  </div>
);
export default TableNum;
