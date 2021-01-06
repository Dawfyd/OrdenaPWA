import React from "react";
import { connect } from "react-redux";
import { Avatar } from "antd";
import table_green from "../../../../assets/images/tables_list/table_green.svg";
import table_purple from "../../../../assets/images/tables_list/table_purple.svg";
import table_red from "../../../../assets/images/tables_list/table_red.svg";

const TablesListA = ({ data_tables, info_table }) => (
  <div className="tables_list_admin">
    {data_tables.map((d) => (
      <div
        key={d.id}
        className="order_tables_list_admin"
        style={
          d.state_table === 1
            ? { order: "3" }
            : d.state_table === 2
            ? { order: "2" }
            : { order: "1" }
        }
      >
        <Avatar
          className="button_table_admin"
          src={
            d.state_table === 1
              ? table_green
              : d.state_table === 2
              ? table_purple
              : table_red
          }
        />

        <p className="number_table_admin" onClick={() => info_table(d)}>
          {d.number}
        </p>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  data_tables: state.data_tables,
});

const mapDispatchToProps = (dispatch) => ({
  info_table(d) {
    dispatch({
      type: "CLICK_TABLE",
      select_table: d.number,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesListA);
