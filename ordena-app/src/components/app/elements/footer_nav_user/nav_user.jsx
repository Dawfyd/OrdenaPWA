import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import icon_home from '../../../../assets/images/nav_user/icon_home.svg';
import icon_home_active from '../../../../assets/images/nav_user/icon_home_active.svg';
import icon_menu from '../../../../assets/images/nav_user/icon_menu.svg';
import icon_menu_active from '../../../../assets/images/nav_user/icon_menu_active.svg';
import icon_chat from '../../../../assets/images/nav_user/icon_chat.svg';
import icon_payment from '../../../../assets/images/nav_user/icon_payment.svg';
import icon_account from '../../../../assets/images/nav_user/icon_account.svg';
import icon_account_active from '../../../../assets/images/nav_user/icon_account_active.svg';

const currentRoute= window.location.pathname;

const NavUser = () => (

    <div>
    <hr className='separator_nav_user'/>
      <nav className= 'nav_user'>

        <div>
          <Link to={'/home'}>
            <button className='button_home' id="B1">
              <img src ={currentRoute === '/home' ? icon_home_active : icon_home}
                   className="icon_home"
                   alt="logo1" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/menu'}>
            <button className='button_menu' id="B2">
              <img src ={currentRoute === '/menu' ? icon_menu_active : icon_menu}
                   className="icon_menu"
                   alt="logo2" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/chat'}>
            <button className='button_chat' id="B3">
              <img src={icon_chat} className="icon_chat" alt="logo3" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/payment'}>
            <button className='button_payment' id="B4">
              <img src={icon_payment} className="icon_payment" alt="logo4" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/account'}>
            <button className='button_account' id="B5">
              <img src ={currentRoute === '/account' ? icon_account_active : icon_account}
                   className="icon_account"
                   alt="logo5" />
            </button>
          </Link>
        </div>

      </nav>
    </div>
  )


  export default connect()(NavUser);
