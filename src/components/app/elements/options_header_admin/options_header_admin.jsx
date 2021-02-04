import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import icon_home from "../../../../assets/images/nav_user/icon_home.svg";
import icon_home_active from "../../../../assets/images/nav_user/icon_home_active.svg";
import icon_account from "../../../../assets/images/nav_user/icon_account.svg";
import icon_account_active from "../../../../assets/images/nav_user/icon_account_active.svg";
import logout from "../../../../assets/images/option_header/logout.svg";

function OptionHeader() {
  const CurrentRoute = window.location.pathname;

  return (
    <div>
      <div>
        <Link to={"/restaurant/home"}>
          <button className="button_option_home">
            <img
              src={
                CurrentRoute === "/restaurant/home"
                  ? icon_home_active
                  : icon_home
              }
              className="icon_option_home"
              alt="icon_home"
            />
          </button>
          <p className="text_option_home">Home</p>
        </Link>
      </div>
      <div>
        <button className="button_option_account" id="B5">
          <img
            src={
              CurrentRoute === "/account" ? icon_account_active : icon_account
            }
            className="icon_option_home"
            alt="icon_account"
          />
        </button>
        <p className="text_option_account">Cuenta</p>
      </div>
      <div>
        <button className="button_option_logout" id="B5">
          <img src={logout} className="icon_option_home" alt="icon_account" />
        </button>
        <p className="text_option_logout">Salir</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OptionHeader);
