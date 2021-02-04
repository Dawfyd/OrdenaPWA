import React from "react";
import { connect } from "react-redux";
import InfoServiceQR from "./info_code/info_code_qr_service";
import InfoSpotsQR from "./info_code/info_code_qr";
import AddSpot from "./add_spot/add_spot";

function SelectorQR({ select_codeqr, add_spot }) {
  return (
    <div>
      <div
        style={add_spot === false ? { display: "block" } : { display: "none" }}
      >
        <div
          style={
            select_codeqr === 0 ? { display: "block" } : { display: "none" }
          }
        >
          <InfoServiceQR />
        </div>

        <div
          style={
            select_codeqr !== 0 ? { display: "block" } : { display: "none" }
          }
        >
          <InfoSpotsQR />
        </div>
      </div>
      <div
        style={add_spot === true ? { display: "block" } : { display: "none" }}
      >
        <AddSpot />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  select_codeqr: state.select_codeqr,
  add_spot: state.add_spot,
});

export default connect(mapStateToProps)(SelectorQR);
