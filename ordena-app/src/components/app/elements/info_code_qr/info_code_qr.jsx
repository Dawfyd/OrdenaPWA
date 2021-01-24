import React from "react";
import { connect } from "react-redux";
import QRCode from "qrcode.react";

function InfoCodeQR({ spots, select_codeqr }) {
  let $ = "";
  const DownloadQrs = () => {
    const canvas = document.getElementById("12345");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = select_codeqr + ".png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="container_info_code">
      {spots
        .filter((a) => a.number_spot === select_codeqr)
        .map((d) => (
          <div key={d.id_spot}>
            <button className="button_cashier">
              <p className="text_cashier">Mesa {d.number_spot}</p>
            </button>
            <div className="info_code">
              <p className="text_codeqr">
                Descarga e imprime este codigo QR y ubicalo en alguna de las
                mesas.
              </p>
              <div>
                <QRCode
                  id="12345"
                  value={$.concat(
                    "http://www.ordena.com.co/register/",
                    d.id_spot
                  )}
                  size={320}
                  level={"H"}
                  includeMargin={true}
                  onClick={DownloadQrs}
                />
                <p className="text_download">
                  {" "}
                  Click en el codigo QR para descargar
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  spots: state.spots,
  select_codeqr: state.select_codeqr,
});

export default connect(mapStateToProps)(InfoCodeQR);
