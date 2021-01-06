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
        <p className="qr_ready_service">
          Escanea el codigo QR proporcionado por el restaurante
        </p>
        <ul id="ellipse_qr_service">
          <img src={turn_qr} className="ellipse_turn_qr_service" alt="turn" />
          <img
            src={ellipse_turn}
            className="ellipse_reader_service"
            alt="ellipse"
          />
          <p>
            <QrReader
              className="qr_reader_service"
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
