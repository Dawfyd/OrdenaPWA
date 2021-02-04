import React from "react";
import { connect } from "react-redux";
import QRCode from "qrcode.react";

function InfoCodeService({ spots, select_codeqr }) {
  const DownloadQrs = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "MeserosQR.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="container_info_code">
      <button className="button_info_code_qr">
        <p className="text_cashier">Meseros</p>
      </button>
      <div className="info_code">
        <p className="text_codeqr">
          Descarga e imprime este codigo QR para que tus meseros puedan
          escanearlo y vincularse a la App.
        </p>
        <div>
          <QRCode
            id="123456"
            value="123456"
            size={320}
            level={"H"}
            includeMargin={true}
            onClick={DownloadQrs}
          />
          <p className="text_download"> Click en el codigo QR para descargar</p>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  spots: state.spots,
  select_codeqr: state.select_codeqr,
  add_spot: state.add_spot,
});

export default connect(mapStateToProps)(InfoCodeService);
