import React from "react";
import { connect } from "react-redux";
import { Avatar } from "antd";
import table_green from "../../../../assets/images/tables_list/table_green.svg";
import table_purple from "../../../../assets/images/tables_list/table_purple.svg";
import table_red from "../../../../assets/images/tables_list/table_red.svg";

const TablesListA = ({ spots, InfoSpot, select_table }) => (
  <div className="tables_list_admin">
    <div className="container_go_back_tables">
      <p className="header_title_tables">Mesas</p>
      <button className="button_cashier_tables">
        <p className="text_cashier_admin">Mesa {select_table}</p>
      </button>
    </div>

    {spots.map((d) => (
      <div
        key={d.id}
        className="order_tables_list_admin"
        style={
          d.state === 1
            ? { order: "3" }
            : d.state === 2
            ? { order: "2" }
            : { order: "1" }
        }
      >
        <Avatar
          className="button_table_admin"
          src={
            d.state === 1
              ? table_green
              : d.state === 2
              ? table_purple
              : table_red
          }
        />

        <p className="number_table_admin" onClick={() => InfoSpot(d)}>
          {d.number}
        </p>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  spots: state.spots,
  select_table: state.select_table,
});

const mapDispatchToProps = (dispatch) => ({
  InfoSpot(d) {
    dispatch({
      type: "CLICK_TABLE",
      select_table: d.number,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesListA);
