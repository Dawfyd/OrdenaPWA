import React from 'react';
import { connect } from 'react-redux';

function InfoTable({data_tables,data_order,data_products,order_ready,select_table}) {

    return (

    <div className='info_table'>
    {
      data_tables.filter(a => a.id === select_table)
                 .map(d => (
      <div>
        <p className='number_info_table'>Mesa {d.number}</p>
        <hr className='separator_info_table'/>

        <div className= 'container_grid_info' key= {d.id}>
          <p className='product_info'>Productos</p>
          <p className='price_info'>Precio</p>

          {
            data_order.filter(b => b.id_table === d.id)
                      .map(o => (
            <div className= 'container_grid_table'>


            {
              data_products.filter(e => e.state_served === true)
                             .map(p => (
              <div className='container_product' key={p.id}>
                <li className ='unit_item'>{p.unit_item} ud - {p.product}</li>
                <li className ='price_item'>${formatNumber(p.price_item)}</li>
              </div>
              ))

            }

            <p className='pending_order'
               style={data_products.filter(f => f.state_served === false).length === 0
                                                                  ? {display: 'none'} :
                                                                    {display: 'flex'}}>
               Pedido Pendiente</p>

            {
              data_products.filter(f => f.state_served === false)
                           .map(p => (

              <div className='container_product' key={p.id}>
                <li className ='unit_item'>{p.unit_item} ud - {p.product}</li>
                <li className ='price_item'>
                <input
                    className='check_pending_order'
                    onClick={()=>order_ready(p)}
                    type="checkbox"
                    value=''/>
                </li>
              </div>
              ))
            }
            <p className='product_total'>Total Mesa {d.number}</p>
            <p className='price_total'
               style={o.state_paid === false ? {color: 'rgba(0, 0, 0, 0.7)'} :
                                               {color: '#32C755'}}

            >${o.total_price}</p>
            </div>
            ))
          }
        </div>
      </div>
      ))
    }
    </div>


)};
function formatNumber(price_item){
  return new Intl.NumberFormat("de-DE").format(price_item)
}

const mapStateToProps = state => ({
  data_tables: state.data_tables,
  data_products: state.data_products,
  data_order: state.data_order,
  select_table: state.select_table,
})

const mapDispatchToProps = dispatch => ({order_ready(p) {
    dispatch({
      type: 'ORDER_READY',
      id_ready: p.id,

    })
  }})



export default connect(mapStateToProps, mapDispatchToProps)(InfoTable);
