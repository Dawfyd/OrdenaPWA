import React from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";
import TargetList from "../list_menu/list_menu.jsx";
import PageFood from "../page_food/page_food.jsx";
import { useQuery, gql } from "@apollo/client";

const { TabPane } = Tabs;

const ALL_CATEGORYS = gql`
  query {
    categories(
      findAllCategoriesInput: { companyUuid: "f9U4JIdp6RKKvPCeAkhr_" }
    ) {
      id
      name
      description
      avaliable
    }
  }
`;

function FoodMenu({
  posts,
  showMenu,
  id_category,
  selectCategory,
  SaveDataMenuSetupFromDB
}) {
  const { loading, error, data } = useQuery(ALL_CATEGORYS);
  console.log(data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  SaveDataMenuSetupFromDB(data.categories);
  if (showMenu === true) {
    return (
      <div className="card-container">
        <Tabs
          defaultActiveKey={"0"}
          tabPosition={"top"}
          size={"large"}
          type="card"
        >
          {[...Array.from({ length: posts.length }, (v, i) => i)].map(i => (
            <TabPane
              tab={
                <p
                  key={i.id}
                  id="text_menu"
                  onClick={() => selectCategory(i - 1)}
                >
                  {posts[i].name}
                </p>
              }
              key={i}
            >
              <div className="content">
                <hr
                  id="separator_menu_top"
                  style={
                    posts[i].id === -1
                      ? { display: "none" }
                      : { display: "flex" }
                  }
                />
                <div
                  className="title_bar"
                  style={
                    posts[i].id === -1
                      ? { display: "none" }
                      : { display: "flex" }
                  }
                >
                  {posts[i].name}
                </div>
                <hr id="separator_menu_title" />
                <TargetList />
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
  return (
    <div className="card-container">
      <Tabs
        defaultActiveKey={"0"}
        tabPosition={"top"}
        size={"large"}
        type="card"
      >
        {[...Array.from({ length: posts.length }, (v, i) => i)].map(i => (
          <TabPane
            tab={
              <p id="text_menu" onClick={() => selectCategory(i - 1)}>
                {posts[i].name}
              </p>
            }
            key={i}
          >
            <div className="content">
              <hr id="separator_menu_top" />

              <PageFood />
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts,
  showMenu: state.showMenu
});

const mapDispatchToProps = dispatch => ({
  selectCategory(i) {
    dispatch({
      type: "SELECT_CATEGORY",
      id_category: i,
      showMenu: true
    });
  },
  SaveDataMenuSetupFromDB(categorys) {
    dispatch({
      type: "RECEIVE_CATEGORYS_DB",
      db_categorys: categorys
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodMenu);
