import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Avatar } from "antd";
import table_green from "../../../../assets/images/tables_list/table_green.svg";
import table_purple from "../../../../assets/images/tables_list/table_purple.svg";
import table_red from "../../../../assets/images/tables_list/table_red.svg";

const TablesList = ({ spots, InfoSpot }) => (
  <div className="tables_list">
    {spots.map((d) => (
      <div
        key={d.id_spot}
        className="order_tables_list"
        style={
          d.state_spot === 1
            ? { order: "3" }
            : d.state_spot === 2
            ? { order: "2" }
            : { order: "1" }
        }
      >
        <Avatar
          className="button_table"
          src={
            d.state_spot === 1
              ? table_green
              : d.state_spot === 2
              ? table_purple
              : table_red
          }
        />
        <Link to={"/service/info_table"}>
          <p className="number_table" onClick={() => InfoSpot(d)}>
            {d.number_spot}
          </p>
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(TablesList);
