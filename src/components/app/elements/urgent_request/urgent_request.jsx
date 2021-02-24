import React from "react";
import { connect } from "react-redux";
import icon_photo from "../../../../assets/images/urgent_request/icon_photo.svg";
import icon_salt from "../../../../assets/images/urgent_request/icon_salt.svg";
import icon_wifi from "../../../../assets/images/urgent_request/icon_wifi.svg";
import icon_napkins from "../../../../assets/images/urgent_request/icon_napkins.svg";
import icon_cutlery from "../../../../assets/images/urgent_request/icon_cutlery.svg";
import icon_clean from "../../../../assets/images/urgent_request/icon_clean.svg";
import icon_cash from "../../../../assets/images/urgent_request/icon_cash.svg";
import icon_card from "../../../../assets/images/urgent_request/icon_card.svg";
import icon_pickup from "../../../../assets/images/urgent_request/icon_pickup.svg";
import TextAreaHook from "../text_area/text_area_input";

function UrgentRequest() {
  return (
    <div className="container_request">
      <p className="request_text">¿Cómo te podemos ayudar?</p>
      <div className="request_list">
        <button className="button_request">
          <img src={icon_photo} className="icon_request" alt="icono foto" />
          <p className="text_icon">Foto</p>
        </button>
        <button className="button_request">
          <img src={icon_pickup} className="icon_request" alt="icono recoger" />
          <p className="text_icon">Recoger</p>
        </button>
        <button className="button_request">
          <img
            src={icon_napkins}
            className="icon_request"
            alt="icono servilletas"
          />
          <p className="text_icon">Servilletas</p>
        </button>
        <button className="button_request">
          <img src={icon_salt} className="icon_request" alt="icono sal" />
          <p className="text_icon">Sal</p>
        </button>
        <button className="button_request">
          <img
            src={icon_cutlery}
            className="icon_request"
            alt="icono cubiertos"
          />
          <p className="text_icon">Cubiertos</p>
        </button>
        <button className="button_request">
          <img
            src={icon_wifi}
            className="icon_request"
            alt="icono clave wifi"
          />
          <p className="text_icon">Clave Wifi</p>
        </button>
        <button className="button_request">
          <img src={icon_clean} className="icon_request" alt="icono limpiar" />
          <p className="text_icon">Limpiar</p>
        </button>
        <button className="button_request">
          <img
            src={icon_cash}
            className="icon_request"
            alt="icono dinero en efectivo"
          />
          <p className="text_icon">Cuenta en Efectivo</p>
        </button>
        <button className="button_request">
          <img
            src={icon_card}
            className="icon_request"
            alt="icono tarjeta de credito"
          />
          <p className="text_icon">Cuenta con Tarjeta</p>
        </button>
      </div>
      <p className="request_textbox">¿Necesitas otra cosa?</p>
      <div>
        <TextAreaHook />
      </div>
    </div>
  );
}

export default connect()(UrgentRequest);
