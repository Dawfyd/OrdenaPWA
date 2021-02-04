import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import icon_tables from "../../../../assets/images/nav_user/icon_home.svg";
import icon_tables_active from "../../../../assets/images/nav_user/icon_home_active.svg";
import icon_info_table from "../../../../assets/images/nav_service/icon_info_table.svg";
import icon_info_table_active from "../../../../assets/images/nav_service/icon_info_table_active.svg";
import icon_chat_service from "../../../../assets/images/nav_user/icon_chat.svg";
import icon_chat_service_active from "../../../../assets/images/nav_user/icon_chat_active.svg";
import icon_code_qr from "../../../../assets/images/nav_service/icon_code_qr.svg";
import icon_code_qr_active from "../../../../assets/images/nav_service/icon_code_qr_active.svg";
import icon_account_service from "../../../../assets/images/nav_user/icon_account.svg";
import icon_account_service_active from "../../../../assets/images/nav_user/icon_account_active.svg";

function NavAdmin() {
  const CurrentRoute = window.location.pathname;

  return (
    <div>
      <hr className="separator_nav_admin" />
      <nav className="nav_admin">
        <div>
          <Link to={"/restaurant/tables_admin"}>
            <button className="button_tables" id="B1">
              <img
                src={
                  CurrentRoute === "/restaurant/tables_admin"
                    ? icon_tables_active
                    : icon_tables
                }
                className="icon_tables"
                alt="icon_home"
              />
            </button>
          </Link>
        </div>

        <div>
          <Link to={"/restaurant/info_table_admin"}>
            <button className="button_info_table" id="B2">
              <img
                src={
                  CurrentRoute === "/restaurant/info_table_admin"
                    ? icon_info_table_active
                    : icon_info_table
                }
                className="icon_info_table"
                alt="icon_info_table"
              />
            </button>
          </Link>
        </div>

        <div>
          <Link to={"/restaurant/chat_admin"}>
            <button className="button_chat_service" id="B3">
              <img
                src={
                  CurrentRoute === "/restaurant/chat_admin"
                    ? icon_chat_service_active
                    : icon_chat_service
                }
                className="icon_chat_service"
                alt="icon_chat"
              />
            </button>
          </Link>
        </div>

        <div>
          <Link to={"/restaurant/code_qr_admin"}>
            <button className="button_code_qr_admin" id="B4">
              <img
                src={
                  CurrentRoute === "/restaurant/code_qr_admin"
                    ? icon_code_qr_active
                    : icon_code_qr
                }
                className="icon_code_qr"
                alt="icon_code_qr"
              />
            </button>
          </Link>
        </div>

        <div>
          <Link to={"/restaurant/account_admin"}>
            <button className="button_account_service_admin" id="B5">
              <img
                src={
                  CurrentRoute === "/restaurant/account_admin"
                    ? icon_account_service_active
                    : icon_account_service
                }
                className="icon_account_service"
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

export default connect(mapStateToProps, mapDispatchToProps)(NavAdmin);
