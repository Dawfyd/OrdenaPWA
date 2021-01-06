import React, { Component } from "react";
import QrReader from "react-qr-reader";
import turn_qr from "../../../../assets/images/reader_qr/turn_qr.svg";
import ellipse_turn from "../../../../assets/images/reader_qr/ellipse_qr.svg";

class Test extends Component {
  state = {
    result: "No result",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <p className="qr_ready">Tú mesa esta lista, escanea el QR asignado</p>
        <ul id="ellipse_qr">
          <img src={turn_qr} className="ellipse_turn_qr" alt="turn" />
          <img src={ellipse_turn} className="ellipse_reader" alt="ellipse" />
          <p>
            <QrReader
              className="qr_reader"
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "" }}
            />
            <p>{this.state.result}</p>
          </p>
        </ul>
      </div>
    );
  }
}
export default Test;
