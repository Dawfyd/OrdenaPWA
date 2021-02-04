import React from "react";
import { connect } from "react-redux";

function AddSpot({ spots, select_codeqr }) {
  return (
    <div className="container_info_code">
      <button className="button_add_spot">
        <p className="text_cashier">Agregar Mesa</p>
      </button>
      <div className="info_code">
        <p className="text_codeqr">
          Descarga e imprime este codigo QR para que tus meseros puedan
          escanearlo y vincularse a la App.
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  spots: state.spots,
  select_codeqr: state.select_codeqr,
  add_spot: state.add_spot,
});

export default connect(mapStateToProps)(AddSpot);
