import React, {Fragment} from 'react';
import NavService from '../../elements/footer_nav_service/nav_service';



function page(props) {
  return (
    <Fragment>
      <div className="page_tables">


        <div className ='container_tables_list'>

        </div>

        <footer className = 'footer_tables'>
          <NavService/>
        </footer>

      </div>
    </Fragment>

  );
}

export default page;
