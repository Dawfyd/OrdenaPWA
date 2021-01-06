import React from "react";
import { Link } from "react-router-dom";
import pre_order from "../../../../assets/images/pre_order/pre_order.svg";

const PreOrder = () => (
  <div>
    <Link to={"/menu"}>
      <img src={pre_order} className="pre_order" alt="logo" />
    </Link>
  </div>
);

export default PreOrder;
