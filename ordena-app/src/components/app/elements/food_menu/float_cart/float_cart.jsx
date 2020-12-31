import React from 'react';
import { connect } from 'react-redux';


const Float_cart = ({count_resume, price_resume}) =>(
  <div className='float_cart'>

      <div className='text_cart'>
        Resumen Ordena: {count_resume} ud - ${price_resume} COP
      </div>

  </div>

)

const mapStateToProps = state => ({
  ud_cart: state.ud_cart,
  price_cart: state.price_cart,
  count_resume: state.count_resume,
  price_resume: state.price_resume,

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps) (Float_cart);
