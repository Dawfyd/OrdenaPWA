import React, { Component } from "react";
import QrReader from "react-qr-reader";
import turn_qr from "../../../../assets/images/reader_qr/turn_qr.svg";
import ellipse_turn from "../../../../assets/images/reader_qr/ellipse_qr.svg";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
      facingMode: "user",
      legacyMode: false,
      delay: 500,
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    this.setState({ legacyMode: true }, console.error(err));
  };

  choiceButton = () => {
    if (this.state.facingMode === "environment") {
      this.setState({
        facingMode: "user",
      });
    } else {
      this.setState({
        facingMode: "environment",
      });
    }
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
              delay={this.state.delay}
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
