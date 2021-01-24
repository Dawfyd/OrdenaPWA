import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import icon_home from "../../../../assets/images/nav_user/icon_home.svg";
import icon_home_active from "../../../../assets/images/nav_user/icon_home_active.svg";
import icon_menu from "../../../../assets/images/nav_user/icon_menu.svg";
import icon_menu_active from "../../../../assets/images/nav_user/icon_menu_active.svg";
import icon_chat from "../../../../assets/images/nav_user/icon_chat.svg";
import icon_chat_active from "../../../../assets/images/nav_user/icon_chat_active.svg";
import icon_payment from "../../../../assets/images/nav_user/icon_payment.svg";
import icon_payment_active from "../../../../assets/images/nav_user/icon_payment_active.svg";
import icon_account from "../../../../assets/images/nav_user/icon_account.svg";
import icon_account_active from "../../../../assets/images/nav_user/icon_account_active.svg";

function NavUser() {
  const CurrentRoute = window.location.pathname;

  return (
    <div>
      <hr className="separator_nav_user" />
      <nav className="nav_user">
        <div>
          <Link to={"/home"}>
            <button className="button_home" id="B1">
              <img
                src={CurrentRoute === "/home" ? icon_home_active : icon_home}
                className="icon_home"
                alt="icon_home"
              />
            </button>
          </Link>
        </div>

        <div>
          <Link to={"/menu"}>
            <button className="button_menu" id="B2">
              <img
                src={CurrentRoute === "/menu" ? icon_menu_active : icon_menu}
                className="icon_menu"
                alt="icon_menu"
              />
            </button>
          </Link>
        </div>

        <div>
          <Link to={"/chat"}>
            <button className="button_chat" id="B3">
              <img
                src={CurrentRoute === "/chat" ? icon_chat_active : icon_chat}
                className="icon_chat"
                alt="icon_chat"
              />
            </button>
          </Link>
        </div>

        <div>
          <Link to={"/payment"}>
            <button className="button_payment" id="B4">
              <img
                src={
                  CurrentRoute === "/payment"
                    ? icon_payment_active
                    : icon_payment
                }
                className="icon_payment"
                alt="icon_payment"
              />
            </button>
          </Link>
        </div>

        <div>
          <Link to={"/account"}>
            <button className="button_account_nav" id="B5">
              <img
                src={
                  CurrentRoute === "/account"
                    ? icon_account_active
                    : icon_account
                }
                className="icon_account_nav"
                alt="icon_account"
              />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavUser);
