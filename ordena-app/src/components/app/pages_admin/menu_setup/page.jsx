import React, { Fragment } from "react";
import LogoOrdena from "../../elements/logo_ordena/logo";
import List_all from "../../elements/menu_setup/list_all/list_all.jsx";
import "../../styles.scss";
{
  /*

  import List_category from "../../elements/menu_setup/list_category/list_category.jsx";
  import List_product from "../../elements/menu_setup/list_product/list_product.jsx";
  */
}

function page(props) {
  return (
    <Fragment>
      <div className="page_setup_menu">
        <header className="header_setup_menu">
          <LogoOrdena />
        </header>
        <div className="container_setup_menu">
          <div className="div_menu_setup">
            <div className="div_head_menu_setup">
              <div className="head_menu_setup">
                <div className="title_menu_setup">Menú</div>
                <div className="search_setup_menu"> Aca va la search setup</div>
              </div>
              {/*  <hr id="line_head_menu_setup" /> */}
            </div>
            <div className="content_menu_setup">
              <div className="all_menu_setup">
                <List_all />
              </div>
              <div className="category_menu_setup">
                part_2 / Aca se crean los productos
              </div>
              <div className="product_menu_setup">
                part_3 / Aca se crean adiciones y modificadores, ademas adiciona
                precios
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default page;
