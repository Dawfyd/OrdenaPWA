import React from "react";
import { connect } from "react-redux";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import arrow_left from "../../../../assets/images/cashier_register/arrow.svg";
import table_green from "../../../../assets/images/tables_list/table_green.svg";
import table_purple from "../../../../assets/images/tables_list/table_purple.svg";
import table_red from "../../../../assets/images/tables_list/table_red.svg";

const TablesListA = ({ spots, InfoSpot }) => (
  <div className="tables_list_admin">
    <div className="container_go_back_tables">
      <Link to={"/restaurant/home"}>
        <img src={arrow_left} className="go_back_arrow_tables" alt="arrow" />
      </Link>
      <p className="header_title_tables">Mesas</p>
    </div>

    {spots.map((d) => (
      <div
        key={d.id_spot}
        className="order_tables_list_admin"
        style={
          d.state_spot === 1
            ? { order: "3" }
            : d.state_spot === 2
            ? { order: "2" }
            : { order: "1" }
        }
      >
        <Avatar
          className="button_table_admin"
          src={
            d.state_spot === 1
              ? table_green
              : d.state_spot === 2
              ? table_purple
              : table_red
          }
        />

        <p className="number_table_admin" onClick={() => InfoSpot(d)}>
          {d.number_spot}
        </p>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  spots: state.spots,
});

const mapDispatchToProps = (dispatch) => ({
  InfoSpot(d) {
    dispatch({
      type: "CLICK_TABLE",
      select_table: d.number_spot,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesListA);
