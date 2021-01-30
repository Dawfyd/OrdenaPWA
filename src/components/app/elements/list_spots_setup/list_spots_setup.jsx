import React from "react";
import { connect } from "react-redux";

const ListSpot = ({ spots, CreateSpot, SelectSpot, SelectService }) => (
  <div className="spot_setup_container">
    <p className="header_qr_text">Administra tus codigos QR</p>

    <p className="service_qr_spot" onClick={() => SelectService()}>
      Codigo QR para vincular meseros
    </p>

    <p className="service_qr_text">Configura tus mesas</p>

    {spots.map((d) => (
      <div key={d.id_spot}>
        <p className="service_qr_spot" onClick={() => SelectSpot(d)}>
          Mesa numero {d.number_spot}
        </p>
      </div>
    ))}
    <button className="button_add_spot" onClick={() => CreateSpot()}>
      <div>+ Agregar Mesa</div>
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  spots: state.spots,
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
      select_codeqr: d.number_spot,
    });
  },
  SelectService() {
    dispatch({
      type: "SELECT_SERVICE",
      select_codeqr: 0,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListSpot);
