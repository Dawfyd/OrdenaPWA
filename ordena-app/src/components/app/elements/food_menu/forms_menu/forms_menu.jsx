import { connect } from 'react-redux';
import React from 'react';
import Form_1 from '../form_1/form_1.jsx';
import Form_0 from '../form_0/form_0.jsx';
import Form_2 from '../form_2/form_2.jsx';
import Form_3 from '../form_3/form_3.jsx';


function Forms_food({id_food}){

  return(
      <div>
        <div>
          <Form_1 />
        </div>
        <div>
          <Form_2 />
        </div>
        <div>
          <Form_3 />
        </div>
        <div>
          <Form_0 />
        </div>

        <div className='buttons_order'>
          <div className='button_space'>
            <button className='button_back'>
              Volver
            </button>
          </div>
          <div className='button_space'>
            <button className='button_request'>
              Añadir
            </button>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = state => ({
  alt_food: state.alt_food,
  id_food: state.id_food,
  opt_food: state.opt_food,
  adds: state.adds,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Forms_food);
