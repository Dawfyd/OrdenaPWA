import React from "react";
import { connect } from "react-redux";
import InfoServiceQR from "./info_code_qr_service";
import InfoSpotsQR from "./info_code_qr";

function SelectorQR({ select_codeqr }) {
  return (
    <div>
      <div
        style={select_codeqr === 0 ? { display: "block" } : { display: "none" }}
      >
        <InfoServiceQR />
      </div>

      <div
        style={select_codeqr !== 0 ? { display: "block" } : { display: "none" }}
      >
        <InfoSpotsQR />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  select_codeqr: state.select_codeqr,
});

export default connect(mapStateToProps)(SelectorQR);
