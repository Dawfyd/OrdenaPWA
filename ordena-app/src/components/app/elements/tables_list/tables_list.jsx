import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Avatar} from 'antd';
import table_green from '../../../../assets/images/tables_list/table_green.svg';
import table_purple from '../../../../assets/images/tables_list/table_purple.svg';
import table_red from '../../../../assets/images/tables_list/table_red.svg';

const TablesList = ({data_tables,info_table}) => (


    <div className='tables_list'>
    {
    data_tables.map(d => (


                <div className='order_tables_list' style={d.state_table === 1 ? {order: '3'} :
                                                          d.state_table === 2 ? {order: '2'} :
                                                                                {order: '1'}}>
                    <Avatar className='button_table'
                            key= {d.id}

                            src ={d.state_table === 1 ? table_green :
                                  d.state_table === 2 ? table_purple :
                                                       table_red}/>
                      <Link to={'/service/info_table'}>
                      <p className='number_table'
                        onClick={()=>info_table(d)}
                      >{d.number}</p>
                      </Link>

                </div>

    ))
    }

    </div>


);

const mapStateToProps = state => ({
  data_tables: state.data_tables
})

const mapDispatchToProps = dispatch => ({info_table(d) {
  dispatch({
    type: 'CLICK_TABLE',
    select_table: d.number,

    })
  }})

export default connect(mapStateToProps, mapDispatchToProps)(TablesList);
