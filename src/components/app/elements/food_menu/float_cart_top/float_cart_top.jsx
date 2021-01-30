import React from 'react';
import { connect } from 'react-redux';


const Float_cart_top = ({count_resume, price_resume, show_menu}) =>(
  <div>
    <button className='float_cart' onClick={()=> show_menu()}>
      <div className='text_cart'>
        Resumen Ordena: {count_resume} ud - ${price_resume} COP
      </div>
    </button>
  </div>

)

const mapStateToProps = state => ({
  ud_cart: state.ud_cart,
  price_cart: state.price_cart,
  count_resume: state.count_resume,
  price_resume: state.price_resume,

})

const mapDispatchToProps = dispatch => ({
  show_menu() {
    dispatch({
      type: "SHOW_MENU",
      showOrder:false,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps) (Float_cart_top);
