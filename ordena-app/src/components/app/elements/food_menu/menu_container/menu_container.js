import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TargetList from '../list_menu/list_menu.js'



export class MenuCont extends Component {


  static propTypes ={
    page_menu: PropTypes.number,

  }

  render () {
      const { page_menu } = this.props

      switch (page_menu) {

            case 0:
                return (

                  <div>

                    <div className='title_menu'>
                      Descuentos
                    </div>

                    <hr id='separator_card_top'/>
                    <div className='card'>
                      <TargetList/>
                    </div>
                    <br/>
                    <div className='title_menu_2'>
                      Más Vendidos
                    </div>
                    <hr id='separator_card_bottom'/>
                    <div className='card'>
                      <TargetList />
                    </div>
                    <br/>
                  </div>

                  //<Descuentos />
                  //<Mas Vendidos />
                  //.... las demas categorias
                )
            case 1:
                return (
                  <div>
                    <div className='title_menu'>
                      Favoritos
                    </div>
                    <hr id='separator_card_top'/>
                    <div className='card'>
                      <TargetList />
                    </div>
                  </div>
                  //<Tarjeta arreglo='' />
                )
            case 2:
                return (
                  <div>
                    <div className='title_menu'>
                      Entradas
                    </div>
                    <hr id='separator_card_top'/>
                    <div className='card'>
                      <TargetList />
                    </div>
                  </div>
                )
            case 3:
                return (
                  <div>
                    <div className='title_menu'>
                      Platos Fuertes
                    </div>
                    <hr id='separator_card_top'/>
                    <div className='card'>
                      <TargetList />
                    </div>
                  </div>
                )
            case 4:
                return (
                  <div>
                    <div className='title_menu'>
                      Para Compartir
                    </div>
                    <hr id='separator_card_top'/>
                    <div className='card'>
                      <TargetList />
                    </div>
                  </div>
                )
            case 5:
                return (
                  <div>
                    <div className='title_menu'>
                      Bebidas
                   </div>
                    <hr id='separator_card_top'/>
                    <div className='card'>
                      <TargetList />
                    </div>
                  </div>
                )


            default:
                return (
                  <div>
                  <div className='title_menu'>
                    Descuentos
                  </div>
                  <hr id='separator_card_top'/>
                  <div className='card'>
                    <TargetList/>
                  </div>
                  <br/>
                  <div className='title_menu'>
                    Más Vendidos
                  </div>
                  <div className='card'>
                    <TargetList />
                  </div>
                  <br/>
                  </div>
                )
         }
  }
}
