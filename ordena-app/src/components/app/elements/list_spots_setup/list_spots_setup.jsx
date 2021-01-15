import React from "react";
import { connect } from "react-redux";

const ListSpot = ({ spots, create_spot, select_spot, select_service }) => (
  <div className="spot_setup_container">
    <p className="header_qr_text">Administra tus codigos QR</p>

    <p className="service_qr_spot" onClick={() => select_service()}>
      Codigo QR para vincular meseros
    </p>

    <p className="service_qr_text">Configura tus mesas</p>

    {spots.map((d) => (
      <div key={d.id_spot}>
        <p className="service_qr_spot" onClick={() => select_spot(d)}>
          Mesa numero {d.number_spot}
        </p>
      </div>
    ))}
    <button className="button_add_spot" onClick={() => create_spot()}>
      <div>+ Agregar Mesa</div>
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  spots: state.spots,
});

const mapDispatchToProps = (dispatch) => ({
  create_spot() {
    dispatch({
      type: "ADD_SPOT",
      add_spot: true,
    });
  },
  select_spot(d) {
    dispatch({
      type: "SELECT_SPOT",
      select_codeqr: d.number_spot,
    });
  },
  select_service() {
    dispatch({
      type: "SELECT_SERVICE",
      select_codeqr: 0,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListSpot);
