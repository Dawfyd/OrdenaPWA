import { connect } from 'react-redux';
import React from 'react';

function Form_0({alt_food, id_food, opt_food, adds}){
  return(
  <div>
    <hr />
    <div className='coments_title'>
      Comentarios
    </div>
    <hr />
    <input className='coments_food' type='text' placeholder='Agrega algun comentario...' />
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

export default connect(mapStateToProps, mapDispatchToProps)(Form_0);
