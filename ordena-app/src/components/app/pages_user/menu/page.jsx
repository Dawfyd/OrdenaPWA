import React, {Fragment} from 'react';
import LogoOrdena from '../../elements/logo_ordena/logo';
import NavUser from '../../elements/footer_nav_user/nav_user';
import Search from '../../elements/search_bar/search.js';
import FoodMenu from '../../elements/food_menu/menu_bar/menu_bar.jsx';
import '../../styles.scss';

function page(props) {
  return (
    <Fragment>
      <div className="page_menu">

        <header className = 'header_menu'>
          <LogoOrdena/>
        </header>

        <div className ='container_menu'>
          <div>
            <Search/>
          </div>
          <div className ='food_menu'>
            <FoodMenu/>
          </div>
        </div>

        <footer className = 'footer_menu'>
          <NavUser/>
        </footer>

      </div>
    </Fragment>

  );
}

export default page;
