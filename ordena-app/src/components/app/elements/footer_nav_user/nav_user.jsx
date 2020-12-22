import React from 'react';
import { Link } from 'react-router-dom';
import icon_home from '../../../../assets/images/nav_user/icon_home.svg';
import icon_menu from '../../../../assets/images/nav_user/icon_menu.svg';
import icon_chat from '../../../../assets/images/nav_user/icon_chat.svg';
import icon_payment from '../../../../assets/images/nav_user/icon_payment.svg';
import icon_account from '../../../../assets/images/nav_user/icon_account.svg';

const Nav_user = () => (

    <div>
    <hr className='separator'/>
      <nav className= 'nav_user'>

        <div>
          <Link to={'/home'}>
            <button className='button_home' id="B1">
              <img src={icon_home} className="icon_home" alt="logo1" />
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/menu'}>
            <button className='button_menu' id="B2">
              <img src={icon_menu} className="icon_menu" alt="logo2" />
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
              <img src={icon_account} className="icon_account" alt="logo5" />
            </button>
          </Link>
        </div>

      </nav>
    </div>
  )


  export default (Nav_user)
