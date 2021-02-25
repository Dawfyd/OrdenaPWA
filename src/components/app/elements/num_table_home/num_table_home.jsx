import React from "react";
import num_table from "../../../../assets/images/num_table_home/num_table.svg";
import icon_text from "../../../../assets/images/num_table_home/icon_text.svg";

const NumTable = ({ persons }) => (
  <div>
    <img src={num_table} className="num_table" alt="num" />

    <p className="text_num_table">12</p>
    <ul>
      <p className="text_user"> 3 usuarios activos y 3 usuarios ya pagaron.</p>
      <img src={icon_text} className="icon_text" alt="num" />
    </ul>
  </div>
);
export default NumTable;
