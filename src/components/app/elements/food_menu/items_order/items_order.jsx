import React from 'react';
import { connect } from 'react-redux';
import {RightOutlined,DownOutlined} from '@ant-design/icons';

function ItemOrder({data_products}){
  return(
    <div>{
    data_products.map(p => (
      <div className='container_product' key={p.id}>
        <button key={p.id}
                type="button"
                className="collapsible_info">
          <p  className='icon_collapsible'>
            {p.state_button === false ? <RightOutlined /> :
                                        <DownOutlined />}
          </p>
          <li className ='unit_item'>{p.unit_item} ud - {p.product}</li>
          <li className ='price_item'>${formatNumber(p.price_item)}</li>
        </button>
      <div className="content_collapsible"
           style={p.state_button === false ? {display: 'none'} :
                                             {display: 'block'}}>
        <p>hola1</p>
      </div>
  </div>
  ))
  }</div>
  )
}

function formatNumber(price_item){
return new Intl.NumberFormat("de-DE").format(price_item)
}

const mapStateToProps = state => ({
orderList: state.orderList,
data_products: state.data_products,
})

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(ItemOrder);
