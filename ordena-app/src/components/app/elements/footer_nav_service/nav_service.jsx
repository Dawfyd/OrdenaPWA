import React from 'react';
import { Link } from 'react-router-dom';
import icon_tables from '../../../../assets/images/nav_user/icon_home.svg';
import icon_tables_active from '../../../../assets/images/nav_user/icon_home_active.svg';
import icon_info_table from '../../../../assets/images/nav_service/icon_info_table.svg';
import icon_chat_service from '../../../../assets/images/nav_user/icon_chat.svg';
import icon_code_qr from '../../../../assets/images/nav_service/icon_code_qr.svg';
import icon_account_service from '../../../../assets/images/nav_user/icon_account.svg';
import { connect } from 'react-redux';

var currentRoute= window.location.pathname;


const NavService = () => (

    <div>
    <hr className='separator_nav_service'/>
      <nav className= 'nav_service'>

        <div>
          <Link to={'/service/tables'}>
            <button className='button_tables' id="B1">
              <img src ={currentRoute === '/service/tables' ? icon_tables_active : icon_tables}
              className="icon_tables"
              alt="logo1" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/service/info_table'}>
            <button className='button_info_table' id="B2">
              <img src={icon_info_table} className="icon_info_table" alt="logo2" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/service/chat_service'}>
            <button className='button_chat_service' id="B3">
              <img src={icon_chat_service} className="icon_chat_service" alt="logo3" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/service/code_qr'}>
            <button className='button_code_qr' id="B4">
              <img src={icon_code_qr} className="icon_code_qr" alt="logo4" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/service/account_service'}>
            <button className='button_account_service' id="B5">
              <img src={icon_account_service} className="icon_account_service" alt="logo5" />
            </button>
          </Link>
        </div>

      </nav>
    </div>
  )


  export default connect()(NavService);
