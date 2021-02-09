import React from "react";
import { connect } from "react-redux";
import { Avatar } from "antd";
import table_green from "../../../../assets/images/tables_list/table_green.svg";
import { CaretRightFilled, CaretDownFilled } from "@ant-design/icons";

const ListSpot = ({
  spots,
  CreateSpot,
  SelectSpot,
  SelectService,
  select_codeqr,
}) => (
  <div className="spot_setup_container">
    <p className="header_qr_text">Administra tus codigos QR</p>

    <button className="button_spots">
      <div
        className="bar_list_spot"
        style={
          select_codeqr === 0
            ? { background: "#9B26B6" }
            : { background: "#32c755" }
        }
      >
        {""}
      </div>
      <div
        className="arrow_service_off"
        style={select_codeqr === 0 ? { display: "none" } : { display: "flex" }}
      >
        <CaretRightFilled />
      </div>
      <div
        className="arrow_service_on"
        style={select_codeqr !== 0 ? { display: "none" } : { display: "flex" }}
      >
        <CaretDownFilled />
      </div>

      <p className="service_qr_spot" onClick={() => SelectService()}>
        Codigo QR para vincular meseros
      </p>
    </button>
    <p className="service_qr_text">Configura tus mesas</p>

    <div className="tables_spots_admin">
      {spots.map((d) => (
        <div
          key={d.id}
          className="order_tables_spots_admin"
          style={{ order: d.number }}
        >
          <Avatar className="button_spots_admin" src={table_green} />

          <p className="number_spots_admin" onClick={() => SelectSpot(d)}>
            {d.number}
          </p>
        </div>
      ))}
    </div>

    <button className="button_added_spots" onClick={() => CreateSpot()}>
      <div>+ Agregar Mesa</div>
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  spots: state.spots,
  select_codeqr: state.select_codeqr,
  add_spot: state.add_spot,
});

const mapDispatchToProps = (dispatch) => ({
  CreateSpot() {
    dispatch({
      type: "ADD_SPOT",
      add_spot: true,
    });
  },
  SelectSpot(d) {
    dispatch({
      type: "SELECT_SPOT",
      select_codeqr: d.number,
      add_spot: false,
    });
  },
  SelectService() {
    dispatch({
      type: "SELECT_SERVICE",
      select_codeqr: 0,
      add_spot: false,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListSpot);
