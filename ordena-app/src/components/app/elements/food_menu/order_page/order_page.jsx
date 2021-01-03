import React from 'react';
import { connect } from 'react-redux';
import ItemOrder from '../items_order/items_order.jsx'
import {RightOutlined,DownOutlined} from '@ant-design/icons';



function OrderPage({ItemOrder,data_products, orderList, price_resume}){
  return(
  <div className='page_order_1'>
    {/*<div className='title_order'>
      Resumen Ordena
    </div>
    <hr className='line_order'/> */}
    <div className='list_order'>
    {
    orderList.map(p => (
      <div className='container_product_order' key={p.id}>
          <button key={p.id}
                  type="button"
                  className="collapsible_info_order">
              <p className='icon_collapsible'>
                {p.state_button === false ? <RightOutlined /> :
                                            <DownOutlined />}
              </p>
              <li className ='name_item'> {p.product} </li>
              <li className ='price_item'> ${formatNumber(p.price)}</li>
              <li className ='unit_item_order'>
                  <button className='less_item'> - </button>
                  <div className='unit_order'>  {p.unit_item} </div>
                  <button className='more_item'> + </button>
              </li>
            </button>
            <div className="content_collapsible"
                 style={p.state_button === false ? {display: 'none'} :
                                                    {display: 'block'}}>
          <p>hola1</p>
        </div>
      </div>
      ))}
    </div>

    <div className='total_order'>
      <div>
        Total Ordena
      </div>
      <div className='price_order'>
        $ {formatNumber(price_resume)}
      </div>
    </div>
    <div className='div_button_order'>
      <button className='button_order'>
        Ordenar
      </button>
    </div>
  </div>
  )
}

function formatNumber(price_item){
  return new Intl.NumberFormat("de-DE").format(price_item)
}

const mapStateToProps = state => ({
  orderList: state.orderList,
  data_products: state.data_products,
  price_resume: state.price_resume,
})

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
