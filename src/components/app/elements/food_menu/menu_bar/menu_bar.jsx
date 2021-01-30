import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import TargetList from '../list_menu/list_menu.jsx';
import PageFood from '../page_food/page_food.jsx';

const { TabPane } = Tabs;

function FoodMenu({posts, showMenu, id_category, selectCategory}){
  if(showMenu===true){
    return(
        <div className='card-container'>

        <Tabs defaultActiveKey={"0"} tabPosition={'top'} size={'large'} type='card'>
          {[...Array.from({ length: posts.length }, (v,i) => i)].map(i => (

              <TabPane tab={<p
                              key={i.id}
                              id='text_menu'
                              onClick={() => selectCategory(i)}>
                              {posts[i].text}
                            </p>}
                       key={i}
                      >

                  <div className="content">
                    <hr id='separator_menu_top'
                        style={posts[i].id === 1 ? {display:'none'}:{display:'flex'}}/>
                    <div className = 'title_bar'
                         style={posts[i].id === 1 ? {display:'none'}:{display:'flex'}}>
                      {posts[i].text}
                    </div>
                    <hr id='separator_menu_title'/>
                    <TargetList />

                  </div>
              </TabPane>
        ))}
      </Tabs>
    </div>
    )
  }
  return(
    <div className='card-container'>

    <Tabs defaultActiveKey={"0"} tabPosition={'top'} size={'large'} type='card'>
      {[...Array.from({ length: posts.length }, (v,i) => i)].map(i => (

          <TabPane tab={<p id='text_menu' onClick={() => selectCategory(i)}>{posts[i].text}</p>}
                   key={i}
                   >

              <div className="content">
                <hr id='separator_menu_top'/>

                <PageFood />

              </div>
          </TabPane>
    ))}
  </Tabs>
</div>
  )
}

const mapStateToProps = state => ({
  posts: state.posts,
  showMenu: state.showMenu,
})

const mapDispatchToProps = dispatch => ({
  selectCategory(i) {
    dispatch({
      type: "SELECT_CATEGORY",
      id_category: i,
      showMenu: true,


    })
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(FoodMenu);
