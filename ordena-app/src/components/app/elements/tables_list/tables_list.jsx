import React from 'react';
import { connect } from 'react-redux';
import {Avatar} from 'antd';
import table_green from '../../../../assets/images/tables_list/table_green.svg';
import table_purple from '../../../../assets/images/tables_list/table_purple.svg';
import table_red from '../../../../assets/images/tables_list/table_red.svg';

const TablesList = ({data_tables}) => (

  <section>

  <div>
    <div className='tables_list'>
    {
    data_tables.map(d => (


                <div className='order_tables_list' style={d.statetable === 1 ? {order: '3'} :
                                                          d.statetable === 2 ? {order: '2'} :
                                                                              {order: '1'}}>

                    <Avatar className='button_table'
                            key={d.id}
                            src ={d.statetable === 1 ? table_green :
                                  d.statetable === 2 ? table_purple :
                                                       table_red}/>
                      <p className='number_table'>{d.number}</p>

                </div>
    ))
    }

      </div>
    </div>
  </section>
);

const mapStateToProps = state => ({
  data_tables: state.data_tables
})

const mapDispatchToProps = dispatch => ({})


export default connect(mapStateToProps, mapDispatchToProps)(TablesList);
