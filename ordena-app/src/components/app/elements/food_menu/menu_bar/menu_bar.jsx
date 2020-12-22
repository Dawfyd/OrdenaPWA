import React from 'react';
import { Tabs } from 'antd';
import {MenuCont} from '../menu_container/menu_container.js';


const { TabPane } = Tabs;



const posts = [
    {id: 1, text: 'Menú'},
    {id: 2, text: 'Favoritos'},
    {id: 3, text: 'Entradas'},
    {id: 4, text: 'Platos fuertes'},
    {id: 5, text: 'Para compartir'},
    {id: 6, text: 'Bebidas'},
    {id: 7, text: 'Menú'},
    {id: 8, text: 'Favoritos'},
    {id: 9, text: 'Entradas'},
    {id: 10, text: 'Platos fuertes'},
    {id: 11, text: 'Para compartir'},
    {id: 12, text: 'Bebidas'},

  ];

class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  render() {
    return (

        <div className='card-container'>

        <Tabs defaultActiveKey={"0"} tabPosition={'top'} size={'large'} type='card' 	>
          {[...Array.from({ length: 12 }, (v,i) => i)].map(i => (

              <TabPane tab={<p id='text_menu'>{posts[i].text}</p>} key={i}>

                  <div className="content">
                    <hr id='separator_menu_top'/>
                      <MenuCont page_menu={i} />
                  </div>
              </TabPane>
        ))}
      </Tabs>
    </div>
    );
  }
}

export default SlidingTabsDemo;
