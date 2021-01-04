import React from 'react';
import { connect } from 'react-redux';
import CashierRegister from '../cashier_register/cashier_register';
import CashierAccount from '../cashier_account/cashier_account';

function InfoTable({data_tables,select_table,cashier_register,cashier_account,display_category}) {
    return (

      <div className='info_cashier'>
      {
        data_tables.filter(a => a.id === select_table)
                   .map(d => (
        <div>
          <button className='button_cashier' id="B1">
          <p className ='text_cashier'>Mesa {d.number}</p>
          </button>

          <div className= 'container_cashier_tables' key= {d.id}>
            <button className='button_register' id="B1"
                    onClick={()=>cashier_register()}
                    style={display_category === true ? {background: '#32C755'} :
                                                       {background: 'white'}}>

              <p className ='text_register'
                 style={display_category === true ? {color: '#FFFFFF'} :
                                                     {color: 'rgba(0, 0, 0, 0.5)'}}>
                                                        Registro</p>
            </button>
            <button className='button_account' id="B1"
                    onClick={()=>cashier_account()}
                    style={display_category === false ? {background: '#32C755'} :
                                                       {background: 'white'}}>
              <p className ='text_account'
              style={display_category === false ? {color: '#FFFFFF'} :
                                                  {color: 'rgba(0, 0, 0, 0.5)'}}>
                                                          Cuenta</p>
            </button>

              <div className= 'cashier_component'
                   style={display_category === true ? {display: 'block'} :
                                                      {display: 'none'}}>
              <CashierRegister/>
              </div>

              <div className= 'cashier_component'
                   style={display_category === false ? {display: 'block'} :
                                                       {display: 'none'}}>
              <CashierAccount/>
              </div>

          </div>

        </div>
        ))
      }

      </div>


  )};


const mapStateToProps = state => ({
  data_tables: state.data_tables,
  select_table: state.select_table,
  display_category: state.display_category,

})

const mapDispatchToProps = dispatch => ({
  cashier_register() {
    dispatch({
      type: 'CLICK_REGISTER',
      display_category: true,

    })
  },
  cashier_account() {
    dispatch({
      type: 'CLICK_ACCOUNT',
      display_category: false,
    })
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(InfoTable);
