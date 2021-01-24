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

function NavService() {
  const CurrentRoute = window.location.pathname;

  return (
    <div>
      <hr className="separator_nav_service" />
      <nav className="nav_service">
        <div>
          <Link to={"/service/tables"}>
            <button className="button_tables" id="B1">
              <img
                src={
                  CurrentRoute === "/service/tables"
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
          <Link to={"/service/info_table"}>
            <button className="button_info_table" id="B2">
              <img
                src={
                  CurrentRoute === "/service/info_table"
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
          <Link to={"/service/chat_service"}>
            <button className="button_chat_service" id="B3">
              <img
                src={
                  CurrentRoute === "/service/chat_service"
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
          <Link to={"/service/code_qr"}>
            <button className="button_code_qr" id="B4">
              <img
                src={
                  CurrentRoute === "/service/code_qr"
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
          <Link to={"/service/account_service"}>
            <button className="button_account_service" id="B5">
              <img
                src={
                  CurrentRoute === "/service/account_service"
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

export default connect(mapStateToProps, mapDispatchToProps)(NavService);
